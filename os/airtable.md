# Airtable Reference: "Sales Command Center"

Base ID: `appTLYaiyhRPm97GD` (workspace: My First Workspace)

Skills read/write via the Airtable MCP tools. Use these table IDs directly —
don't re-search by name. Record writes require **field IDs** (fetch via
`get_table_schema` when writing; names below are for reading/reporting).

| Table | ID | Job |
|---|---|---|
| Goals & Scoreboard | `tblmboNzRt6HN70fz` | One row per month (`Month` = YYYY-MM): Units/Gross/Appointments Set/Referrals Received, Goal + Actual columns |
| Activity Log | `tbl64IBxuQ55pBR6X` | One row per day (`Entry` = YYYY-MM-DD): Calls, Texts, Emails, Conversations, Appointments Set/Shown, Mining Outreaches, Videos Shot, Posts Published, Marketplace Listings Live, Referral Asks, Notes |
| Deals | `tblTYelFAvMm3gxUs` | One row per sold unit: Deal (Customer — Vehicle), Date, New/Used, Front/Back Gross, **Source Engine**, Referral Ask Done, Review Landed |
| Referral Network | `tbluITbd3XKIx7xn3` | Bird dogs & allies: Relationship, Last/Next Touch, Deals Sent |
| Content Calendar | `tblwrau5HSb5kqFqr` | Content: Date, Platform, Type, Status (Idea/Drafted/Posted), Performance |

## Conventions

- **Source Engine choices (Deals):** Social/Marketplace, Orphan, Lease Renewal,
  Equity Mining, Service Drive, Be-back, Referral, Repeat, Internet Lead,
  Phone-up, Walk-in, Other. Every deal MUST get one.
- **Activity Log:** one row per day. If a row for today exists, UPDATE it
  (add to counts) rather than creating a duplicate.
- **Goals & Scoreboard Actuals:** incremented by `/log` when deals/appointments/
  referrals land; `/review` cross-checks Actuals against the Deals table and
  fixes drift.
- **Monthly rollover:** if no Goals row exists for the current month, `/daily`
  and `/log` should create one (copy last month's goals, zero the actuals) and
  mention it to Nick.
