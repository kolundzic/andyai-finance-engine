# AndyAI Finance Engine v8.0.0 — Supabase Live Activation Gate

## Summary

v8.0.0 completes the Supabase live activation gate.

This release does not configure Supabase automatically.

It marks the point where the human operator may safely begin real setup.

## Included Gate

- v7.1.0 Live Setup Boundary
- v7.2.0 Migration Bundle Map
- v7.3.0 Env Local Guard
- v7.4.0 Supabase CLI Preflight
- v7.5.0 Migration Application Runbook
- v7.6.0 RLS Review Gate
- v7.7.0 Vercel Env Sync Checklist
- v7.8.0 Live Setup Verification Pack
- v7.9.0 v8 Activation Readiness

## What Happens After v8.0.0

After v8.0.0, the next human setup step is:

1. Create a Supabase project.
2. Copy project URL and anon key.
3. Copy service role key only into local or server environment.
4. Create `.env.local` locally.
5. Run strict env guard.
6. Review migrations.
7. Apply migrations only to a development project first.
8. Test RLS with multiple users.
9. Only then consider production deployment.

## Still Not Activated

v8.0.0 does not activate:

- live Supabase project
- migration execution
- live RLS
- checkout
- webhook
- billing provider SDK
- subscription enforcement
- paid export runtime

## Canonical Rule

This is the gate, not the jump.

The system is ready for human-controlled Supabase setup, not automatic production activation.
