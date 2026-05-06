# AndyAI Finance Engine v10.2.0 — Supabase Lab Read-Only Runtime Adapter Skeleton

## Purpose

This checkpoint adds the first read-only runtime adapter skeleton after the v10.1.0 runtime gate.

It does not connect to Supabase.

It does not require `SUPABASE_DB_URL`.

It does not use the service role key.

It does not apply SQL.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## Added Code

```text
src/runtime/supabase-lab-read-only-tables.ts
src/runtime/supabase-lab-read-only-adapter.ts
```

## What The Skeleton Does

The adapter skeleton can:

- expose the Finance Engine read-only table allowlist
- validate whether a table is allowed
- create a read-only query plan
- create a newest-first read-only query plan
- expose runtime status with all mutation and production flags disabled

## What The Skeleton Does Not Do

The skeleton does not:

- call Supabase
- read rows
- change rows
- use DB URL
- use service role key
- bypass RLS
- activate production runtime
- activate billing, checkout, webhooks, or paid runtime

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

## Runtime Rule

The adapter can describe a safe read-only path.

It cannot execute a database mutation path.
