# DriveCentric Brain

The working map of Nick's CRM, distilled and restructured from the Muse/Orion
"CRM Master Brain" mapping (v1, completed 2026-10-21, verified live that day;
Nick personally confirmed the Store Settings sections against screenshots).
This copy is organized by **what Nick does with it**, not by what the screens
look like, and is scrubbed of customer personal data. Store-wide numbers below
are the 2026-10-21 snapshot — treat as "order of magnitude," not live.

**Standing rule (inherited and kept): everything in DriveCentric is READ-ONLY
for AI assistants unless Nick explicitly says otherwise.** Nothing sent,
edited, created, completed, or saved without his go-ahead.

---

## 1. The lay of the land (60-second map)

- **Home** = Sales Engagement Hub (`#/pipeline/sales`): stage cards
  Engaged → Visit → Proposal → Sold → Delivered, each clickable into sortable
  drill-down tables with filters (Users, Date, Source, New/Used, Make/Model…).
  A Snooze tray holds paused follow-ups with wake dates.
- **Top nav:** Leads · Conversations (3-pane inbox; the context panel has a
  "Genius Summary" generate button) · Workplan (daily task list — the Day
  2/3/5/10 touchpoint cadence lives here) · Appointments (personal view) ·
  Inventory (~884 vehicles) · Mining · Reports (two kinds — see §2) ·
  Agent Hub.
- **Customer record** = right slide-over: Activity | Conversation | Open |
  Deals | Value tabs; composer for NOTE/CALL/EMAIL/TEXT/VIDEO/TASK/APPT;
  Actions: Check In, Mark as Sold, Dead.
- **Nick's book (snapshot):** 899 customers, 101 open deals (per User
  Management).
- **Templates** live at Store Settings → Templates (Email | Text | Video tabs,
  with reply-rate stats). Not insertable from the composer directly.
- **"Fumbled"** is DriveCentric's own word for a missed/failed first response —
  the system grades response speed everywhere.

## 2. KPI pull — where our Airtable numbers come from

The useful reports are **Standard/Advanced Reports** (`#/reports`, 20 reports).
The basic "Reports" template manager is empty — skip it. Most reports have
**Store | Team | User grouping tabs — always pull the User tab** for Nick's
personal numbers. Date-range chip (default This Month) + three-dot
**Download**. Data refreshes nightly, except Daily Activity (live).

| Airtable field (Sales Command Center) | DriveCentric source |
|---|---|
| Units Actual / Gross Actual (Goals) | **Delivery Summary** → User tab (sold, delivered, front/back/total gross PVR) |
| Appointments Set Actual (Goals) | **Appointment** report → User tab (created / confirmed / showed) |
| Conversations, Appts Set/Shown (Activity Log) | **Visit** + **Appointment** reports → User tab; **Daily Activity** for live today |
| Deal Source Engine (Deals) | **Source** report (every source ranked) + Delivered drill-down's SOURCE column |
| Calls / Texts / Emails (Activity Log) | **Daily Activity** (live volumes) + **Response Time** |
| Funnel ratios (for /review) | **Lead Engaged** (response + day-1-5 progression), **Visit Delivered** (visit→proposal→sold), **Pipeline Health** (aging) |

**Monthly routine (5 min, month-end):** Delivery Summary → User tab →
units + gross → tell Claude `/log`. **Weekly routine (2 min):** Appointment +
Visit → User tab → appointments set/shown → `/log`.

## 3. Mining ↔ the Sayles OS lead engines

DriveCentric's **Mining** tab is our database-mining playbook pre-built, with
live counts (store-wide snapshot 2026-10-21). Bulk actions per mine: Create
AIM Campaign / Tag Customers / Assign Task.

| DriveCentric segment (count) | Our play (`os/playbooks/lead-engines/database-mining.md`) |
|---|---|
| **Orphans (95)** | Play 1 — Orphan owners. 95 claimable owners, pre-listed. |
| **Lease Ending 3 Months (3)** + Coming out of Contract <18mo (40) | Play 2 — Lease renewals |
| **High Interest Rate 9.9+ (116)** + Sweet Spot High Interest (54) | Play 3 variant — refinance/upgrade angle ("your rate was a 2024 problem") |
| **No Closed ROs Last 6 Months (601)** | Play 4 adjacent — lapsed service = lapsed relationship; win-back |
| **Dead Deals (1,007)** | Play 5 — be-backs/unsold at store scale |
| Birthdays This Month (39) | Referrals & repeat cadence |

Daily use: the `/daily` mining play now names the matching DriveCentric mine to
open, so the 10-outreach list is one click, not a hunt.

## 4. The Appointment Board — the morning edge

Store Settings → General → External Boards → **Appointment Board**
(`#/appointment-dashboard`). Today-only, live, shows EVERY store appointment
with time + the staff member working it. Almost nobody on the floor knows it
exists.

**How to read it:**
- Row = customer (first name + last initial) · vehicle/descriptor or dash ·
  time · status (Not Arrived / Pending).
- Small name under the customer = who's working the lead.
- **Em-dash (no name) = fully unassigned.**
- **BDC-only name = likely open — a salesperson can take it** (Nick's rule;
  the board shows names without role labels, so roles come from the roster
  below).
- Staff roster for decoding (taught by Nick, 2026-10-21): BDC manager Damien
  Zuri; BDC: Robin Leet, Dana Heideman, Nicole Sadowski, Cooper Morton,
  Nathan Solle (likely); Used-car managers DJ Selby, Nick Butler; New-car
  managers Cecil Darnell, Douglas Schrader. Any other name → assume
  salesperson (taken). Manager name under a customer → ask, don't assume.

**The morning play (now part of `/daily` when Nick is logged into
DriveCentric):** scan for dash rows + BDC-only rows, note their arrival times,
and be on the lot at those times. Delivery Board (`#/delivery-dashboard`) =
today's sold board.

**⚠️ Never open the Leaderboard** (`#/leader-dashboard…`) inside a working
session — verified twice that it force-signs-out the whole session.

## 5. Store-data insights that sharpen our playbooks

The 2026-10-21 report snapshot validates several Sayles OS bets with Berger's
own data:

1. **The video gap is enormous: 99% of leads get NO personalized video**
   (474 lead opps → 4 videos). Our social-video playbook's 1:1 walkaround
   habit isn't a nice-to-have — it's a near-monopoly differentiator at this
   store.
2. **Speed kills (or saves):** after-hours first response averages 21m with
   361 fumbles vs 3m business-hours; storewide 23% of texts and 43% of emails
   are fumbled (>1hr). Our speed-to-lead play beats the store default by
   default.
3. **The pipeline is heavily aged:** ~half of Leads and 60% of Engaged are
   91+ days old — exactly the be-back/re-engagement inventory Play 5 feeds on.
4. **Facebook is the store's #1 internet source** (300 opps this month) —
   direct validation of the Marketplace/social engine (and the Shiftly skill).
5. **Templates with proof:** the store's best text template ("Good morning!
   Check-in") pulls a 27.3% reply rate; mass emails pull ~1-2%. Short personal
   texts win — matches our script library's design.
6. **The store's AI agents** (Agent Hub, persona "Grace Hopewell") already
   send follow-up at scale with ~50% human interference. Know they exist so
   Nick's personal touches don't collide with agent messages — check the
   Conversation thread before sending.
7. **Round-robin routing** (Distributions: one rule, all sources → "BC") and
   a **"Fumbled" grade on first response** mean claimed-fast beats assigned.

## 6. Access & safety notes

- Login: app.drivecentric.com → work email account; MFA code daily (email to
  work inbox). **No credentials are stored in this repo — ever.**
- DriveCentric has **no usable public API** (partner-gated, push-only), so the
  browser is the only bridge; that makes the READ-ONLY rule above the law.
- This repo copy strips customer examples and personal data from the original
  mapping; keep it that way in future edits.
- An AI assistant holding work-CRM credentials and browsing customer data is a
  dealership-policy question — Nick should have (or get) a manager's OK for
  that arrangement, whichever assistant does it.

## 7. Known gaps (inherited from the v1 mapping — accepted, don't chase)

Leaderboard contents (sign-out trap) · Business Rules interiors (admin) ·
Performance Agent report rows · Genius Follow-Up panel interior · report
Download format options · a few off-screen report columns; Days To Conversion
and Source Traffic values (structures verified, grids were loading).

## Change log

- **2026-10-24** — First repo version: restructured from Muse/Orion CRM Master
  Brain v1 (2026-10-21), reorganized by use (KPI pull, mining↔plays, morning
  board), customer examples scrubbed, insights distilled.
