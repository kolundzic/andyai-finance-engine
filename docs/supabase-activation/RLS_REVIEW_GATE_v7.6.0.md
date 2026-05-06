# AndyAI Finance Engine v7.6.0 — RLS Review Gate

## Purpose

This checkpoint defines the RLS review gate before live Supabase activation.

## Required Review Questions

- Can a user read only workspaces where they are a member?
- Can a viewer write anything?
- Can an operator approve financial outputs?
- Can a reviewer approve but not change ownership?
- Can an admin change membership but not erase audit history?
- Can an owner manage workspace settings?
- Can audit records survive membership changes?
- Can manual review records remain visible to authorized reviewers?

## Minimum Role Matrix

| Role | Intended Capability |
|---|---|
| owner | workspace ownership and high-level control |
| admin | membership and configuration management |
| operator | create and run modeling workflows |
| reviewer | approve or reject outputs |
| viewer | read-only access |

## Stop Rule

If RLS cannot be explained simply, it is not ready for production.
