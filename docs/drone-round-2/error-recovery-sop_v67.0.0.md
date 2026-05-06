# v67.0.0 — Error and Recovery SOP

## Summary

Defines how failures should be handled before live runtime exists.

## Why this exists

This milestone prepares the system for future controlled runtime without enabling dangerous behavior now.

## Route

```text
/recovery-sop
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

Recovery discipline is documented.
