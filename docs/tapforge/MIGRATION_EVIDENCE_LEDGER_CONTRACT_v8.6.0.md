# AndyAI Finance Engine v8.6.0 — Migration Evidence Ledger Contract

## Purpose

This checkpoint defines the evidence ledger TAPFORGE should keep for Finance Engine migration operations.

## Evidence Events

TAPFORGE should record:

- pack selected
- source repo checked
- source tag checked
- manifest verified
- dry run started
- dry run completed
- operator approval recorded
- migration apply started
- migration apply completed
- migration apply failed
- rollback note recorded
- final verification recorded

## Evidence Must Include

- timestamp
- operator
- pack name
- source tag
- target environment
- action
- result
- notes
- references

## Trust Rule

If a migration changes financial runtime infrastructure, the system must leave evidence.
