# AndyAI Finance Engine v4.6.0 — Usage Quota Policy

## Purpose

This checkpoint defines the first usage quota policy for AndyAI Finance Engine.

It does not enforce quotas in runtime.

## Quota Principle

Usage quotas should protect cost, system stability, and business value without hiding auditability or weakening human approval.

## Quota Areas

| Area | Meaning |
|---|---|
| Projects per month | Number of private financial modeling projects |
| Model drafts per month | Number of generated draft models |
| Exports per month | Number of export actions |
| Team members | Number of people in a workspace |
| Audit retention | How long audit records remain available |
| Manual reviews | Number of operator review events available or required |

## Free Preview Direction

Free Preview may allow product exploration, demos, and public examples.

It should not provide unlimited private project creation, private model persistence, or export history.

## Professional Direction

Professional access may include bounded project creation, model draft generation, export-ready summaries, and basic audit visibility.

The quota should be generous enough for real individual work, but limited enough to prevent uncontrolled cost.

## Business Team Direction

Business Team access may include larger project volume, team members, approval workflows, export history, and longer audit retention.

This tier should be designed around repeatable client or internal business workflows.

## Enterprise Custom Direction

Enterprise Custom access should not rely on fixed public quotas.

Limits may be defined by contract, deployment model, governance requirements, and integration scope.

## Manual Review Direction

Manual Review should not be treated as a normal quota only.

Some review events are safety requirements and must not be blocked simply because a user reached a usage limit.

## Safety Rule

Quota limits must never hide or delete audit records required for safety, dispute handling, financial review, or governance investigation.

## Enforcement Status

This release defines quota policy only.

It does not add runtime enforcement, database quota tables, billing provider logic, subscription checks, or usage metering.

## Canonical Formula

Quota protects the business.

Audit protects the truth.

Human approval protects the decision.
