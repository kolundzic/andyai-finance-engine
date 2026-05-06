# Prefix Naming Map v9.7.0

## Purpose

This document maps earlier Finance Engine SQL draft table names into the locked prefix model.

## Finance Engine Prefix

All Finance Engine lab tables must use `fe_`.

| Draft Name | Lab Prefix Name |
|---|---|
| `workspaces` | `fe_workspaces` |
| `workspace_members` | `fe_workspace_members` |
| `membership_states` | `fe_membership_states` |
| `quota_policies` | `fe_quota_policies` |
| `usage_events` | `fe_usage_events` |
| `quota_windows` | `fe_quota_windows` |
| `audit_events` | `fe_audit_events` |
| `approval_decisions` | `fe_approval_decisions` |
| `export_records` | `fe_export_records` |
| `manual_review_queue` | `fe_manual_review_queue` |

## TAPFORGE Prefix

TAPFORGE lab tables must use `tf_`.

Examples:

| Concept | Lab Prefix Name |
|---|---|
| pack registry | `tf_pack_registry` |
| apply runs | `tf_apply_runs` |
| dry-run evidence | `tf_dry_run_evidence` |
| operator approvals | `tf_operator_approvals` |

## Shared Audit Prefix

Shared audit tables must use `audit_`.

Examples:

| Concept | Lab Prefix Name |
|---|---|
| cross-system event ledger | `audit_event_ledger` |
| evidence references | `audit_evidence_refs` |

## Existing Human Attention Boundary

Do not rename, mutate, or infer ownership over existing Human Attention tables.

The Finance Engine lab apply must be additive and isolated.
