# AndyAI Finance Engine v8.2.0 — TAPFORGE Migration Pack Manifest

## Purpose

This checkpoint adds the first TAPFORGE migration pack manifest for AndyAI Finance Engine.

## Decision

Finance Engine remains the source of truth for finance schema and runtime contracts.

TAPFORGE becomes the orchestrator that can later install, verify, record, and evidence the application of approved packs.

## Manifest Rule

The manifest must describe:

- source repo
- source tag
- operating mode
- human review requirement
- RLS review requirement
- env guard requirement
- dry-run requirement
- migration order
- blocked actions

## Safety

This release does not apply migrations.

It does not connect to Supabase.

It does not activate live database runtime, checkout, webhooks, or billing.

## Additional Hygiene

Supabase CLI temp files must not become tracked source files.
