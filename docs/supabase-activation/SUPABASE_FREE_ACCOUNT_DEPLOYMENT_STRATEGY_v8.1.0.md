# AndyAI Finance Engine v8.1.0 — Supabase Free Account Deployment Strategy

## Purpose

This checkpoint defines how AndyAI Finance Engine should use a Supabase Free account safely.

It does not configure a live Supabase project.

It does not apply migrations.

It does not add secrets, checkout, webhooks, or paid runtime behavior.

## Strategic Decision

Do not duplicate all finance tables inside TAPFORGE as a second source of truth.

Use this model instead:

| Layer | Role |
|---|---|
| AndyAI Finance Engine | Owns finance schema, SQL drafts, runtime contracts, activation docs |
| TAPFORGE | Orchestrates, installs, validates, and records migration/application runs |
| Supabase Free Project | Lab/proof environment for controlled testing |
| Future Pro Project | Production candidate when real users, uptime, backups, and higher limits matter |

## Free Account Principle

Supabase Free should be treated as a controlled lab, not a serious production backend.

It is useful for:

- schema testing
- RLS testing
- small demo data
- migration rehearsal
- local/dev proof
- internal operator workflows

It is not ideal for:

- production customer data
- heavy audit logs
- high-volume exports
- large financial document storage
- guaranteed uptime
- long-term backup assurance

## Single Project Strategy

Because Free accounts are constrained, the safest strategy is usually one shared development project with clear namespace discipline.

Recommended logical namespaces:

| Namespace | Purpose |
|---|---|
| finance_engine | Finance modeling, membership, quotas, audit, approvals, exports |
| tapforge | Installer, run registry, release application logs, operator actions |
| shared_audit | Cross-system audit events if needed later |

If custom schemas are postponed, use table prefixes:

| Prefix | Purpose |
|---|---|
| fe_ | AndyAI Finance Engine tables |
| tf_ | TAPFORGE orchestration tables |
| audit_ | Shared audit/proof tables |

## Source-of-Truth Rule

Finance Engine remains the source of truth for:

- finance schema drafts
- finance migration order
- finance runtime contracts
- finance approval/audit/export logic
- finance activation safety rules

TAPFORGE should not become a handwritten duplicate of all finance SQL.

TAPFORGE should store:

- package manifest
- source repo
- expected tag
- migration order
- operator approval result
- run result
- rollback notes
- evidence log

## Recommended TAPFORGE Manifest Direction

A future TAPFORGE manifest may look like this:

```json
{
  "pack": "andyai-finance-engine",
  "source_repo": "https://github.com/kolundzic/andyai-finance-engine",
  "source_tag": "v8.1.0",
  "mode": "supabase-free-lab",
  "apply_migrations": false,
  "requires_human_review": true,
  "requires_rls_review": true,
  "requires_env_guard": true
}
```

## Data Budget Strategy

Keep Free project data extremely small.

Recommended approach:

- use tiny seed data
- avoid storing large documents
- avoid storing generated PDFs in database
- keep audit payloads compact
- prefer references over blobs
- delete test runs after export
- vacuum only after understanding consequences
- upgrade to Pro before real customer data

## Activation Rule

Do not apply real migrations until these conditions are true:

- v8.0.0 activation gate exists
- v8.1.0 Free strategy is accepted
- `.env.local` is created locally
- strict env guard passes
- migration bundle is reviewed
- RLS review gate is completed
- test users are ready
- operator knows this is lab/dev, not production

## Upgrade Rule

Move to Supabase Pro or a dedicated production project when any of these become true:

- real users depend on uptime
- customer data is stored
- audit logs must be retained reliably
- backups matter
- database size grows beyond Free comfort
- Vercel production is connected to real workflows
- billing or paid export runtime is activated

## What v8.1.0 Does Not Do

This release does not:

- create a Supabase project
- connect to Supabase
- apply migrations
- create schemas
- create tables
- add secrets
- update Vercel environment variables
- activate checkout
- activate billing
- activate webhooks
- activate paid runtime

## Canonical Rule

Free Supabase is a proving ground.

TAPFORGE is the orchestrator.

Finance Engine is the source of truth.

Production waits until trust, limits, and responsibility are ready.
