# v11.1.0 — Server-Side Read-Only Executor Candidate Gate

Design permission only. No database connection. No query execution. No mutation. No production runtime.

Allowed: contracts, envelopes, result models, blueprints, proof copy, scanners.

Blocked: execution, writes, billing, checkout, webhooks, paid runtime, secrets in browser.
