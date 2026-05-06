# AndyAI Finance Engine v9.6.0 — Supabase Lab SQL Apply Candidate Gate

## Purpose

This checkpoint defines the SQL apply candidate gate for Supabase Lab.

It does not apply SQL.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## Why This Gate Exists

The project now has a dry-run plan and a generated SQL preview bundle.

The next risk is moving too quickly from preview to apply.

This gate blocks that jump until a human operator confirms that the lab-only apply candidate is safe.

## Current Preconditions

Before this gate, the repo should already have:

- strict env guard
- Supabase lab smoke test
- migration review pack
- SQL draft inventory
- RLS review checklist
- dry-run migration plan
- SQL preview bundle
- TAPFORGE dry-run evidence template
- dry-run verifier

## Apply Candidate Meaning

Apply candidate means:

- the migration may be discussed as a future lab-only apply candidate
- the SQL preview exists
- the dry-run plan exists
- the review pack exists
- the operator can decide whether it is safe to proceed later

Apply candidate does not mean SQL is approved.

Apply candidate does not mean SQL is executed.

## Required Candidate Decisions

| Decision | Required State |
|---|---|
| Target environment | Supabase Free Lab only |
| Production target | blocked |
| Existing Human Attention data | must not be touched |
| Finance Engine namespace | required |
| TAPFORGE namespace | required |
| RLS review | required |
| Rollback limitations | acknowledged |
| Operator approval | required before future apply |
| Evidence ledger | required |
| Migration apply now | not allowed in v9.6.0 |

## Candidate STOP Conditions

Stop if:

- project target is production
- target project is unclear
- namespace or prefix is not selected
- Human Attention tables may be affected
- `.env.local` is tracked
- smoke test fails
- preview bundle missing
- RLS review missing
- service role key exposed
- operator approval missing
- TAPFORGE evidence missing

## Candidate Decision States

Allowed states:

- blocked
- needs_revision
- candidate_for_lab_apply_review

## Canonical Rule

A candidate gate is not permission.

It is a controlled pause before permission can even be discussed.
