# AndyAI Finance Engine v5.3.0 — Membership Tables Draft

## Purpose

This checkpoint defines the first Supabase membership table draft.

It does not apply migrations to a live Supabase project.

## Draft Table Group

The membership foundation should support:

- users
- workspaces
- workspace members
- membership states
- manual review states
- future billing references

## Trust Rule

Membership controls access.

Membership must not bypass human review, audit trail, export safety, or operator accountability.

## Implementation Status

This release is schema-draft only.

No runtime Supabase client behavior, migration execution, RLS enforcement, checkout, webhook, or subscription logic is introduced.
