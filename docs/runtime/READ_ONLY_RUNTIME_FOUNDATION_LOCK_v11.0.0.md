# AndyAI Finance Engine v11.0.0 — Read-Only Runtime Foundation Lock

## Purpose

v11.0.0 locks the read-only runtime foundation after the v10.3.0 → v10.9.0 master line.

## Locked Chain

| Version | Meaning |
|---|---|
| v10.0.0 | First Supabase Lab SQL Apply |
| v10.0.1 | Post-Apply Seal |
| v10.1.0 | Read-Only Runtime Gate |
| v10.2.0 | Adapter Skeleton |
| v10.3.0 | Runtime TOC |
| v10.4.0 | Query Contract |
| v10.5.0 | REST Request Builder Skeleton |
| v10.6.0 | Server-Side Boundary |
| v10.7.0 | Diagnostics Model |
| v10.8.0 | Proof Surface Blueprint |
| v10.9.0 | Safety Test Matrix |
| v11.0.0 | Foundation Lock |

## What Is Now Allowed

- local read-only query planning
- allowlist validation
- runtime diagnostics modeling
- proof surface planning
- server-side executor preparation in a future gate

## Still Not Allowed

- database mutation
- automatic runtime writes
- production runtime
- billing
- checkout
- webhooks
- paid runtime
- service role exposure to browser
- DB URL storage in repo

## Canonical Rule

The system now has eyes.

The hands remain locked.
