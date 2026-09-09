---
name: new-lead
description: Turn a pasted lead (from DriveCentric, Marketplace, phone-up, or anywhere) into a research summary plus a ready-to-send first-touch pack — email, text, and voicemail script. Use when Nick says /new-lead or pastes lead details.
---

# /new-lead — First-Touch Pack

Input: whatever Nick pastes — a DriveCentric lead, a Marketplace message, a
name + vehicle, an email thread. Speed matters more than completeness: the
whole point is contact within minutes
(`os/playbooks/lead-engines/floor-and-phone.md` §1).

## Steps

1. **Parse what's known:** name, contact, vehicle of interest, their exact
   question/words, source (internet/Marketplace/phone/walk-in/referral), trade
   hints, timing hints. Don't interrogate Nick for missing pieces — build the
   pack with `{{placeholders}}` for unknowns.
2. **Quick research (only what's fast):**
   - Vehicle: key specs/trim facts relevant to their question. Never invent
     price, availability, or incentives — placeholder them for Nick to fill
     from the desk.
   - Their situation: infer the likely buyer type (family/truck/commuter/EV)
     and 2–3 discovery questions tailored to it.
3. **Build the pack** in Nick's voice (rules in CLAUDE.md), adapted from:
   - Email: `os/scripts/email/internet-lead-cadence.md` Touch 1
   - Text: `os/scripts/text/text-scripts.md` §Internet lead
   - Voicemail + live-call opener: `os/scripts/phone/phone-scripts.md`
     §Outbound Day 0
   - Marketplace source → use `os/scripts/social/marketplace-replies.md`
     instead of email.
4. **Recommend the video:** name the exact 60-second walkaround to shoot for
   this lead (structure: `os/scripts/social/video-shot-lists.md` §1, 1:1
   variant).

## Deliver

**⚡ First-Touch Pack — {{name}} / {{vehicle}}**

- **The play:** one line — call twice now, then this text, then this email.
- **📞 Call opener + voicemail** (20s max)
- **💬 Text** (ready to paste into DriveCentric texting)
- **📧 Email** (subject + body, ready to paste)
- **🎥 Video to shoot:** one-line shot instruction
- **Discovery questions for the appointment:** 2–3, tailored
- **Cadence next steps:** which touches fire day 1/3/5 if no response
  (so Nick can schedule them in DriveCentric now)

## Rules

- Draft-only. Everything is copy-paste for work systems.
- `{{placeholders}}` for any fact not provided — never plausible-sounding
  prices, payments, or availability.
- If the lead is clearly an existing customer scenario (lease end, owner),
  hand off to the right play in `os/playbooks/lead-engines/database-mining.md`
  and use those scripts instead.
