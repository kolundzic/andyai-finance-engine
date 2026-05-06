# Supabase Lab Dry-Run Checklist v9.5.0

## Before Dry-Run

- repo is clean
- current tag is trusted
- `.env.local` exists locally
- `.env.local` is not tracked
- Supabase Auth health smoke test passes
- migration review pack verifier passes

## During Dry-Run

- generate SQL preview bundle
- inspect SQL draft order
- inspect table names
- inspect schema or prefix strategy
- inspect RLS draft
- inspect audit survivability
- record TAPFORGE evidence template

## After Dry-Run

Decision must be one of:

- blocked
- needs_revision
- approved_for_lab_apply_candidate

## Still Blocked

Even after successful dry-run:

- production apply is blocked
- paid runtime is blocked
- checkout is blocked
- webhook is blocked
- customer data is blocked
