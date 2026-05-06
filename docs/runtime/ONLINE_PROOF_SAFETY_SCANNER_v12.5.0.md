# v12.5.0 — Online Proof Safety Scanner

## Purpose

Scans runtime source for mutation and secret patterns.

## Important Scanner Boundary

This scanner checks runtime code only:

```text
src/
app/
pages/
```

It does not scan `configs/`, `docs/`, or `scripts/` for forbidden string literals, because those files may intentionally contain:

- historical forbidden-pattern lists
- blocked operation names
- safe `false` flags documenting disabled behavior

## Blocks In Runtime Code

- `.insert(`
- `.update(`
- `.delete(`
- `.upsert(`
- `process.env.SUPABASE_DB_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- service role secret usage

## Allows In Governance Configs

Safe policy declarations such as:

```text
"uses_service_role_key": false
"database_writes_allowed": false
```
