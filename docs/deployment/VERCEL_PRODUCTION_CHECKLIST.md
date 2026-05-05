# Vercel Production Checklist

## Before deploy

- 🟢 `npm run build` passes locally
- 🟢 `VERIFY.sh` passes
- 🟢 latest commit is pushed to `main`
- 🟢 latest tag is pushed
- 🟢 Vercel project is connected to `kolundzic/andyai-finance-engine`
- 🟢 deployment source uses latest `main`

## After deploy

- 🟢 homepage loads
- 🟢 `/workflow` loads
- 🟢 `/demo` loads
- 🟢 `/library` loads
- 🟢 `/proof` loads

## Canon

No public product without proof.
No finance output without human approval.
No SaaS layer without quota, auth, audit, and kill switch.
