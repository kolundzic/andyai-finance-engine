# AndyAI Finance Engine v5.4.0 — Usage Quota Tables Draft

## Purpose

This checkpoint defines draft Supabase tables for quota policy, usage events, and quota windows.

It does not enforce quotas in runtime.

## Quota Areas

- projects per month
- model drafts per month
- exports per month
- team members
- audit retention
- manual reviews

## Safety Rule

Quota logic must protect cost and stability, but must not hide audit records needed for safety or governance.
