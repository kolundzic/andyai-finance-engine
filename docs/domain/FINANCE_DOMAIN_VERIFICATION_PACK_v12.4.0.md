# v12.4.0 — finance.andyai.ai Domain Verification Pack

## Domain

```text
finance.andyai.ai
```

## Online Checks

```bash
./scripts/check-finance-domain-online.sh
```

## Expected

- DNS points to Vercel
- HTTPS works
- `/api/finance/read-only/status` responds
- `/finance-proof` opens

## Boundary

Domain verification is not runtime mutation.
