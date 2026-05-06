# AndyAI Finance Engine v5.7.0 — Supabase Env and Setup Guide

## Purpose

This checkpoint defines the safe environment and setup guide for future Supabase monetization runtime work.

## Required Environment Variables

| Variable | Purpose |
|---|---|
| NEXT_PUBLIC_SUPABASE_URL | Public Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Public anon key for browser-safe client usage |
| SUPABASE_SERVICE_ROLE_KEY | Server-only privileged key |
| SUPABASE_PROJECT_REF | Optional project reference for CLI workflows |

## Safety Rules

- Never commit `.env.local`
- Never expose service role key in browser code
- Never use service role key in client components
- Never activate billing webhooks without signature verification
- Never treat payment success as approval of financial truth

## Local Setup Direction

1. Create Supabase project
2. Add environment variables locally
3. Keep service key server-only
4. Review SQL drafts before applying
5. Apply migrations only after RLS and role matrix review
6. Verify build
7. Verify no secrets were committed

## Current Status

This release is documentation-only.

No live Supabase runtime behavior is introduced.
