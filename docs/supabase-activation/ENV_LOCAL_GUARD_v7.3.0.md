# AndyAI Finance Engine v7.3.0 — Env Local Guard

## Purpose

This checkpoint adds a local guard script for Supabase environment variables.

## Commands

Before live setup:

```bash
./scripts/verify-supabase-env-local.sh
```

After creating `.env.local`:

```bash
./scripts/verify-supabase-env-local.sh --strict
```

## Required Variables

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Safety Rule

`.env.local` must never be tracked by Git.
