# AndyAI Finance Engine v10.0.0 — First Supabase Lab SQL Apply Evidence

## Summary

The first lab-only SQL apply was executed after the v9.9.2 DB URL safe preflight line.

## Scope

Target mode:

```text
Supabase Free shared lab
```

Applied candidate:

```text
supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql
```

## Verified Tables

```text
fe_approval_decisions fe_audit_events fe_export_records fe_manual_review_queue fe_membership_states fe_quota_policies fe_quota_windows fe_usage_events fe_workspace_members fe_workspaces 
```

## Confirmed Safety Boundaries

- Production apply was not used.
- SQL was applied only after explicit env gate.
- SQL was applied only after exact operator confirmation phrase.
- `.env.local` was not tracked.
- Supabase smoke test passed.
- Lab-only apply candidate verifier passed.
- DB URL value was not written to repo.
- DB URL value was not printed by the release TAP.
- Human Attention boundary was not targeted by the Finance Engine SQL.

## Important Note

This release confirms first lab SQL apply.

It does not confirm production readiness.

It does not activate checkout, billing, webhook, subscription enforcement, or paid runtime.
