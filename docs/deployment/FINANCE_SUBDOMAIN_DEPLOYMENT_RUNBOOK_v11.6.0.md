# v11.6.0 — finance.andyai.ai Deployment Runbook

## Canon Domain

```text
finance.andyai.ai
```

## Correct Vercel Project

```text
andyai-finance-engine
```

Do not attach this domain to `andyai-visual-canon`.

## Vercel

```text
Project → andyai-finance-engine → Settings → Domains → Add Domain → finance.andyai.ai → Production
```

## GoDaddy

| Field | Value |
|---|---|
| Type | CNAME |
| Name | finance |
| Value | Vercel CNAME target |
| TTL | Default |

## Verify

```bash
dig finance.andyai.ai CNAME +short
curl -I https://finance.andyai.ai
```
