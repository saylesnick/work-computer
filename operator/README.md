# Sayles OS — the local cockpit

One interface for Nick's whole operation, built out in sections. Section 01
is **Berger · Sales**: skill launcher, live-streamed Claude Code runs, run
history with activity charts, and the month's scoreboard. Brain, Goals,
Money, and Health are stubbed in the sidebar and get built next — each new
section is just another tab in this shell. Runs on your own computer at
`http://127.0.0.1:8768`.

Zero dependencies. One file server, one page, Node built-ins only.

## Setup (personal computer, ~10 minutes)

1. **Install Node.js 18+** — https://nodejs.org (LTS).
2. **Install Claude Code** and log in:
   ```
   npm install -g @anthropic-ai/claude-code
   claude          # first run walks you through login
   ```
3. **Clone this repo:**
   ```
   git clone https://github.com/saylesnick/work-computer.git
   cd work-computer
   ```
4. **Start the Operator:**
   ```
   node operator/server.js
   ```
   Open http://127.0.0.1:8768 — you're in the cockpit.

## Optional: live scoreboard

The Units/Gross meters read the "Sales Command Center" Airtable base when an
`AIRTABLE_TOKEN` is set:

1. Create a personal access token at https://airtable.com/create/tokens with
   scope `data.records:read`, access limited to the **Sales Command Center**
   base only.
2. Start with the token in the environment:
   ```
   AIRTABLE_TOKEN=pat_xxx node operator/server.js
   ```

Without a token the meters simply show a hint; everything else works.

## Using it

- **Skill chips** load a ready template into the prompt box (`/daily`,
  `/new-lead`, `/log`, …). Edit, press **Run** (or Ctrl/Cmd+Enter).
- Output streams into the console; tool use shows as `▸` lines; the run
  footer shows status, duration, and cost.
- **Permissions** defaults to ask-first. "Accept edits" lets a run write
  files (e.g., `/social` updating content plans) without prompting.
- Every run is recorded in `operator/runs/` (git-ignored, local only) and
  feeds the Today meter, the 7-day bars, and the 30-day cumulative chart.
- One run at a time by design — this is a cockpit, not a render farm.

## Notes

- The server binds 127.0.0.1 only; nothing is exposed to the network.
- Runs execute in the repo root, so skills, playbooks, and CLAUDE.md all
  load exactly as they do in a terminal Claude Code session.
- The cloud pieces still work from anywhere: the Dashboard and Field Manual
  chips link to the published artifacts.
