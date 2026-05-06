# v10.4.0 — Read-Only Query Contract Layer

## Purpose

This checkpoint adds an explicit read-only operation contract.

## Added Code

```text
src/runtime/supabase-lab-read-only-contracts.ts
```

## Allowed Operations

- select
- metadata

## Blocked Operations

- insert
- update
- delete
- upsert
- truncate
- drop
- alter
- create
- grant
- revoke
- mutation_rpc

## Rule

Read-only contract must make mutation impossible by construction.
