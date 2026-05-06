# AndyAI Finance Engine v10.0.1 — Post-Apply Seal and Safety Evidence

## Purpose

This checkpoint seals the first Supabase Lab SQL apply after v10.0.0.

It does not apply SQL, create schemas, create tables, write data, or activate production runtime.

## Confirmed Previous Milestone

v10.0.0 completed the first guarded Supabase Lab SQL apply.

The release evidence confirmed:

- explicit v10 apply env gate
- exact operator confirmation phrase
- DB URL shape check without printing the secret
- strict env guard
- Supabase lab smoke test
- lab-only candidate verifier
- DB URL preflight
- psql availability
- candidate SQL presence
- GitHub origin reachability before SQL apply
- lab-only SQL apply execution
- 10 Finance Engine lab tables verified
- Human Attention boundary check completed without mutation query
- release evidence files written
- build, commit, tag, and push completed

## Verified Lab Tables

```text
fe_approval_decisions
fe_audit_events
fe_export_records
fe_manual_review_queue
fe_membership_states
fe_quota_policies
fe_quota_windows
fe_usage_events
fe_workspace_members
fe_workspaces
```

## Safety Seal

The following remain blocked:

- production apply
- billing activation
- checkout activation
- webhook activation
- paid runtime activation
- subscription enforcement
- paid export enforcement
- automatic customer data use

## Shared Lab Boundary

The Supabase target remains a shared Free lab context.

Human Attention tables remain protected.

Finance Engine uses only the `fe_` prefix surface.

## Secret Handling

No DB URL is stored in the repository.

No database password is stored in the repository.

No service role key is stored in the repository.

No `.env.local` file is tracked.

## Recommendation

After a successful first lab apply, rotate the database password when practical and continue using the new DB URL only in local Terminal sessions.

## Canonical Rule

v10.0.0 proved the lab path.

v10.0.1 seals the evidence and keeps production locked.
