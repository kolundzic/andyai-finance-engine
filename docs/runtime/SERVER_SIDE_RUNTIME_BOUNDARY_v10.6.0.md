# v10.6.0 — Server-Side Runtime Boundary

## Purpose

This checkpoint defines the server-side boundary for any future read-only executor.

## Rule

Any future executor must run server-side.

Service role key must never be exposed to browser code.

DB URL must never be exposed to browser code.

## Allowed Later Direction

A later server-side read executor may use:

- public/publishable key for public-safe checks
- server-side environment variables for protected reads
- explicit table allowlist
- GET-only request plan

## Still Blocked

- client-side service role
- browser DB URL
- mutation execution
- production runtime
- billing
- checkout
- webhooks
