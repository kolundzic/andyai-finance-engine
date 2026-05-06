# v10.5.0 — Read-Only REST Request Builder Skeleton

## Purpose

This checkpoint adds a GET-only REST request plan builder.

## Important Boundary

The builder does not execute fetch.

It does not connect to Supabase.

It does not require DB URL.

It does not write data.

## Added Code

```text
src/runtime/supabase-lab-read-only-request-builder.ts
```

## Rule

The builder may create a GET path.

It may not execute the request.
