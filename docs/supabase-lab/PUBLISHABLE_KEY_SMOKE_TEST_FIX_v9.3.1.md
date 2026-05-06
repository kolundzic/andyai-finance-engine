# AndyAI Finance Engine v9.3.1 — Publishable Key Smoke Test Fix

## Purpose

This patch updates the Supabase Lab connection smoke test to use the Auth health endpoint.

## Why

The previous smoke test called the root REST endpoint:

```text
/rest/v1/
```

With the new `sb_publishable_` API key format, that endpoint may return:

```json
{"message":"Secret API key required","hint":"Only secret API keys can be used for this endpoint."}
```

That response does not mean the Supabase project is broken.

It means the smoke test used the wrong endpoint for a public/publishable connection check.

## New Test Target

The smoke test now calls:

```text
/auth/v1/health
```

with the public key in the `apikey` header.

## What It Checks

- `.env.local` exists
- `.env.local` is not tracked by Git
- public Supabase URL exists
- public/publishable key exists
- service role key exists locally but is not printed
- Auth health endpoint responds

## What It Does Not Do

- does not print keys
- does not use service role key
- does not apply migrations
- does not create tables
- does not write data
- does not activate production runtime
- does not activate billing

## Canonical Rule

Smoke test should prove the lab project is reachable.

It should not require elevated database access.
