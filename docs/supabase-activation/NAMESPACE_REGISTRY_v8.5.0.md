# AndyAI Finance Engine v8.5.0 — Namespace Registry

## Purpose

This checkpoint defines naming discipline for a shared Supabase Free lab project.

## Preferred Schema Direction

| Schema | Purpose |
|---|---|
| finance_engine | Finance Engine tables |
| tapforge | TAPFORGE orchestration tables |
| shared_audit | Cross-system audit and evidence tables |

## Prefix Fallback

If custom schemas are postponed, use prefixes:

| Prefix | Purpose |
|---|---|
| fe_ | Finance Engine |
| tf_ | TAPFORGE |
| audit_ | shared audit or evidence |

## Rule

Do not mix TAPFORGE orchestration tables with Finance Engine business tables without either schema separation or strict prefixes.

## Free Account Strategy

Use a small lab namespace.

Do not store large documents, generated PDFs, or heavy audit payloads in the Free project.
