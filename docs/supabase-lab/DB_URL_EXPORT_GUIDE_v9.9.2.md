# DB URL Export Guide v9.9.2

## Purpose

This guide explains how to use `SUPABASE_DB_URL` safely.

## Where It Comes From

Get the connection string from Supabase dashboard connection settings for the lab project.

Use only the lab project.

Do not use production credentials.

## How To Use It

Set it only in the current Terminal session.

Example shape only:

```text
postgresql://postgres:<password>@<host>:5432/postgres
```

## Do Not Store It

Do not commit it.

Do not put it in `.env.local`.

Do not paste it into chat.

Do not screenshot it.

Do not put it in README or docs.

## Safe Check

After setting it locally, run:

```bash
./scripts/check-supabase-db-url-preflight.sh
```

## Current Boundary

v9.9.2 does not apply SQL.

It only confirms whether the machine and connection are ready.
