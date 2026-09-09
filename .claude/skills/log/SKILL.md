---
name: log
description: Natural-language capture into the Airtable Sales Command Center — daily activity counts, sold deals with source attribution, referral touches, posted content. Use when Nick says /log or reports numbers/results ("logged 20 calls", "sold the Silverado to Jones").
---

# /log — End-of-Shift Capture

Input: one or more natural-language sentences, e.g.:
"20 calls, 8 texts, 2 appointments set, 1 shown. Sold Jones the used Silverado,
$1,800 front — that was a Marketplace lead. Posted the Equinox walkaround.
Coffee with Mike the barber."

Parse it fully, write everything to the right tables, confirm in one line.
IDs and conventions: `os/airtable.md`. Record writes need field IDs — fetch
schema via `get_table_schema` (cache within the session).

## Routing

- **Activity counts** (calls/texts/emails/conversations/appointments/
  outreaches/videos/posts/listings/referral asks) → **Activity Log**, today's
  row. If today's row exists, ADD to its counts (read first) — never
  duplicate rows. Unmentioned fields stay untouched.
- **A sale** → new **Deals** row: Deal = "Customer — Vehicle", Date = today
  (unless stated), New/Used, gross if given, **Source Engine mapped to the
  closest choice** (Marketplace lead → Social/Marketplace). If source is
  missing, ASK — it's the one field that can't be skipped. Also increment
  Units Actual (+ Gross Actual if given) on this month's Goals row.
- **Appointments set** and **referrals received** → also increment the
  matching Actuals on the Goals row.
- **Referral-network touches** ("coffee with Mike") → update that contact's
  Last Touch = today (search by name; create the contact if new, asking only
  for Role/Business if unknown), suggest a Next Touch ~1 month out and set it.
- **Content posted** → matching Content Calendar row → Status = Posted (create
  the row if it wasn't planned). Performance notes go in Performance.
- **Reviews landed / referral asks made at delivery** → check the flags on the
  relevant Deals row.
- **Monthly rollover:** no Goals row for this month → create one (copy last
  month's goals, zero actuals) and tell Nick.

## Deliver

One compact confirmation:
"✅ Logged: {{summary of each write}}. Month so far: {{X}}/{{Y}} units,
{{pace verdict}}."

If any number looked ambiguous, state the interpretation used so Nick can
correct it in one word.

## Rules

- Never fabricate values for fields Nick didn't mention.
- This is the ONLY skill that routinely writes to Airtable actuals — keep the
  writes idempotent (read-check before update) so a repeated /log doesn't
  double-count.
