# Local Env Operator Checklist v9.2.0

## Before Running

Confirm:

- Supabase Lab project exists
- Project URL is copied
- anon public key is copied
- service role key is available locally
- repo is clean
- `.env.local` is not tracked

## Run

```bash
./scripts/create-supabase-env-local.sh
```

## After Running

Run:

```bash
./scripts/verify-supabase-env-local.sh --strict
./scripts/verify-supabase-live-preflight.sh
```

## Do Not Share

Do not share:

- service role key
- database password
- `.env.local`
- screenshots with secrets
- unrestricted connection strings
