# AndyAI Finance Engine v9.0.0 — TAPFORGE Migration Orchestration Gate

## Summary

v9.0.0 completes the TAPFORGE migration orchestration gate.

This release does not apply migrations.

It prepares AndyAI Finance Engine to hand a controlled, verified, source-of-truth migration pack to TAPFORGE.

## Included Gate

- v8.2.0 TAPFORGE Migration Pack Manifest
- v8.3.0 Finance Engine Migration Import Contract
- v8.4.0 TAPFORGE Apply Dry Run Contract
- v8.5.0 Namespace Registry
- v8.6.0 Migration Evidence Ledger Contract
- v8.7.0 TAPFORGE Pack Verification Script
- v8.8.0 Supabase Free Lab Seed Policy
- v8.9.0 v9 TAPFORGE Handoff Readiness

## Final Decision

Finance Engine defines and governs the migration pack.

TAPFORGE orchestrates, verifies, records, and produces evidence.

Supabase Free remains a controlled lab.

Production remains a later, deliberate decision.

## What v9.0.0 Does Not Do

v9.0.0 does not:

- create Supabase tables
- apply migrations
- connect to a live database
- change Vercel environment variables
- activate checkout
- activate billing
- activate webhooks
- activate paid export runtime

## Canonical Rule

TAPFORGE is not the owner of the finance schema.

TAPFORGE is the controlled hand that applies what Finance Engine has defined, reviewed, and approved.
