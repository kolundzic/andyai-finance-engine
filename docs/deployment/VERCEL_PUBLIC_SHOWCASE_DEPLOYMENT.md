# Vercel Public Showcase Deployment

## Current architecture

- Python finance engine core remains in `src/finance_engine`.
- Next.js public showcase layer lives in `app/`.
- Vercel builds the web layer using `package.json` and `vercel.json`.

## Deployment steps

```bash
npm install
npm run build
git status
git push origin main
git push origin v3.0.0
```

Then redeploy on Vercel from the latest `main` commit.

## Canon

The web layer is the face.
The Python layer is the working core.
The proof layer is the trust signal.
The human approval gate is the truth layer.
