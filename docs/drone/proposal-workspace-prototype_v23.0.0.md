# v23.0.0 — Proposal Workspace Prototype

## Summary

Adds a static proposal workspace for pilot offer review.

## Public route

```text
/proposal-workspace
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

Proposal logic gets a public workspace.
