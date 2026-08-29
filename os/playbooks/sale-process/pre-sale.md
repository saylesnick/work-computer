# Sale Process: Pre-Sale

**Job:** Turn a set appointment into a shown appointment with a prepped
customer, a staged vehicle, and a salesperson who knows more about their
situation than they expect. Show rate and first impression are decided here —
before they arrive.

---

## 1. The confirmation system (moves show rate from ~50% to 70%+)

An unconfirmed appointment is a rumor. The sequence for every appointment:

1. **Immediately after setting it:** recap text — your name (and photo the
   first time), Berger's address, date/time, the exact vehicle. "I'm putting a
   sold-pending tag on it so it's here for you."
2. **Night before (afternoon before for morning appts):** confirmation text
   with one NEW piece of value: "Just had it washed and pulled photos of the
   window sticker — see you at 10." New info makes confirming feel like
   progress, not a chore.
3. **Day of, ~2 hours out:** short text: "All set for 4:30 — park in guest
   spots by the main door, I'll meet you there."
4. **No response to #2?** Call. A reschedule you control beats a silent no-show.
   Scripts: `../../scripts/text/text-scripts.md` §Appointment confirmations.

## 2. Customer research prep (10 minutes that changes the whole deal)

Before any appointment, run `/new-lead` (or `/follow-up` for existing
customers) and review:

- **DriveCentric history:** every prior note, previous purchases, service
  history, last trade. Nothing kills trust like re-asking what they already
  told the store.
- **The vehicle they want:** actual status (in stock? in transit? sister
  units?), key specs, current incentives from the desk, days-in-stock.
- **Their trade (if known):** rough book range pulled beforehand so the trade
  walk starts informed.
- **Their likely situation:** lease ending? Growing family (Traverse/Tahoe
  shopper)? Work truck (payload/towing questions)? Prep 2–3 discovery questions
  specific to them.
- **Payment homework:** if any numbers were discussed by phone/email, have the
  desk pre-work ranges so there's no dead air at the numbers stage.

## 3. Vehicle staging (the show)

- Vehicle pulled up front **before** they arrive — washed, fueled enough for a
  real demo, floor mats straight, temperature comfortable in Michigan weather.
- **Sold-pending tag on the mirror.** It's honest (it IS being held for their
  appointment) and it communicates demand.
- Sister unit identified and nearby if there's any chance of a color/trim
  switch.
- Trade-walk kit ready: flashlight, tread gauge if you use one, appraisal slip.

## 4. First-impression plan

- **Meet them outside**, at their car, by name, on time. "Nick — we talked
  about the Equinox. It's right here waiting for you."
- Offer drinks, offer the restroom, introduce them to one other human (your
  manager or a service advisor) — people don't ghost stores where three people
  know their name.
- **Set the agenda out loud** (reduces defensiveness measurably): "Here's my
  plan — look it over, drive it, then if you love it we'll sit down and I'll
  get you completely out the door in about an hour. Fair?"

## 5. If they no-show

No guilt, all value, same day: "Hey {{name}}, missed you at 4:30 — no stress at
all. It's still tagged for you through tomorrow. Does 6 tonight or Saturday
morning work better?" Then one call the next day. Two silent no-shows → into
the be-back cadence (`../lead-engines/database-mining.md` §Play 5), not the
trash.

## Metrics

- Show rate (shown ÷ set) — the confirmation system's scorecard. Target 70%+.
- Prepped-appointment rate: did every shown appointment have research + staging
  done? (Binary, tracked honestly in `/log`.)
