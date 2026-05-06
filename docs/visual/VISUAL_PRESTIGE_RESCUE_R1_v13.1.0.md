# v13.1.0 — Visual Prestige Rescue R1

## Purpose

Fixes the homepage proof-copy verifier by ensuring the public homepage includes the exact phrase:

```text
Read-only proof
```

## Context

The visual design already included the concept as uppercase `READ-ONLY PROOF`, but the verifier checked exact case.

## Boundary

No SQL.

No database writes.

No DB URL.

No service role.

No billing, checkout, or webhooks.
