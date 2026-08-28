---
name: review
description: Weekly (or monthly) numbers review — real funnel conversion, pace vs. goals, source-engine attribution, and next week's single focus. Use when Nick says /review, "how am I doing", or it's week/month end.
---

# /review — The Weekly Review

Cadence: weekly by default; "monthly" mode when Nick says so or it's the last
day of the month. Data: `os/airtable.md`. Benchmarks: the funnel-math section
of `os/00-operating-system.md`.

## Compute

1. **Pull:** this month's Goals row; Activity Log rows for the review period;
   Deals rows for the period (and month-to-date); Referral Network state;
   Content Calendar Posted items + Performance.
2. **Integrity check:** do Goals Actuals match what Deals/Activity Log imply?
   Fix drift in Airtable and note it.
3. **Funnel ratios (Nick's REAL numbers, not the book's):**
   - Conversations → appointments set
   - Set → shown (the confirmation system's scorecard)
   - Shown → sold
   - Conversations per sale → therefore conversations/day needed for the goal
4. **Engine attribution:** deals by Source Engine, month-to-date and trending.
   Which engine is earning its time? Which is getting activity but no deals
   (activity logged vs. deals produced)?
5. **Consistency:** days with a complete Activity Log row ÷ working days;
   the daily non-negotiables hit rate (post + video + 10 outreaches +
   referral touches).
6. **Cold spots:** Referral Network contacts >30 days untouched; planned
   content never posted.

## Deliver

**📊 Review — {{period}}**

1. **Verdict line:** pace vs. goal in one sentence.
2. **The funnel:** a small table — stage, this period, ratio, vs. baseline
   (from the OS doc) — with ONE line naming the weakest conversion.
3. **Engines:** deals by source; one line: "double down on X, fix or drop Y."
4. **Consistency score** and what got skipped most.
5. **Next week's ONE focus:** a single change with the biggest expected
   payoff, tied to a specific playbook section — not a list of five.
6. **Adjustments made:** any Airtable fixes, and (if the data justifies it)
   an update to the `/daily` mining-rotation weighting — record that decision
   in the Goals row Notes so `/daily` picks it up.

Monthly mode adds: set next month's Goals row with Nick (propose numbers from
the trailing 3 months + ambition), and archive the month in one paragraph in
the Goals row Notes.

## Rules

- Real numbers only — if the data is too thin to compute a ratio, say "not
  enough data yet" rather than inventing a percentage.
- Always end with the single focus. The review's job is one decision, not a
  report.
