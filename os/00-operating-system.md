# The Operating System

One page that explains how the whole machine fits together. Everything else in
this repo is a component of this.

## The core problem this OS solves

The dealership feeds every salesperson roughly the same diet of ups, phone-ups,
and internet leads. Top producers don't eat better from that trough — they build
their **own** feed. This OS builds Nick's: four lead engines that produce
customers daily, a sale process that converts them at above-store rates, and a
scoreboard that shows exactly which engine to feed next.

## The funnel math (why activities are the lever)

Everything downstream is a conversion of something upstream:

```
Activities → Conversations → Appointments set → Appointments shown → Sold
```

Typical retail-automotive baselines to beat (track your own real numbers in
Airtable — these are just starting assumptions):

- Conversations → appointment set: ~20–30%
- Appointment set → shown: ~50–70% (confirmation system moves this most)
- Shown → sold: ~50%

So at baseline, **~1 sale per 15–20 real conversations**. A 15-unit month needs
roughly 250–300 real conversations — about 10–12 per working day. The engines
below exist to manufacture those conversations; the sale-process playbooks exist
to beat those conversion rates; `/review` computes Nick's actual ratios so the
assumptions get replaced by his real numbers.

## The four lead engines

| Engine | Playbook | What it produces | Time horizon |
|---|---|---|---|
| Social & video | `playbooks/lead-engines/social-video.md` | Inbound strangers who already trust you | Compounds over months |
| Database mining | `playbooks/lead-engines/database-mining.md` | Warm conversations from the house book (orphans, lease renewals, equity, service drive, be-backs) | Immediate |
| Referrals & repeat | `playbooks/lead-engines/referrals-repeat.md` | The highest-closing leads that exist | Builds forever |
| Floor & phone | `playbooks/lead-engines/floor-and-phone.md` | Max conversion of what the store already hands you | Immediate |

Rule of thumb: **database mining and floor/phone pay this month; social and
referrals pay every month after.** Do both daily — the compounding engines are
the ones that eventually make the trough irrelevant.

## The sale process

| Stage | Playbook | Job |
|---|---|---|
| Pre-sale | `playbooks/sale-process/pre-sale.md` | Get them to actually show, prepped and pre-sold |
| During-sale | `playbooks/sale-process/during-sale.md` | Discovery → demo → trade → numbers → close |
| Post-sale | `playbooks/sale-process/post-sale.md` | Delivery, reviews, referrals, lifetime cadence |

## The operating rhythm

### Daily (the non-negotiables — ~60–90 min of self-generated work)
1. Run `/daily` — it hands you today's plan.
2. Post one piece of content (from `/social` batch) + shoot one video.
3. Run one mining play: 10 outreaches from the day's target list (orphans,
   lease renewals, equity, unsold).
4. Make the referral-network touches `/daily` surfaces.
5. Work DriveCentric's workplan as usual (that system already exists — this OS
   adds to it, never replaces it).
6. End of shift: `/log` your numbers in one sentence.

### Weekly (30 min, e.g., Saturday close or Monday open)
1. Run `/review` — real funnel ratios, pace vs. goal, engine attribution.
2. Batch next week's content with `/social`.
3. Pick next week's mining focus based on what `/review` shows is converting.

### Monthly
1. Set next month's Goals row in Airtable (units, gross, appointments, referrals).
2. Read the Deals table by Source Engine: double down on the top engine,
   fix or drop the bottom one.

## The scoreboard (Airtable: "Sales Command Center")

| Table | What it answers |
|---|---|
| Goals & Scoreboard | Am I on pace this month? |
| Activity Log | Did I do the daily work? (calls, texts, videos, posts, asks) |
| Deals | What sold, for how much gross, and **which engine produced it?** |
| Referral Network | Who sends me business and when did I last touch them? |
| Content Calendar | What's planned/posted and what performed? |

`/log` writes to it. `/daily` and `/review` read from it.

## Later / optional

- Scheduled auto-firing morning brief (a Routine that runs `/daily` before each
  shift) — turn on once the on-demand habit sticks.
- Vibe Prospecting connector (already installed, disabled in chat) — enable if
  Nick starts working commercial/fleet accounts.
