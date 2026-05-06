# v13.0.0 — Finance Engine Online Proof Lock

## Locked Surface

| Route | Meaning |
|---|---|
| `/finance-proof` | Public proof page |
| `/api/finance/read-only/status` | Local JSON proof status |

## Domain

```text
finance.andyai.ai
```

## Locked Boundary

Online proof may show.

Online proof may not mutate.

## Still Blocked

- database writes
- DB URL exposure
- service role exposure
- production write runtime
- billing
- checkout
- webhooks
- paid runtime

## Canon

The system now has eyes.

The hands remain locked.
