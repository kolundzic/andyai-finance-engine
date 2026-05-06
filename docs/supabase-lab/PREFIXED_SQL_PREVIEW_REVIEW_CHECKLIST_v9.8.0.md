# Prefixed SQL Preview Review Checklist v9.8.0

## Required Checks

- All Finance Engine tables use `fe_`
- No Finance Engine table uses unprefixed draft names
- No Human Attention table is referenced
- RLS enablement references only `fe_` tables
- Index names are prefixed or Finance Engine specific
- Foreign keys reference `fe_` tables only
- Preview ends with `ROLLBACK`
- No production apply exists
- No secrets are printed
- `.env.local` is not tracked

## Candidate Decision

Allowed states:

- blocked
- needs_revision
- prefixed_preview_accepted_for_lab_apply_candidate

## Rule

Accepting the preview does not apply SQL.
