# AndyAI Finance Engine v8.4.0 — TAPFORGE Apply Dry Run Contract

## Purpose

This checkpoint defines the required dry-run contract before TAPFORGE applies any Finance Engine migration pack.

## Dry Run Must Check

A dry run should verify:

- repo source tag
- manifest validity
- migration order
- environment guard
- RLS review status
- target mode
- operator approval
- secret hygiene
- Free account lab boundary
- rollback notes

## Dry Run Result States

| State | Meaning |
|---|---|
| ready | dry run passed and operator may approve |
| blocked | critical failure |
| needs_review | human review needed |
| warning | non-blocking issue |
| skipped | not applicable |

## Stop Conditions

Stop if:

- service role key is exposed
- `.env.local` is tracked
- source tag mismatch
- RLS review missing
- target is production without upgrade decision
- migration bundle was not reviewed
