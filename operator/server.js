#!/usr/bin/env node
/*
 * Berger Operator — local cockpit for Nick's Sales OS.
 *
 * Zero dependencies: Node 18+ built-ins only.
 *   node operator/server.js          → http://127.0.0.1:8768
 *
 * What it does:
 *   - Scans .claude/skills/ and renders them as launchable commands
 *   - Runs prompts through the Claude Code CLI (`claude -p … --output-format
 *     stream-json`) in the repo root, streaming output to the browser via SSE
 *   - Records every run in operator/runs/ and charts activity from them
 *   - Optionally proxies the Airtable scoreboard (set AIRTABLE_TOKEN)
 *
 * Env:
 *   PORT                  default 8768 (always binds 127.0.0.1)
 *   AIRTABLE_TOKEN        personal access token, data.records:read on the
 *                         "Sales Command Center" base → live KPI strip
 *   OPERATOR_CLAUDE_CMD   override the runner binary (testing), e.g.
 *                         "node tools/fake-claude.js"
 */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { spawn } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT, ".claude", "skills");
const RUNS_DIR = path.join(__dirname, "runs");
const PUBLIC_DIR = path.join(__dirname, "public");
const PORT = Number(process.env.PORT) || 8768;
const RUN_TIMEOUT_MS = 10 * 60 * 1000;
const AIRTABLE_BASE = "appTLYaiyhRPm97GD";
const AIRTABLE_GOALS_TABLE = "tblmboNzRt6HN70fz";

fs.mkdirSync(RUNS_DIR, { recursive: true });

/* ── SSE fan-out ─────────────────────────────────────────────────── */
const sseClients = new Set();
function broadcast(event, data) {
  const frame = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of sseClients) res.write(frame);
}
setInterval(() => { for (const res of sseClients) res.write(": ping\n\n"); }, 25000).unref();

/* ── Skill scanning ──────────────────────────────────────────────── */
function listSkills() {
  let dirs = [];
  try { dirs = fs.readdirSync(SKILLS_DIR, { withFileTypes: true }); } catch { return []; }
  const skills = [];
  for (const d of dirs) {
    if (!d.isDirectory()) continue;
    const file = path.join(SKILLS_DIR, d.name, "SKILL.md");
    let text = "";
    try { text = fs.readFileSync(file, "utf8"); } catch { continue; }
    const fm = /^---\n([\s\S]*?)\n---/.exec(text);
    let name = d.name, description = "";
    if (fm) {
      const nameM = /^name:\s*(.+)$/m.exec(fm[1]);
      const descM = /^description:\s*(.+)$/m.exec(fm[1]);
      if (nameM) name = nameM[1].trim();
      if (descM) description = descM[1].trim().split(" Use when")[0];
    }
    skills.push({ name, description });
  }
  const order = ["daily", "new-lead", "follow-up", "objection", "social", "log", "review"];
  skills.sort((a, b) => {
    const ia = order.indexOf(a.name), ib = order.indexOf(b.name);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
  return skills;
}

/* ── Run management ──────────────────────────────────────────────── */
let current = null; // { id, child, startedAt, prompt, chunks, meta }

function runnerCommand() {
  const override = process.env.OPERATOR_CLAUDE_CMD;
  if (override) { const parts = override.split(" ").filter(Boolean); return { cmd: parts[0], baseArgs: parts.slice(1) }; }
  return { cmd: "claude", baseArgs: [] };
}

function parseStreamLine(line) {
  let obj;
  try { obj = JSON.parse(line); } catch { return { kind: "chunk", text: line + "\n" }; }
  if (!obj || typeof obj !== "object") return null;
  if (obj.type === "system" && obj.subtype === "init") return { kind: "meta", model: obj.model || "" };
  if (obj.type === "assistant" && obj.message && Array.isArray(obj.message.content)) {
    const out = [];
    for (const c of obj.message.content) {
      if (c.type === "text" && c.text) out.push({ kind: "chunk", text: c.text });
      else if (c.type === "tool_use") out.push({ kind: "tool", name: c.name || "tool" });
    }
    return out;
  }
  if (obj.type === "result") {
    return {
      kind: "result",
      ok: obj.subtype === "success",
      text: typeof obj.result === "string" ? obj.result : "",
      costUsd: typeof obj.total_cost_usd === "number" ? obj.total_cost_usd : null,
      durationMs: obj.duration_ms || null,
      turns: obj.num_turns || null,
    };
  }
  return null;
}

function finishRun(status, result) {
  if (!current) return;
  const rec = {
    id: current.id,
    prompt: current.prompt,
    startedAt: current.startedAt,
    endedAt: new Date().toISOString(),
    status,
    model: current.meta.model || null,
    costUsd: result && result.costUsd != null ? result.costUsd : null,
    durationMs: result && result.durationMs ? result.durationMs : Date.now() - Date.parse(current.startedAt),
    turns: result && result.turns ? result.turns : null,
    excerpt: (result && result.text ? result.text : current.chunks.join("")).slice(0, 4000),
  };
  try { fs.writeFileSync(path.join(RUNS_DIR, `${current.id}.json`), JSON.stringify(rec, null, 2)); } catch {}
  clearTimeout(current.timer);
  current = null;
  broadcast("done", { status, run: rec });
}

function startRun(prompt, permissionMode) {
  const id = new Date().toISOString().replace(/[:.]/g, "-") + "-" + crypto.randomBytes(3).toString("hex");
  const { cmd, baseArgs } = runnerCommand();
  const args = [...baseArgs, "-p", prompt, "--output-format", "stream-json", "--verbose"];
  if (permissionMode === "acceptEdits") args.push("--permission-mode", "acceptEdits");
  let child;
  try {
    child = spawn(cmd, args, { cwd: ROOT, env: process.env, stdio: ["ignore", "pipe", "pipe"] });
  } catch (err) {
    return { error: `Could not start runner "${cmd}": ${err.message}` };
  }
  current = { id, child, prompt, startedAt: new Date().toISOString(), chunks: [], meta: {} };
  current.timer = setTimeout(() => { try { child.kill("SIGTERM"); } catch {} }, RUN_TIMEOUT_MS);
  broadcast("start", { id, prompt });

  let buf = "";
  child.stdout.on("data", (d) => {
    buf += d.toString();
    let nl;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl).trim();
      buf = buf.slice(nl + 1);
      if (!line) continue;
      const evs = parseStreamLine(line);
      for (const ev of [].concat(evs || [])) {
        if (!ev) continue;
        if (ev.kind === "chunk") { current.chunks.push(ev.text); broadcast("chunk", { text: ev.text }); }
        else if (ev.kind === "tool") broadcast("tool", { name: ev.name });
        else if (ev.kind === "meta") { current.meta = ev; broadcast("meta", ev); }
        else if (ev.kind === "result") { current.result = ev; broadcast("chunk", { text: "" }); }
      }
    }
  });
  child.stderr.on("data", (d) => broadcast("stderr", { text: d.toString().slice(0, 2000) }));
  child.on("error", (err) => { broadcast("stderr", { text: `runner error: ${err.message}\n` }); finishRun("error", null); });
  child.on("close", (code) => finishRun(code === 0 ? "ok" : "error", current ? current.result : null));
  return { id };
}

function listRuns(limit) {
  let files = [];
  try { files = fs.readdirSync(RUNS_DIR).filter((f) => f.endsWith(".json")).sort().reverse(); } catch {}
  const runs = [];
  for (const f of files.slice(0, limit || 200)) {
    try {
      const r = JSON.parse(fs.readFileSync(path.join(RUNS_DIR, f), "utf8"));
      runs.push({ id: r.id, prompt: (r.prompt || "").slice(0, 120), startedAt: r.startedAt, status: r.status, costUsd: r.costUsd, durationMs: r.durationMs, excerpt: (r.excerpt || "").slice(0, 400) });
    } catch {}
  }
  return runs;
}

/* ── Airtable scoreboard proxy (optional) ────────────────────────── */
async function scoreboard() {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) return { configured: false };
  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_GOALS_TABLE}`;
  const resp = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (!resp.ok) return { configured: true, error: `Airtable ${resp.status}` };
  const data = await resp.json();
  const mk = new Date().toISOString().slice(0, 7);
  let row = null;
  for (const r of data.records || []) {
    if ((r.fields || {}).Month === mk) { row = r.fields; break; }
    row = row || r.fields;
  }
  if (!row) return { configured: true, error: "no goals row" };
  return {
    configured: true,
    month: row.Month,
    units: { actual: row["Units Actual"] || 0, goal: row["Units Goal"] || 0 },
    gross: { actual: row["Gross Actual"] || 0, goal: row["Gross Goal"] || 0 },
    appts: { actual: row["Appointments Set Actual"] || 0, goal: row["Appointments Set Goal"] || 0 },
    refs: { actual: row["Referrals Received Actual"] || 0, goal: row["Referrals Received Goal"] || 0 },
  };
}

/* ── HTTP server ─────────────────────────────────────────────────── */
function json(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) });
  res.end(body);
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let b = "";
    req.on("data", (d) => { b += d; if (b.length > 1e6) { reject(new Error("too large")); req.destroy(); } });
    req.on("end", () => resolve(b));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  try {
    if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/index.html")) {
      const html = fs.readFileSync(path.join(PUBLIC_DIR, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      return res.end(html);
    }
    if (req.method === "GET" && url.pathname === "/api/state") {
      return json(res, 200, {
        running: !!current,
        currentPrompt: current ? current.prompt.slice(0, 120) : null,
        repo: ROOT,
        airtableConfigured: !!process.env.AIRTABLE_TOKEN,
        runner: runnerCommand().cmd,
      });
    }
    if (req.method === "GET" && url.pathname === "/api/skills") return json(res, 200, { skills: listSkills() });
    if (req.method === "GET" && url.pathname === "/api/runs") return json(res, 200, { runs: listRuns(200) });
    if (req.method === "GET" && url.pathname === "/api/scoreboard") {
      try { return json(res, 200, await scoreboard()); }
      catch (e) { return json(res, 200, { configured: true, error: e.message }); }
    }
    if (req.method === "GET" && url.pathname === "/api/stream") {
      res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" });
      res.write(": connected\n\n");
      sseClients.add(res);
      req.on("close", () => sseClients.delete(res));
      return;
    }
    if (req.method === "POST" && url.pathname === "/api/run") {
      if (current) return json(res, 409, { error: "A run is already in progress." });
      let body = {};
      try { body = JSON.parse((await readBody(req)) || "{}"); } catch { return json(res, 400, { error: "bad JSON" }); }
      const prompt = String(body.prompt || "").trim();
      if (!prompt) return json(res, 400, { error: "empty prompt" });
      const out = startRun(prompt, body.permissionMode === "acceptEdits" ? "acceptEdits" : "default");
      return json(res, out.error ? 500 : 200, out);
    }
    if (req.method === "POST" && url.pathname === "/api/stop") {
      if (!current) return json(res, 200, { stopped: false });
      try { current.child.kill("SIGTERM"); } catch {}
      return json(res, 200, { stopped: true });
    }
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("not found");
  } catch (err) {
    try { json(res, 500, { error: err.message }); } catch {}
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Berger Operator → http://127.0.0.1:${PORT}`);
  console.log(`repo: ${ROOT}`);
  console.log(`runner: ${runnerCommand().cmd}${process.env.AIRTABLE_TOKEN ? "  ·  airtable: configured" : "  ·  airtable: not configured (set AIRTABLE_TOKEN for live scoreboard)"}`);
});
