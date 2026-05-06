# TAPFORGE Namespace Decision Record v9.7.0

## Decision

TAPFORGE must treat prefix isolation as a blocking requirement before any future lab-only SQL apply.

## Required Prefixes

- Finance Engine: `fe_`
- TAPFORGE: `tf_`
- Shared audit: `audit_`
- Human Attention: do not touch

## TAPFORGE Responsibilities

TAPFORGE must verify:

- source tag
- prefix lock exists
- generated SQL preview uses allowed prefixes
- production apply is blocked
- Human Attention tables are not referenced
- operator approval exists before future apply
- evidence is recorded

## Decision State

Allowed states:

- blocked
- needs_prefix_revision
- prefix_lock_accepted_for_lab_apply_candidate

## Rule

No prefix lock, no apply.
