# AndyAI Finance Engine v9.3.0 — Supabase Lab Connection Smoke Test

## Purpose

This checkpoint adds a local smoke test for Supabase Lab connectivity.

It does not apply migrations.

It does not create tables.

It does not activate production runtime.

It does not expose secrets.

## Command

After `.env.local` is created locally, run:

```bash
./scripts/smoke-test-supabase-lab-connection.sh
```

## What The Smoke Test Checks

The script verifies:

- the command is run from the repo root
- `.env.local` is not tracked by Git
- `.env.local` exists
- `NEXT_PUBLIC_SUPABASE_URL` is present
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` is present
- `SUPABASE_SERVICE_ROLE_KEY` is present
- Supabase REST endpoint is reachable with the anon key

## What It Does Not Do

The script does not:

- print secrets
- commit secrets
- use service role key for the REST smoke test
- apply migrations
- create tables
- write data
- run checkout
- run billing
- activate webhooks

## Expected Result

Successful result:

```text
🟢 Supabase REST endpoint reachable with anon key
🟢 Smoke test PASS
```

## Failure Meaning

If the test fails, common causes are:

- wrong project URL
- wrong anon key
- project paused
- networking issue
- Supabase API temporarily unavailable
- `.env.local` missing or incomplete

## Safety Rule

The smoke test proves connection only.

It does not prove RLS correctness.

It does not prove migration readiness.

It does not prove production readiness.
