---
name: daily
description: Nick's lead-gen morning brief — today's content, mining play, referral touches, calendar, and pace vs. goal. Use when Nick says /daily, "morning brief", "what's my plan today", or starts a workday.
---

# /daily — The Morning Brief

Produce a tight, actionable brief for TODAY. This deliberately does NOT
duplicate DriveCentric's workplan (open-customer tasks live there) — this
brief covers the self-generated business DriveCentric doesn't drive.

## Gather (in parallel where possible)

1. **Calendar:** today's events via Google Calendar (`list_events`, today's
   date range). Flag customer appointments → remind about the confirmation
   sequence (`os/playbooks/sale-process/pre-sale.md` §1) for any not yet
   confirmed.
2. **Airtable** (IDs in `os/airtable.md`):
   - Goals & Scoreboard, current month row → compute pace: units/appointments
     actual vs. goal vs. % of month elapsed (working days if knowable, else
     calendar days). If no row for this month, create one per the rollover
     convention and say so.
   - Activity Log, yesterday's row → carry-over note if daily non-negotiables
     were missed.
   - Referral Network → contacts with Next Touch ≤ today, plus anyone with
     Last Touch > 30 days ago (going cold). Pick up to 3.
   - Content Calendar → items dated today with Status ≠ Posted. If none
     planned for today, pick a gap-filler from the weekly mix in
     `os/scripts/social/post-templates.md`.
3. **Mining play of the day:** from the weekly rotation table in
   `os/playbooks/lead-engines/database-mining.md` (Mon=Lease, Tue=Orphan,
   Wed=Equity, Thu=Be-backs, Fri=Orphan, Sat=Service drive). If `/review`
   has established that a different play converts best for Nick, weight
   toward that and say why.

## Deliver (this exact shape, short)

**☀️ Daily Brief — {{date}}**

1. **Pace:** X/Y units (Z% of month gone) — one-line verdict: ahead / on pace /
   behind by N. If behind: name the single highest-leverage fix today.
2. **Appointments today:** time, name, vehicle — confirmation status + what
   prep is missing (research? staging call-ahead?).
3. **Content:** today's planned post (or the gap-filler) — ready-to-paste copy
   drawn from the templates, plus which video to shoot today.
4. **Mining play:** today's play + the 10-outreach target described concretely
   ("pull leases maturing Dec–Feb from DriveCentric; scripts:
   `os/scripts/email/database-mining.md` §Lease renewal").
5. **Referral touches:** up to 3 names with a suggested one-line touch each.
6. **One coaching nudge:** a single sentence from the playbooks matched to
   whatever the numbers say is weakest right now.

End with: "Log tonight with /log."

## Rules

- Draft-only outbound (see CLAUDE.md). Never send anything.
- Keep the whole brief scannable in under a minute — no walls of text.
