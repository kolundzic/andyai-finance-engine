# AndyAI Finance Engine v9.8.0 — Prefixed SQL Preview Bundle

## Purpose

This checkpoint creates the first prefixed SQL preview bundle after the namespace decision lock.

It does not apply SQL.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## Locked Prefix Decision

The shared Supabase Free lab uses prefix isolation:

| Prefix | Meaning |
|---|---|
| `fe_` | AndyAI Finance Engine lab tables |
| `tf_` | TAPFORGE orchestration/evidence tables |
| `audit_` | shared audit/proof layer |
| `human_attention_` | protected Human Attention boundary |

## Preview Bundle

Generated file:

```text
supabase/dry-run-preview/finance-engine-lab-prefixed-preview-v9.8.0.sql
```

## Important Safety Detail

The preview bundle ends with:

```sql
ROLLBACK;
```

This makes the file a review artifact and helps prevent accidental persistent mutation if someone runs it as-is.

## Table Name Transformation

| Original Draft Name | Prefixed Preview Name |
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

## Current Status

This is preview only.

Before a future lab-only apply candidate, a separate apply script must be generated and reviewed.

## Canonical Rule

The first real SQL must be prefixed, reviewed, and boring.

Boring is safe.
