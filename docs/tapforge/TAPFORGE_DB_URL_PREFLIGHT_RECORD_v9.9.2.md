# TAPFORGE DB URL Preflight Record v9.9.2

## Purpose

This document defines what TAPFORGE may record about DB URL readiness.

## Allowed Evidence

TAPFORGE may record:

- psql availability
- DB URL shape check passed or missing
- connection test passed or skipped
- strict env guard result
- smoke test result
- candidate verifier result
- operator note

## Forbidden Evidence

TAPFORGE must not record:

- raw SUPABASE_DB_URL
- database password
- service role key
- screenshots containing secrets

## Decision States

- db_url_missing
- db_url_shape_failed
- db_url_connection_failed
- db_url_preflight_passed
- tooling_ready_but_apply_blocked

## Rule

DB URL preflight is not SQL apply permission.
