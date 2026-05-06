# v62.0.0 — Proposal PDF Export Blueprint

## Summary

Plans future PDF export without creating export runtime.

## Why this exists

This milestone prepares the system for future controlled runtime without enabling dangerous behavior now.

## Route

```text
/pdf-export-blueprint
```

## Boundary

- no live submit
- no database write
- no provider call
- no service role key
- no microphone
- no recording
- no payment
- no checkout

## Lock meaning

Export remains a blueprint.
