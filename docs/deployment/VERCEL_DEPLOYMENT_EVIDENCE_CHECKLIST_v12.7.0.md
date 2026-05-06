# v12.7.0 — Vercel Deployment Evidence Checklist

## Evidence Checklist

| Check | Status |
|---|---|
| Vercel project is `andyai-finance-engine` | ⬜ |
| Domain `finance.andyai.ai` attached to correct project | ⬜ |
| DNS CNAME host is `finance` | ⬜ |
| HTTPS active | ⬜ |
| `/finance-proof` opens | ⬜ |
| `/api/finance/read-only/status` responds | ⬜ |
| No mutation runtime active | ⬜ |

## Commands

```bash
./scripts/check-finance-domain-online.sh
curl -sS https://finance.andyai.ai/api/finance/read-only/status
```
