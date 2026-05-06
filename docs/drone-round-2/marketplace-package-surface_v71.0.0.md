# v71.0.0 — Marketplace Package Surface

## Summary

Defines how future productized packages may be shown publicly.

## Why this exists

This milestone prepares the system for future controlled runtime without enabling dangerous behavior now.

## Route

```text
/marketplace
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

Marketplace is surfaced without checkout.
