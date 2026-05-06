# v13.1.0 — Vercel Clean-Build Handoff

## Why local build was skipped

The local machine had a stale `.next` cache problem with duplicate folders such as:

```text
.next/standalone 2/
.next/standalone 2/node_modules 2/
```

Local cleanup repeatedly hung, while source verification succeeded.

## Decision

v13.1.0 is committed and pushed without local `next build`.

Vercel will build from a clean GitHub checkout, where stale local `.next` folders do not exist.

## Safety

This release is visual/UI only.

No SQL.

No database writes.

No DB URL.

No service role exposure.

No billing, checkout, or webhooks.
