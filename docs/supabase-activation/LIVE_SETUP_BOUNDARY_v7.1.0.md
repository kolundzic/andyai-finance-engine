# AndyAI Finance Engine v7.1.0 — Supabase Live Setup Boundary

## Purpose

This checkpoint defines the boundary between repository preparation and real Supabase setup.

## Important Decision

Supabase should not be configured blindly.

The correct order is:

1. Prepare activation docs and guard scripts.
2. Verify the repo remains clean and buildable.
3. Create the Supabase project manually.
4. Add secrets only to local environment or deployment environment.
5. Apply database migrations only after review.

## Current Status

v7.1.0 does not create or connect to a live Supabase project.

## When Real Supabase Setup Starts

Real Supabase setup should start after v8.0.0 is complete.

At that point the repo should contain:

- activation runbook
- env guard
- CLI preflight
- migration checklist
- RLS review gate
- Vercel env sync checklist
- final activation gate

## Safety Rule

No secret belongs in Git.

No live database belongs in the workflow until guard scripts and operator instructions exist.
