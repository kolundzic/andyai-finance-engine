# AndyAI Finance Engine v5.8.0 — Local Verification Script

## Purpose

This checkpoint adds a local verification script for the Supabase monetization foundation.

The script checks that required docs and SQL drafts exist and that `.env.local` is not tracked.

## Command

```bash
./scripts/verify-supabase-monetization-foundation.sh
```

## Scope

This is a local verification helper.

It does not connect to Supabase, apply migrations, run RLS, call APIs, or activate billing.
