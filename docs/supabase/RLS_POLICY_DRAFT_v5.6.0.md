# AndyAI Finance Engine v5.6.0 — RLS Policy Draft

## Purpose

This checkpoint defines a first Row-Level Security policy draft for the Supabase monetization foundation.

It does not apply policies to a live database.

## RLS Principle

A user should only access records belonging to workspaces where they are a member.

Admin and owner actions should remain separated from operator and reviewer actions.

## Safety Rule

RLS must protect workspace data, but it must not delete or hide audit records required for governance review.
