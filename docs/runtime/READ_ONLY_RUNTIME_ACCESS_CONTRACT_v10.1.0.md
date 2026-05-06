# Read-Only Runtime Access Contract v10.1.0

## Contract

The first runtime layer is observation-only.

## Allowed Operations

- list table metadata from a controlled allowlist
- read small diagnostic rows only after a later explicit read proof gate
- display lab readiness state
- display evidence links
- display table existence status

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
- execute mutation RPC
- billing activation
- payment provider calls
- webhook processing

## Client Boundary

Browser/client code may use only public/publishable Supabase key for public-safe checks.

Service role key must never be exposed to the browser.

## Server Boundary

Server-side code may later use elevated credentials only after a separate server-side runtime gate.

## RLS Boundary

RLS remains a governance layer.

A read-only runtime gate does not bypass RLS.

## Final Rule

Read-only means no mutation path exists in the code path.
