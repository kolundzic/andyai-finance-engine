# AndyAI Finance Engine v9.7.0 — Supabase Lab Namespace Decision Lock

## Purpose

This checkpoint locks the namespace decision before any future Supabase Lab SQL apply.

It does not apply SQL.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## Decision

For the shared `andyai-human-attention` Supabase project, use prefix-based isolation for the first Finance Engine lab apply candidate.

## Locked Lab Prefixes

| Prefix | Owner | Purpose |
|---|---|---|
| `fe_` | AndyAI Finance Engine | Finance Engine lab tables |
| `tf_` | TAPFORGE | Orchestration, install evidence, run state |
| `audit_` | Shared audit layer | Cross-system audit/proof records if needed later |
| `human_attention_` | AndyAI Human Attention | Existing Human Attention domain |

## Why Prefixes First

Custom Postgres schemas may be cleaner long-term, but for the first Free shared lab they introduce extra setup complexity:

- schema exposure decisions
- API schema configuration
- client access configuration
- RLS review complexity
- migration apply complexity

Prefix isolation is simpler, visible, reversible, and safer for the first lab-only apply candidate.

## Existing Draft Warning

Existing SQL drafts from v5.3.0 to v5.6.0 are review drafts.

They are not apply-ready against the shared lab until table names are converted to the locked prefix model.

## Apply Boundary

No table may be created without the locked prefix model.

Finance Engine table names must start with `fe_`.

TAPFORGE table names must start with `tf_`.

Shared audit table names must start with `audit_`.

Human Attention tables must not be changed.

## Stop Conditions

Stop before apply if:

- any Finance Engine table lacks `fe_`
- any TAPFORGE table lacks `tf_`
- any shared audit table lacks `audit_`
- any SQL mentions existing Human Attention tables
- target project is production
- `.env.local` is tracked
- RLS review is missing
- service role key is exposed
- preview SQL has not been regenerated after prefix lock

## Canonical Rule

In a shared Free Supabase lab, names are safety equipment.

A table without the right prefix is a risk surface.
