# Lab-Only Apply Operator Confirmation v9.9.0

## Required Operator Understanding

Before any future lab-only apply, the operator must understand:

- this is shared Supabase Free lab only
- this is not production
- Human Attention tables must not be touched
- `fe_` is the Finance Engine prefix
- `.env.local` must not be tracked
- service role key must not be exposed
- rollback may require manual database cleanup
- successful apply does not mean production readiness

## Required Phrase

```text
APPLY ANDYAI FINANCE ENGINE LAB SQL
```

## Decision States

Allowed states:

- blocked
- needs_revision
- ready_for_manual_lab_apply_attempt

## Rule

No typed phrase, no apply.
