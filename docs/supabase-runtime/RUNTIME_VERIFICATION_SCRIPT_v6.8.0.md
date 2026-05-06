# AndyAI Finance Engine v6.8.0 — Runtime Verification Script

## Purpose

This checkpoint adds a local verification script for the Supabase runtime foundation.

## Scope

The script checks required runtime interface files and ensures the runtime foundation does not create a live Supabase client or reference a service role key.

## Boundary

No live database, billing provider, checkout, webhook, or subscription enforcement is introduced.
