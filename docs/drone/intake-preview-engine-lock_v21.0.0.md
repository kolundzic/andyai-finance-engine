# v21.0.0 — Intake Preview Engine Lock

## Summary

Locks the local-only intake preview layer and its no-submit boundary.

## Public route

```text
/intake-preview
```

## Safety boundary

- no live submit
- no network call
- no database write
- no provider call
- no microphone
- no recording
- no billing
- no checkout
- no payment

## Lock meaning

Intake preview becomes a stable public surface.
