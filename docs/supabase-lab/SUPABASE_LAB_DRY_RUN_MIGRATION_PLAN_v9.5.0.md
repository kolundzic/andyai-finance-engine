# AndyAI Finance Engine v9.5.0 — Supabase Lab Dry-Run Migration Plan

## Purpose

This checkpoint defines the dry-run migration plan for the Supabase Lab.

It does not apply migrations.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## Current Preconditions

The repo already has:

- Supabase Lab setup runbook
- local `.env.local` assistant
- Supabase lab connection smoke test
- publishable key smoke-test fix
- Supabase Lab Migration Review Pack
- SQL draft inventory
- RLS review checklist
- TAPFORGE review report template

## Dry-Run Meaning

Dry-run means:

- collect the intended SQL draft sequence
- generate a preview bundle
- verify required review files exist
- verify lab connection is alive
- verify `.env.local` is not tracked
- verify no SQL is applied
- verify TAPFORGE evidence can be prepared

Dry-run does not mean database mutation.

## Migration Draft Sequence

| Order | Draft |
|---|---|
| 1 | `docs/supabase/sql-drafts/v5.3.0_membership_tables_draft.sql` |
| 2 | `docs/supabase/sql-drafts/v5.4.0_usage_quota_tables_draft.sql` |
| 3 | `docs/supabase/sql-drafts/v5.5.0_audit_approval_tables_draft.sql` |
| 4 | `docs/supabase/sql-drafts/v5.6.0_rls_policy_draft.sql` |

## Dry-Run Artifacts

The dry-run preparation creates:

- preview SQL bundle
- TAPFORGE dry-run evidence template
- dry-run checklist
- verification script result

## Required Human Review

Before any apply step, the operator must confirm:

- target is Supabase Free lab
- Human Attention data will not be touched
- Finance Engine namespace or prefix is accepted
- TAPFORGE namespace or prefix is accepted
- RLS policy is reviewed
- audit tables are reviewed
- rollback limitations are understood
- production apply remains blocked

## Stop Conditions

Stop if:

- `.env.local` is tracked
- smoke test fails
- SQL draft inventory is incomplete
- RLS review is incomplete
- namespace decision is unclear
- service role key is printed or exposed
- production project is targeted
- TAPFORGE evidence cannot be produced

## Canonical Rule

Dry-run is not decoration.

Dry-run is the rehearsal that prevents the lab from becoming a silent production accident.
