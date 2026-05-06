# v10.8.0 — Read-Only Proof Surface Blueprint

## Purpose

This checkpoint defines the future UI/proof surface for the read-only lab runtime.

## What The UI May Show Later

- lab database exists
- 10 `fe_` tables are expected
- read-only adapter status
- mutation blocked
- production blocked
- billing blocked
- checkout blocked
- webhooks blocked
- proof document links

## What The UI Must Not Do

- write data
- show secrets
- expose service role key
- expose DB URL
- trigger billing
- trigger checkout
- process webhooks

## Suggested Sections

1. Lab Status
2. Table Allowlist
3. Runtime Safety Flags
4. Evidence Links
5. Next Gate

## Rule

The proof surface may explain.

It may not execute privileged runtime actions.
