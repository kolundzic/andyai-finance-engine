# AndyAI Finance Engine v8.8.0 — Supabase Free Lab Seed Policy

## Purpose

This checkpoint defines seed-data rules for a Supabase Free lab.

## Seed Data Rule

Use tiny, non-sensitive, disposable data only.

## Allowed Seed Data

- demo workspace
- demo user references
- sample membership state
- sample quota policy
- small audit event examples
- sample approval state
- fake export record reference

## Disallowed Seed Data

- real customer data
- real bank data
- payroll data
- private investor documents
- generated PDFs as database blobs
- service keys
- screenshots containing secrets
- production billing data

## Storage Rule

Do not store large documents in the Free database.

Use references and small JSON examples only.

## Cleanup Rule

Seed data should be easy to delete and recreate.
