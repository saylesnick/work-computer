---
name: follow-up
description: Draft the right follow-up message for any customer and scenario — unsold be-back, internet-lead cadence touch, sold check-in, lease renewal, no-show, gone-cold. Use when Nick says /follow-up or asks what to send someone.
---

# /follow-up — The Right Next Touch

Input: customer context (paste from DriveCentric or describe) + scenario.
If the scenario is ambiguous, infer from context; ask at most ONE clarifying
question, and only if the draft truly can't be built without it.

## Scenario → source mapping

| Scenario | Playbook | Scripts |
|---|---|---|
| Internet lead, no response yet | floor-and-phone §1 | `email/internet-lead-cadence.md` (pick the right touch # by days elapsed) |
| Visited, didn't buy (be-back) | database-mining §Play 5 | `email/database-mining.md` §Be-back + `text/text-scripts.md` §Be-back |
| No-show | pre-sale §5 | `text/text-scripts.md` §No-show |
| Sold, first 30 days | post-sale §4 | `text/text-scripts.md` §Sold + `email/sold-followup.md` |
| Sold, long-term / anniversary / equity | referrals-repeat §2 | `email/sold-followup.md` §Quarterly/Anniversary |
| Lease ending | database-mining §Play 2 | `email/database-mining.md` §Lease renewal |
| Orphan owner | database-mining §Play 1 | `email/database-mining.md` §Orphan |
| Service customer w/ big estimate | database-mining §Play 4 | `email/database-mining.md` §Service-drive |
| Gone silent after interest | — | the graceful takeaway (§Be-back graceful close) |
| Referral network contact going cold | referrals-repeat §3 | `text/text-scripts.md` §Referral network |

(All paths relative to `os/scripts/` and `os/playbooks/lead-engines/` /
`os/playbooks/sale-process/`.)

## The one rule of every touch

**New information or genuine value — never "just checking in."** If Nick
provided no new info, ASK for one hook ("any price drops, new arrivals, or
incentive changes on their vehicle?") or build the touch around a value offer
(trade number, video, market update) that doesn't require inventing facts.

## Deliver

- **The read:** one line — where this customer is and why this touch now.
- **Primary message** (channel matched to scenario and history), ready to
  paste.
- **Backup channel version** (if primary is text, give the email too).
- **If no response:** the next touch + when (so Nick schedules it in
  DriveCentric immediately).
- When the scenario suggests it, remind the referral-ask or review-ask line
  fits here (max one light line, per referrals-repeat §1).

## Rules

- Nick's voice (CLAUDE.md): short, warm, zero cheese, one clear next step.
- Draft-only; `{{placeholders}}` for unverified numbers.
- Text scripts only via dealership tools to opted-in customers.
