# AndyAI Finance Engine v7.7.0 — Vercel Env Sync Checklist

## Purpose

This checkpoint defines how Supabase environment variables should later be synchronized into Vercel.

## Required Vercel Variables

- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY

## Safety Rules

- Public variables may be exposed to the browser only if they are designed to be public.
- Service role key must be server-only.
- Do not place service role key in client components.
- Do not place service role key in README, docs, screenshots, or logs.
- Do not activate live webhooks until signature verification exists.

## Deployment Environments

Review separately:

- local development
- preview deployment
- production deployment

## Stop Rule

If environment separation is unclear, do not deploy live runtime.
