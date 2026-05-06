# SUPABASE_DB_URL Handling v9.9.1

## Purpose

This note defines how `SUPABASE_DB_URL` should be handled before any future lab-only SQL apply.

## Rule

Do not commit `SUPABASE_DB_URL`.

Do not place it in README.

Do not paste it into chat.

Do not screenshot it.

Do not store it in public notes.

## Recommended Usage

Use it only in the current Terminal shell when intentionally preparing a lab-only apply attempt.

Example shape only:

```text
postgresql://postgres:<password>@<host>:5432/postgres
```

## Required Protection

The value contains a database password.

Treat it as secret.

## Current Release Boundary

v9.9.1 does not require `SUPABASE_DB_URL` to be set.

It only checks whether the machine is ready for a future apply attempt.
