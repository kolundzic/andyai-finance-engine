# Supabase Setup Checklist

## Create project

- Create a new Supabase project.
- Copy project URL.
- Copy anon public key.

## Run SQL

1. Run `supabase/migrations/0001_andyai_finance_engine_schema.sql`
2. Review and run `supabase/policies/0001_andyai_finance_engine_rls.sql`

## Configure local

```bash
cp .env.example .env.local
```

## Configure Vercel

Add:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Verify

- `/supabase` shows configured status
- `/projects` loads
- `/runs` loads
- `/audit` loads
- `/approval` loads
