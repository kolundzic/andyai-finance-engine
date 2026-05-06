# AndyAI Finance Engine v6.1.0 — Runtime Contract Types

## Purpose

This checkpoint introduces provider-neutral runtime contract types for future Supabase-backed monetization logic.

## Boundary

The runtime contracts define shapes and vocabulary.

They do not activate live Supabase database calls, billing, checkout, webhook handling, or subscription enforcement.

## Trust Rule

Runtime contracts must keep human approval and audit requirements visible before any real data path is activated.
