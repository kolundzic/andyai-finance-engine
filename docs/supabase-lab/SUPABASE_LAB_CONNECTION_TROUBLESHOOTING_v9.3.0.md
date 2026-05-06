# Supabase Lab Connection Troubleshooting v9.3.0

## HTTP 401 or 403

Likely causes:

- wrong anon key
- wrong project URL
- copied service role key into anon key field by mistake
- project API settings changed

## HTTP 000 or curl failure

Likely causes:

- no internet connection
- project URL typo
- project paused
- DNS/network problem

## `.env.local` Missing

Run:

```bash
./scripts/create-supabase-env-local.sh
```

## `.env.local` Tracked

Stop immediately.

Remove it from Git tracking before continuing.

## Important

Do not paste service role key into chat.

Describe errors without exposing secret values.
