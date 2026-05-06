# v11.8.0 — Executor Candidate Safety Scanner

## Purpose

Scans runtime source for forbidden execution, mutation, and secret patterns.

## Allows

Safe policy declarations such as:

```text
serviceRoleKeyRequired: false
```

## Blocks

- `.insert(`
- `.update(`
- `.delete(`
- `.upsert(`
- `process.env.SUPABASE_DB_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- service role secret usage
