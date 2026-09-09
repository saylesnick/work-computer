---
name: social
description: Batch a week of social content — post copy, video shot lists, Marketplace listings — and plan it into the Airtable Content Calendar. Use when Nick says /social, "content for this week", or needs a post/listing/video script.
---

# /social — The Weekly Content Batch

Default mode: build a full week. If Nick asks for one piece (one post, one
listing, one video), build just that with the same quality bar.

## Steps

1. **Check the Content Calendar** (`os/airtable.md` → Content Calendar table):
   what's already planned/posted this week, and last week's Performance notes —
   steer this week's mix toward what worked.
2. **Ask Nick for the week's raw material (one question, one batch):**
   - 3–5 units worth featuring (year/model/trim/miles/one selling point each)
   - Any deliveries this week he has photo/video permission for
   - One real customer question he got this week
   - Anything local/seasonal (weather, events, store news)
   If he has nothing handy, build the week with `{{unit placeholders}}` so the
   structure is done and he fills in vehicles later.
3. **Build the week** using the mix from
   `os/playbooks/lead-engines/social-video.md` §3 (3 value / 2 education /
   1 social proof / 1 human) and the templates in
   `os/scripts/social/post-templates.md`:
   - 7 posts (one per day, platform-tagged FB/IG)
   - 3 video shot lists (`os/scripts/social/video-shot-lists.md`) with exact
     hooks and honest-beat suggestions per unit
   - Marketplace: which listings to refresh/replace this week + full listing
     copy for new units (`os/scripts/social/marketplace-listing.md`)
4. **Write the plan into Airtable:** one Content Calendar row per item
   (Date, Platform, Type, Status=Drafted). Use field IDs via
   `get_table_schema` per `os/airtable.md` conventions.
5. **Canva (only if Nick asks for graphics):** generate/export via the Canva
   tools for the 1–2 posts that need a graphic (deal spotlight, milestone).

## Deliver

**📱 Content Week — {{date range}}**

Day-by-day list: day, platform, type, the ready-to-paste copy (or shot list),
one line on when to shoot/post. Close with the Marketplace refresh checklist
and: "Planned into your Content Calendar — mark them Posted with /log."

## Rules

- Voice per CLAUDE.md — helpful neighbor, never dealership-ad voice.
- Real numbers only from Nick/desk; `{{placeholders}}` otherwise.
- Customer content requires explicit permission — build the permission ask
  into any delivery-post plan.
