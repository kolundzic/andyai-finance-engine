# Post-Apply Secret Rotation Note v10.0.1

## Purpose

This note records a practical safety recommendation after the first successful lab-only SQL apply.

## Recommendation

Rotate the Supabase database password after the first successful lab apply when convenient.

## Why

During setup and troubleshooting, connection-string shapes and password handling were actively adjusted.

Even if no final secret is intentionally stored, password rotation is a clean operational habit after first apply.

## What To Rotate

Rotate only the database password for the lab project when ready.

Do not rotate keys blindly during an active debugging session.

## What Not To Store

Do not store:

- raw `SUPABASE_DB_URL`
- database password
- service role key
- screenshots containing secrets
- `.env.local` in Git

## Safe Usage

Use `SUPABASE_DB_URL` only in the current Terminal session when needed.

## Boundary

This is a recommendation.

It is not required for v10.0.1 completion.
