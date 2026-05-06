# AndyAI Finance Engine v7.8.0 — Live Setup Verification Pack

## Purpose

This checkpoint adds a combined live setup preflight script.

## Command

```bash
./scripts/verify-supabase-live-preflight.sh
```

## Scope

The script verifies activation docs, env guard, CLI preflight, and secret hygiene.

## Boundary

It does not connect to Supabase or apply migrations.
