# SQL Apply Candidate Checklist v9.6.0

## Environment

- Target is Supabase Free Lab
- Production target is blocked
- `.env.local` is not tracked
- Supabase smoke test passes
- Service role key is not printed or exposed

## Namespace

- Finance Engine namespace or prefix selected
- TAPFORGE namespace or prefix selected
- Human Attention tables will not be touched
- Shared audit boundary is understood

## SQL Review

- Membership tables reviewed
- Usage quota tables reviewed
- Audit and approval tables reviewed
- Export records reviewed
- Manual review queue reviewed
- RLS draft reviewed
- Indexes reviewed
- Rollback limitations reviewed

## TAPFORGE Review

- Manifest exists
- Import contract exists
- Dry-run contract exists
- Evidence ledger contract exists
- Dry-run evidence template exists
- Apply candidate decision template exists

## Decision

Allowed values:

- blocked
- needs_revision
- candidate_for_lab_apply_review

## Final Rule

No SQL apply happens in v9.6.0.
