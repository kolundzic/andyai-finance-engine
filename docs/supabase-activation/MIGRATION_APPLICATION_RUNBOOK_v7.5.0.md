# AndyAI Finance Engine v7.5.0 — Migration Application Runbook

## Purpose

This checkpoint defines the future migration application runbook.

It does not apply any migration.

## Manual Review Before Apply

Before applying database changes, review:

- table names
- foreign keys
- RLS assumptions
- auth.uid mapping
- workspace ownership model
- role matrix
- audit retention requirements
- rollback strategy

## Safe Activation Flow

1. Confirm repo is on the activation gate tag.
2. Confirm `.env.local` is present and not tracked.
3. Confirm Supabase project is created.
4. Review SQL migration bundle.
5. Apply migrations in a staging or development Supabase project first.
6. Verify RLS with test users.
7. Verify audit records cannot be silently hidden.
8. Only then consider production activation.

## Stop Conditions

Stop if:

- service role key appears in client code
- `.env.local` is tracked
- RLS policy is unclear
- owner/admin/operator/reviewer roles are not defined
- migrations were not reviewed
