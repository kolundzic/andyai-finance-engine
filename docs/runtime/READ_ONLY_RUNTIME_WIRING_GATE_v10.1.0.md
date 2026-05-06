# AndyAI Finance Engine v10.1.0 — Supabase Lab Read-Only Runtime Wiring Gate

## Purpose

This checkpoint opens the next safe phase after the first Supabase Lab SQL apply.

It defines the read-only runtime wiring gate.

It does not connect production runtime.

It does not write data.

It does not create tables.

It does not apply SQL.

It does not activate billing.

It does not activate checkout.

It does not activate webhooks.

## Previous Sealed State

v10.0.0 completed the first guarded Supabase Lab SQL apply.

v10.0.1 sealed the post-apply evidence and confirmed:

- 10 `fe_` lab tables verified
- Human Attention boundary protected
- production blocked
- billing blocked
- checkout blocked
- webhooks blocked
- paid runtime blocked
- DB URL not stored in repo
- service role key not stored in repo

## Runtime Gate Meaning

Read-only runtime wiring means the application may prepare to observe the Finance Engine lab tables.

It must not mutate them.

It must not create customer-facing production behavior.

It must not turn the lab into a paid runtime.

## Allowed Runtime Direction

Allowed:

- define read-only table allowlist
- define read-only access contract
- define proof page / internal diagnostics direction
- define server-side-only secret boundary
- define TAPFORGE evidence expectations
- prepare later runtime adapter

Not allowed:

- insert
- update
- delete
- upsert
- RPC mutation
- billing enforcement
- subscription enforcement
- checkout session creation
- webhook processing
- customer production data ingestion

## Read-Only Table Allowlist

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

## Secret Boundary

The runtime must not expose service role key to browser/client code.

Any future privileged access must remain server-side only.

## Runtime Rule

The first runtime layer may look.

It may not touch.

