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

---

## v5.9.0 — Runtime Wiring Readiness

Defines future runtime wiring requirements for server-side Supabase access, membership lookup, quota reads, audit inserts, approvals, exports, and manual review.

---

## v6.0.0 — Supabase Monetization Runtime Foundation

Completes the Supabase monetization foundation at documentation and schema-draft level. No live database runtime or payment behavior is activated.

---

## v6.1.0 — Runtime Contract Types

Adds provider-neutral TypeScript contract types for future Supabase runtime work. No live database or billing behavior is active.

---

## v6.2.0 — Membership Repository Interface

Adds a future-facing membership repository interface for workspace access state. Interface only; no live Supabase calls.

---

## v6.3.0 — Quota Runtime Interface

Adds future-facing quota runtime interfaces. No live enforcement or Supabase calls are active.

---

## v6.4.0 — Audit Approval Runtime Interface

Adds future-facing audit and approval runtime interfaces. Interface only; no live database writes.

---

## v6.5.0 — Export Safety Gate

Adds a pure local export safety gate for future export workflows. No paid export runtime is active.

---

## v6.6.0 — Manual Review Runtime Interface

Adds future-facing manual review runtime interfaces. Interface only; no live queue writes.

---

## v6.7.0 — Runtime Boundary Index

Adds a single TypeScript export index for Supabase runtime foundation contracts. No live runtime behavior is active.

---

## v6.8.0 — Runtime Verification Script

Adds a local verification script for Supabase runtime foundation files.

---

## v6.9.0 — v7 Runtime Readiness Checklist

Adds readiness checklist for v7.0.0 Governed Runtime Foundation.

---

## v7.0.0 — Governed Supabase Runtime Foundation

Completes the governed Supabase runtime foundation at contract and verification level. No live database or payment behavior is activated.

---

## v7.1.0 — Supabase Live Setup Boundary

Defines the boundary between repository preparation and real Supabase setup. Real setup should start after v8.0.0.

---

## v7.2.0 — Migration Bundle Map

Adds a migration bundle map and placeholder folder for future reviewed Supabase migrations. No migration is applied.

---

## v7.3.0 — Env Local Guard

Adds a local guard script for Supabase environment variables. It passes before setup and can run strict after env values are added.

---

## v7.4.0 — Supabase CLI Preflight

Adds a non-blocking Supabase CLI preflight script. No live Supabase command is executed.

---

## v7.5.0 — Migration Application Runbook

Adds a runbook for future Supabase migration application. No migration is applied.

---

## v7.6.0 — RLS Review Gate

Adds RLS review gate and role matrix questions. No live RLS policy is applied.

---

## v7.7.0 — Vercel Env Sync Checklist

Adds Vercel environment sync checklist for future Supabase activation. No Vercel env change is performed.

---

## v7.8.0 — Live Setup Verification Pack

Adds combined live setup preflight verification script. It does not connect to Supabase or apply migrations.

---

## v7.9.0 — v8 Activation Readiness

Adds readiness checklist for v8.0.0 Supabase Live Activation Gate. No live setup is performed.

---

## v8.0.0 — Supabase Live Activation Gate

Completes the Supabase live activation gate. This is the point after which human-controlled real Supabase setup may begin.

---

## v8.1.0 — Supabase Free Account Deployment Strategy

This checkpoint defines how AndyAI Finance Engine should use a Supabase Free account safely.

### Decision

Do not duplicate all finance tables inside TAPFORGE as a second source of truth.

Use this model:

- AndyAI Finance Engine owns finance schema, SQL drafts, runtime contracts, and activation safety rules.
- TAPFORGE orchestrates installation, verification, operator approval, and evidence logs.
- Supabase Free is a lab/proof environment, not production.
- Production waits for a deliberate upgrade path.

### Rule

Free Supabase is a proving ground.

TAPFORGE is the orchestrator.

Finance Engine is the source of truth.

---

## v8.2.0 — TAPFORGE Migration Pack Manifest

Adds the TAPFORGE migration pack manifest. Finance Engine remains source-of-truth; TAPFORGE is orchestrator and evidence logger.

---

## v8.3.0 — Finance Engine Migration Import Contract

Defines how TAPFORGE may import Finance Engine migration material without becoming a duplicate source of truth.

---

## v8.4.0 — TAPFORGE Apply Dry Run Contract

Adds the dry-run contract required before TAPFORGE applies any Finance Engine migration pack.

---

## v8.5.0 — Namespace Registry

Adds namespace and prefix strategy for shared Supabase Free lab usage.

---

## v8.6.0 — Migration Evidence Ledger Contract

Adds evidence ledger contract for TAPFORGE-controlled Finance Engine migration operations.

---

## v8.7.0 — TAPFORGE Pack Verification Script

Adds verification script for TAPFORGE migration pack files and JSON manifests.

---

## v8.8.0 — Supabase Free Lab Seed Policy

Adds seed-data policy for a Supabase Free lab. No seed data is inserted.

---

## v8.9.0 — v9 TAPFORGE Handoff Readiness

Adds readiness checklist for v9.0.0 TAPFORGE Migration Orchestration Gate.

---

## v9.0.0 — TAPFORGE Migration Orchestration Gate

Completes the TAPFORGE migration orchestration gate. Finance Engine defines; TAPFORGE orchestrates and records evidence. No migration is applied.

---

## v9.1.0 — Supabase Lab Project Setup Runbook

This checkpoint adds the first safe Supabase Lab setup runbook.

### Meaning

The repo is ready for a human operator to create a Supabase Free lab project and configure local `.env.local` safely.

### Boundary

v9.1.0 does not create a Supabase project automatically.

It does not add secrets.

It does not apply migrations.

It does not activate production database runtime.

### Rule

Create the lab.

Protect the secrets.

Verify the gate.

Do not migrate until the system can explain what it is doing.
