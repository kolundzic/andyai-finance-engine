# AndyAI Finance Engine v8.7.0 — TAPFORGE Pack Verification Script

## Purpose

This checkpoint adds a verification script for the TAPFORGE Finance Engine migration pack.

## Command

```bash
./scripts/verify-tapforge-migration-pack.sh
```

## Scope

The script checks required pack files, validates JSON manifests, and blocks tracked Supabase temp files.

## Boundary

It does not apply migrations or connect to Supabase.
