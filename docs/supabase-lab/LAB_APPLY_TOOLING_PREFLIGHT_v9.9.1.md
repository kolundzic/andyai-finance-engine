# AndyAI Finance Engine v9.9.1 — Lab Apply Tooling Preflight

## Purpose

This checkpoint adds the tooling preflight before any future lab-only SQL apply attempt.

It does not apply SQL.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## What It Checks

The tooling preflight checks:

- candidate SQL exists
- guarded apply candidate script exists
- `.env.local` is not tracked
- strict env guard passes
- Supabase lab smoke test passes
- lab-only candidate verifier passes
- `psql` availability
- whether `SUPABASE_DB_URL` is set in the current shell without printing it

## Command

From repo root:

```bash
./scripts/check-lab-apply-tooling-preflight.sh
```

## Expected Results

The preflight may show warnings if:

- `psql` is not installed
- `SUPABASE_DB_URL` is not set

These warnings do not mean the repo is broken.

They mean the machine is not yet ready to execute a future lab-only apply command.

## Safety Rule

No SQL is applied by this preflight.

It is a tooling readiness check only.
