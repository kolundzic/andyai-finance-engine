# AndyAI Finance Engine v8.3.0 — Finance Engine Migration Import Contract

## Purpose

This checkpoint defines how TAPFORGE may import migration material from AndyAI Finance Engine.

## Import Principle

TAPFORGE may reference and orchestrate Finance Engine migrations.

TAPFORGE must not silently rewrite Finance Engine schema as a new source of truth.

## Allowed Import Behaviors

TAPFORGE may:

- read a Finance Engine manifest
- verify expected source tag
- list migration drafts
- require operator approval
- record dry-run results
- record apply results
- attach evidence logs
- block unsafe apply requests

## Disallowed Import Behaviors

TAPFORGE must not:

- apply migrations without explicit approval
- change source migration order silently
- bypass RLS review
- commit secrets
- treat Free Supabase as production
- erase evidence from failed runs

## Contract Fields

Future import contracts should preserve:

- pack name
- source repo
- source tag
- migration identifiers
- checksum direction
- review status
- operator decision
- apply target
- dry-run result
- final result
