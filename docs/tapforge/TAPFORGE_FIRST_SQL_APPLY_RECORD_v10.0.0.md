# TAPFORGE First SQL Apply Record v10.0.0

## Purpose

This document records that the first Finance Engine lab-only SQL apply was completed.

## Evidence

| Field | Value |
|---|---|
| Source tag | v10.0.0 |
| Previous gate | v9.9.2 |
| Candidate SQL | supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql |
| Target mode | Supabase Free shared lab |
| Production apply | blocked |
| Human confirmation | required and completed |
| DB URL printed | no |
| Service role printed | no |
| Verified table count | 10 |

## Verified Tables

```text
fe_approval_decisions fe_audit_events fe_export_records fe_manual_review_queue fe_membership_states fe_quota_policies fe_quota_windows fe_usage_events fe_workspace_members fe_workspaces 
```

## Rule

First lab apply is not production readiness.

It is only proof that the guarded lab path can create the Finance Engine prefixed schema surface.
