# Supabase Architecture — AndyAI Finance Engine

## Purpose

Supabase becomes the SaaS foundation for AndyAI Finance Engine.

It stores:

- user projects
- business inputs
- model runs
- pricing outputs
- scenario outputs
- audit events
- human approval decisions
- export package metadata

## Canon

The Python layer remains the working finance engine.
The Next.js layer remains the public and operator interface.
Supabase becomes the durable SaaS memory and proof layer.

## Core tables

1. `afe_projects`
2. `afe_business_inputs`
3. `afe_model_runs`
4. `afe_audit_events`
5. `afe_approval_decisions`
6. `afe_export_packages`

## Truth principle

AI output is not decision material until a human approval record exists.
