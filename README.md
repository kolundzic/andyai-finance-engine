# andyai-finance-engine

**AndyAI Financial Modeling Engine** is a governed AI-assisted financial modeling system for turning business documents, SaaS ideas, pricing plans, client proposals, and investor assumptions into structured financial models with verification, audit trails, and human approval gates.

> AI can build the model fast.  
> But the human must verify that the model tells the truth.

## Canon

- **Owner / Founder:** Andrija Kolundzic (Andy), Founder & Owner — Japan IT Business
- **Repo:** `andyai-finance-engine`
- **Version:** `v0.1.0`
- **Method:** TAP-TAP / Master Udarci
- **Core workflow:** Input → Extraction → Model → Verification → Human Approval → Export

## First bootstrap contents

- Canon metadata
- Architecture overview
- Workflow map
- Governance principle
- Input schema
- Example business input
- Verification script
- GitHub bootstrap script

## Public Showcase

AndyAI Finance Engine now includes a Next.js public showcase layer for Vercel deployment.

- `/` — public landing page
- `/workflow` — governed finance workflow
- `/demo` — working core demo preview
- `/library` — Finance Solutions Library preview
- `/proof` — proof and release line

### Public product canon

v1.0.0 = stable canon  
v2.0.0 = working core  
v3.0.0 = public showcase stable

## Supabase SaaS Foundation

v4.0.0 adds the Supabase SaaS foundation:

- `/supabase` — Supabase configuration status
- `/projects` — project workspace foundation
- `/runs` — model run evidence foundation
- `/audit` — audit trail foundation
- `/approval` — human approval gate foundation
- `supabase/migrations/` — database schema
- `supabase/policies/` — RLS policy draft

### SaaS canon

v1.0.0 = stable canon  
v2.0.0 = working core  
v3.0.0 = public showcase  
v4.0.0 = Supabase SaaS foundation

---

## v5.1.0 — Public Product Positioning Layer

AndyAI Finance Engine is a governed financial modeling workspace for founders, consultants, agencies, and business teams.

It helps transform business inputs, assumptions, pricing ideas, SaaS scenarios, investor logic, and operational plans into structured financial model drafts.

### Core Promise

Build financial models faster, but keep responsibility visible.

Financial modeling can be automated.  
Financial responsibility cannot be outsourced.

### Trust-First Position

AndyAI Finance Engine is not only about generating numbers.

It is designed around:

- assumption visibility
- human approval
- audit trail
- review status
- export safety
- monetization boundaries
- provider-neutral billing design

### Monetization Status

v5.1.0 is not a live billing release.

No checkout route, webhook, payment provider SDK, subscription enforcement, payment secret, or paid export runtime is active.

### Next Direction

The next major line is Supabase monetization setup: database-backed membership, quota, audit, and approval foundations.

---

## v5.2.0 — Supabase Monetization Setup Readiness

This checkpoint prepares AndyAI Finance Engine for Supabase-backed monetization setup.

Supabase will become the backend foundation for membership state, usage quotas, audit trail, approval state, export history, manual review, and future billing event mapping.

No live database runtime, migration, checkout, webhook, payment provider, or subscription enforcement is introduced in v5.2.0.

### Next Runtime Direction

- v5.3.0 — Membership Tables Draft
- v5.4.0 — Usage Quota Tables Draft
- v5.5.0 — Audit / Approval Tables Draft
- v5.6.0 — RLS Policy Draft
- v5.7.0 — Supabase Env + Setup Guide
- v5.8.0 — Local Verification Script
- v5.9.0 — Runtime Wiring Readiness
- v6.0.0 — Supabase Monetization Runtime Foundation

Supabase is not just a database.

In AndyAI Finance Engine, Supabase becomes the memory and governance substrate for monetized financial modeling.

---

## v5.3.0 — Membership Tables Draft

Adds draft Supabase membership tables for workspaces, workspace members, and membership states. Draft only; no live migration is applied.

---

## v5.4.0 — Usage Quota Tables Draft

Adds draft Supabase quota tables for quota policies, usage events, and quota windows. Draft only; no runtime enforcement is active.

---

## v5.5.0 — Audit and Approval Tables Draft

Adds draft Supabase tables for audit events, approval decisions, export records, and manual review queue.

---

## v5.6.0 — RLS Policy Draft

Adds a first conservative Row-Level Security draft for Supabase monetization tables. Draft only; review required before live use.

---

## v5.7.0 — Supabase Env and Setup Guide

Adds Supabase environment setup guidance and . No live Supabase runtime behavior is introduced.

---

## v5.8.0 — Local Verification Script

Adds 🟢 AndyAI Finance Engine — Supabase Monetization Foundation Verification
🟢 Found: docs/supabase/SUPABASE_MONETIZATION_SETUP_READINESS_v5.2.0.md
🟢 Found: docs/supabase/MEMBERSHIP_TABLES_DRAFT_v5.3.0.md
🟢 Found: docs/supabase/USAGE_QUOTA_TABLES_DRAFT_v5.4.0.md
🟢 Found: docs/supabase/AUDIT_APPROVAL_TABLES_DRAFT_v5.5.0.md
🟢 Found: docs/supabase/RLS_POLICY_DRAFT_v5.6.0.md
🟢 Found: docs/supabase/SUPABASE_ENV_SETUP_GUIDE_v5.7.0.md
🟢 Found: docs/supabase/sql-drafts/v5.3.0_membership_tables_draft.sql
🟢 Found: docs/supabase/sql-drafts/v5.4.0_usage_quota_tables_draft.sql
🟢 Found: docs/supabase/sql-drafts/v5.5.0_audit_approval_tables_draft.sql
🟢 Found: docs/supabase/sql-drafts/v5.6.0_rls_policy_draft.sql
🟢 Found: .env.example
🟢 No tracked .env.local detected
🟢 Verification complete to verify required Supabase monetization foundation files locally.
