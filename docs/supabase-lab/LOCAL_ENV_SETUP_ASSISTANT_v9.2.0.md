# AndyAI Finance Engine v9.2.0 — Local .env Setup Assistant

## Purpose

This checkpoint adds a local Terminal assistant for creating `.env.local` safely.

It does not ask the operator to share secrets in chat.

It does not commit secrets.

It does not connect to Supabase.

It does not apply migrations.

## Command

From the repo root:

```bash
./scripts/create-supabase-env-local.sh
```

## What It Does

The assistant:

- verifies that `.env.local` is not tracked by Git
- asks for Supabase URL locally
- asks for Supabase anon key locally
- asks for Supabase service role key locally using hidden terminal input
- writes `.env.local`
- sets file permissions to `600`
- runs strict env guard if available

## Required Values

The operator must paste these locally:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Safety Rule

Never send the service role key into chat.

Never commit `.env.local`.

Never put secrets into README, screenshots, GitHub issues, docs, logs, or public notes.

## Existing File Rule

If `.env.local` already exists, the assistant refuses to overwrite it automatically.

This prevents accidental secret loss or replacement.

## What v9.2.0 Does Not Do

v9.2.0 does not:

- create Supabase project automatically
- add real secret values
- connect to Supabase
- run migrations
- change Vercel environment variables
- activate checkout
- activate billing
- activate webhooks
- activate paid runtime

## Canonical Rule

Secrets stay local.

The system can verify their presence without exposing their values.
