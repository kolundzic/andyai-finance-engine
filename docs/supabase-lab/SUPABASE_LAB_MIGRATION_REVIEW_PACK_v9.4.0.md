# AndyAI Finance Engine v9.4.0 — Supabase Lab Migration Review Pack

## Purpose

This checkpoint creates the review pack required before any Supabase Lab migration is considered.

It does not apply migrations.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## Current Lab Status

The project now has:

- Supabase Lab setup runbook
- local `.env.local` assistant
- Supabase Auth health smoke test
- publishable key smoke-test fix
- TAPFORGE migration orchestration gate
- Free account deployment strategy
- namespace registry
- evidence ledger contract

## Migration Review Goal

Before any SQL touches a Supabase project, the operator must know:

- what SQL draft files exist
- what order they would run in
- what each draft affects
- what RLS assumptions exist
- what data could become visible
- what rollback limitations exist
- whether this is lab only
- whether TAPFORGE has dry-run evidence

## Required Review Decisions

| Decision | Required Answer |
|---|---|
| Target environment | Supabase Free lab only |
| Production apply | Not allowed |
| Source-of-truth | AndyAI Finance Engine |
| Orchestrator | TAPFORGE |
| Dry-run required | Yes |
| RLS review required | Yes |
| Human approval required | Yes |
| Secrets in Git | Not allowed |
| `.env.local` tracked | Not allowed |

## Migration Draft Inventory

| Draft | Purpose | Review Status |
|---|---|---|
| v5.3.0 membership tables draft | workspaces, workspace members, membership states | needs review |
| v5.4.0 usage quota tables draft | quota policies, usage events, quota windows | needs review |
| v5.5.0 audit approval tables draft | audit events, approvals, exports, manual review | needs review |
| v5.6.0 RLS policy draft | row-level security draft | needs review |

## Recommended Review Order

1. Membership tables
2. Usage quota tables
3. Audit and approval tables
4. Export records
5. Manual review queue
6. Indexes
7. RLS enablement
8. RLS policies
9. Seed policy
10. TAPFORGE evidence entry

## Stop Conditions

Stop before migration apply if:

- RLS policy is not understood
- service role key is exposed
- `.env.local` is tracked
- source tag mismatch exists
- target project is production
- operator approval is missing
- TAPFORGE dry-run evidence is missing
- namespace decision is unclear
- old Human Attention tables could be affected

## Canonical Rule

Migration review is not paperwork.

Migration review is the firewall between a useful lab and a damaged database.
