# AndyAI Finance Engine v9.1.0 — Supabase Lab Project Setup Runbook

## Purpose

This checkpoint defines the first safe, human-controlled Supabase Lab project setup runbook.

It does not create a Supabase project automatically.

It does not add secrets to Git.

It does not apply migrations.

It does not activate production database runtime, checkout, webhooks, billing, subscriptions, or paid exports.

## Setup Mode

This setup is for a Supabase Free lab / development project.

It is not production.

## Prerequisites

Before starting real setup, confirm:

- repo is clean
- repo is on a trusted release tag
- v9.0.0 TAPFORGE Migration Orchestration Gate exists
- v9.1.0 runbook exists
- `.env.local` is not tracked by Git
- Supabase Free lab strategy is accepted
- Finance Engine remains source-of-truth
- TAPFORGE remains orchestrator / evidence logger

## Step 1 — Create Supabase Project

In the Supabase dashboard:

1. Create a new project.
2. Use a clear lab/dev name, for example:
   - `andyai-finance-engine-lab`
   - `andyai-finance-engine-dev`
   - `andyai-lab-finance`
3. Select a region close to the intended usage if possible.
4. Store the database password safely.
5. Do not paste secrets into ChatGPT, README, GitHub, screenshots, or public notes.

## Step 2 — Collect Required Values

From Supabase project settings, collect:

- Project URL
- anon public key
- service role key

Important:

- The anon key is browser-safe only within RLS-protected designs.
- The service role key is server-only.
- The service role key must never be committed.
- The service role key must never be placed in client components.

## Step 3 — Create Local `.env.local`

Create `.env.local` locally at the repo root.

Required keys:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Do not commit this file.

## Step 4 — Run Strict Env Guard

After creating `.env.local`, run:

```bash
./scripts/verify-supabase-env-local.sh --strict
```

Expected result:

- `.env.local` is not tracked
- `NEXT_PUBLIC_SUPABASE_URL` exists
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` exists
- `SUPABASE_SERVICE_ROLE_KEY` exists

## Step 5 — Run Live Preflight

Run:

```bash
./scripts/verify-supabase-live-preflight.sh
```

This verifies activation docs and local safety guards.

## Step 6 — Do Not Apply Migrations Yet

Do not apply migrations immediately after project creation.

Before migration apply, complete:

- migration bundle review
- RLS review gate
- TAPFORGE dry-run contract
- operator approval
- evidence ledger decision
- Free lab target confirmation

## Step 7 — Record Lab Setup Evidence

Record a simple local note, not containing secrets:

- project name
- region
- setup date
- operator
- repo tag used
- env guard result
- live preflight result
- migration status: not applied

## Step 8 — Production Boundary

This lab project is not production.

Move to production or Pro only after:

- real user data exists
- uptime matters
- backup requirements exist
- billing or paid export runtime is planned
- audit retention matters
- database size may exceed Free comfort

## Stop Conditions

Stop immediately if:

- service role key appears in Git
- `.env.local` is tracked
- RLS is unclear
- migration order is unclear
- TAPFORGE dry run is missing
- operator approval is missing
- production is targeted by accident
- screenshots include secrets

## Canonical Rule

Create the lab.

Protect the secrets.

Verify the gate.

Do not migrate until the system can explain what it is doing.
