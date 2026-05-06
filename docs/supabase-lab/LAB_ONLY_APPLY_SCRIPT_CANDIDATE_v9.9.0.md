# AndyAI Finance Engine v9.9.0 — Lab-Only Apply Script Candidate

## Purpose

This checkpoint prepares a guarded lab-only SQL apply candidate.

It does not apply SQL during the TAP release.

It does not create tables during the TAP release.

It does not write data during the TAP release.

It does not activate production runtime.

## Generated Candidate

Candidate SQL:

```text
supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql
```

Candidate script:

```text
scripts/apply-supabase-lab-prefixed-sql-candidate.sh
```

## Safety Design

The candidate script is blocked by default.

To even continue, the operator must explicitly set:

```bash
ANDYAI_ALLOW_LAB_SQL_APPLY=yes
```

Then the script still requires the exact confirmation phrase:

```text
APPLY ANDYAI FINANCE ENGINE LAB SQL
```

## Additional Guards

Before any future apply, the candidate script runs:

- strict env guard
- Supabase lab smoke test
- prefixed preview verifier
- lab-only apply candidate verifier

## Why `SUPABASE_DB_URL` Is Required

The script does not infer database password or connection string.

The operator must intentionally provide a reviewed lab-only database URL if applying later.

## What v9.9.0 Does Not Do

v9.9.0 does not:

- apply SQL
- create tables
- write data
- change Vercel environment variables
- activate production runtime
- activate billing
- activate checkout
- activate webhooks

## Canonical Rule

A loaded tool is not a fired tool.

v9.9.0 prepares the scalpel but does not cut.
