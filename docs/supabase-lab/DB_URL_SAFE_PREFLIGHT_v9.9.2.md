# AndyAI Finance Engine v9.9.2 — DB URL Safe Preflight

## Purpose

This checkpoint adds a safe preflight for `SUPABASE_DB_URL`.

It does not apply SQL.

It does not create schemas.

It does not create tables.

It does not write data.

It does not activate production runtime.

## What It Checks

The script checks:

- repo root
- `.env.local` is not tracked
- `psql` is installed
- strict env guard passes
- Supabase lab smoke test passes
- lab-only apply candidate verifier passes
- `SUPABASE_DB_URL` shape, if present
- optional read-only psql connection test, if `SUPABASE_DB_URL` is present

## Command

From repo root:

```bash
./scripts/check-supabase-db-url-preflight.sh
```

## If `SUPABASE_DB_URL` Is Missing

That is not a repo failure.

It means the operator has not intentionally prepared a database connection for a future lab-only apply attempt.

## If `SUPABASE_DB_URL` Is Present

The script checks the shape and runs a read-only connection query:

```sql
select current_database() as database_name, current_user as db_user;
```

## Safety Rule

The script must never print the DB URL.

The DB URL contains a password and must be treated as secret.
