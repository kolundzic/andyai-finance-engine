# TAPFORGE Tooling Preflight Record v9.9.1

## Purpose

This document defines what TAPFORGE may later record about lab apply tooling readiness.

## Evidence Fields

- source repo
- source tag
- candidate SQL path
- apply candidate script path
- psql availability
- DB URL readiness status
- env guard result
- smoke test result
- candidate verifier result
- operator note

## Forbidden Evidence

TAPFORGE must not store:

- raw SUPABASE_DB_URL
- database password
- service role key
- screenshots containing secrets

## Decision States

- tooling_not_ready
- tooling_ready_but_apply_blocked
- tooling_ready_for_manual_lab_apply_attempt

## Rule

Tooling readiness is not apply permission.
