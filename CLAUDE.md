# Nick's Sales OS — Berger Chevrolet

This repo is Nick's personal Sales Operating System. He sells new & used vehicles
at **Berger Chevrolet, Grand Rapids, MI** (West Michigan market). Everything here
exists to do two things: **generate more customers every day** and **convert more
of them at every stage of the sale**.

## Who Nick is (for voice & context)

- Full-line Chevy salesperson: new (Silverado, Equinox, Trax, Traverse, Blazer,
  Tahoe/Suburban, Corvette, EVs) and used inventory.
- Building his personal book of business inside the dealership — the goal is a
  self-sustaining pipeline of self-generated leads, referrals, and repeat buyers.
- Voice for customer-facing copy: warm, direct, zero car-salesman cheese. Short
  sentences. Helpful first, always a clear next step. Never pushy, never fake
  urgency, no ALL CAPS, at most one exclamation point per message.

## Systems of record

- **DriveCentric** is the dealership CRM of record. It owns tasks, the daily
  workplan, and open-customer follow-up scheduling. We NEVER rebuild or replace
  it — we draft content and plays that Nick copies into DriveCentric or executes
  from it.
- **Airtable base "Sales Command Center"** is Nick's personal metrics layer:
  Goals & Scoreboard, Activity Log, Deals (with source-engine attribution),
  Referral Network, Content Calendar. Skills read/write it.
- **This repo** holds the playbooks (`os/playbooks/`), script libraries
  (`os/scripts/`), and the master doc (`os/00-operating-system.md`).

## Operating rules (non-negotiable)

1. **Draft-only outbound.** The connected Gmail is Nick's personal account.
   Never auto-send sales outreach. Produce copy for Nick to send from his work
   email, DriveCentric, or the dealership texting tool. Creating a Gmail draft
   is OK only if Nick explicitly asks for a draft in his Gmail.
2. **Texting compliance.** Text scripts are only for customers who opted in
   through the dealership's tools. Every text play assumes DriveCentric/dealer
   texting platform, not personal SMS blasting.
3. **No invented facts in customer copy.** Prices, payments, rates, rebates,
   trade values, and availability come from Nick or dealership systems — use
   `{{placeholders}}` when unknown, never plausible-sounding numbers.
4. **Attribution matters.** Every sold deal gets a Source Engine in Airtable.
   That data decides where Nick doubles down.

## Daily interface (project skills)

| Command | What it does |
|---|---|
| `/daily` | Lead-gen morning brief: content to post, mining play, referral touches, calendar, pace vs. goal |
| `/new-lead` | Paste a lead → research + first-touch pack (email + text + voicemail) |
| `/follow-up` | Customer + scenario → the right cadence message in Nick's voice |
| `/social` | A week of content: posts, video shot lists, Marketplace copy |
| `/objection` | Paste what the customer said → response framework + exact words |
| `/log` | Natural-language capture → Activity Log / Deals rows in Airtable |
| `/review` | Weekly numbers review: funnel conversion, pace vs. goals, next week's focus |

## Where things live

```
os/00-operating-system.md        ← start here: the whole system on one page
os/playbooks/lead-engines/       ← social-video, database-mining, referrals-repeat, floor-and-phone
os/playbooks/sale-process/       ← pre-sale, during-sale, post-sale
os/scripts/{email,text,phone,social}/  ← copy-paste template libraries
.claude/skills/                  ← the slash commands above
```
