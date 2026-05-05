# Environment Variables

## Local

Create:

```bash
cp .env.example .env.local
```

Then fill:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_ANON_KEY"
```

## Vercel

Add the same public variables in:

Project Settings → Environment Variables

## Never commit

- `SUPABASE_SERVICE_ROLE_KEY`
- database passwords
- API secrets
