# Nick's Sales OS

A personal Sales Operating System for selling Chevys at Berger Chevrolet
(Grand Rapids, MI) — built to generate self-made customers daily and convert
more of them at every stage of the sale.

**Start here:** [`os/00-operating-system.md`](os/00-operating-system.md) —
the whole system on one page.

## What's inside

| Piece | Where | What it does |
|---|---|---|
| Master doc | `os/00-operating-system.md` | The funnel math, the four lead engines, the operating rhythm |
| Lead engines | `os/playbooks/lead-engines/` | Social & video, database mining, referrals & repeat, floor & phone |
| Sale process | `os/playbooks/sale-process/` | Pre-sale, during-sale, post-sale playbooks |
| Scripts | `os/scripts/{email,text,phone,social}/` | Copy-paste templates for every scenario |
| Scoreboard | Airtable "Sales Command Center" (`os/airtable.md`) | Goals, activity, deals w/ source attribution, referral network, content calendar |
| Daily interface | `.claude/skills/` | `/daily` `/new-lead` `/follow-up` `/social` `/objection` `/log` `/review` |
| Dashboard | `dashboard/sales-command-center.html` | Live command-center page (published as a Claude artifact; reads Airtable via the viewer's connector) |

## The daily loop

Morning: `/daily` → work the plan (1 post, 1 video, 10 mining outreaches,
referral touches, DriveCentric workplan as usual) → evening: `/log` your
numbers in one sentence. Weekly: `/review` picks next week's focus.

DriveCentric remains the CRM of record; everything here is drafted for
copy/paste into dealership systems. No outbound is ever auto-sent.
