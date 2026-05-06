# AndyAI Finance Engine v7.4.0 — Supabase CLI Preflight

## Purpose

This checkpoint adds a non-blocking Supabase CLI preflight script.

## Command

```bash
./scripts/check-supabase-cli.sh
```

## Rule

The CLI is not required before v8.0.0.

It becomes relevant when we move from activation readiness to actual Supabase project setup.
