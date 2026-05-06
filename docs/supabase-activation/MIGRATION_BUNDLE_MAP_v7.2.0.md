# AndyAI Finance Engine v7.2.0 — Migration Bundle Map

## Purpose

This checkpoint maps the migration bundle needed for future Supabase activation.

It does not apply migrations.

## Existing SQL Draft Sources

The future migration bundle should be derived from reviewed versions of:

- membership tables draft
- usage quota tables draft
- audit and approval tables draft
- RLS policy draft

## Future Migration Order

Recommended order:

1. extensions and helper functions
2. workspaces and workspace members
3. membership states
4. quota policies and usage events
5. audit events
6. approval decisions
7. export records
8. manual review queue
9. indexes
10. RLS enablement
11. RLS policies

## Review Requirement

Before application, every migration must be reviewed for:

- auth.uid strategy
- role matrix
- data retention
- audit survivability
- RLS correctness
- rollback limitations

## Boundary

This release creates a map and placeholder bundle folder only.
