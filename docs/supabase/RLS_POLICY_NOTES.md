# RLS Policy Notes

## Production principle

No SaaS table should be public by default.

## Current draft

The first policy layer assumes:

- Supabase Auth exists
- `afe_projects.owner_id = auth.uid()`
- child tables are visible only through project ownership

## Later work

- insert/update policies for child tables
- team workspaces
- admin roles
- audit-only service role boundaries
