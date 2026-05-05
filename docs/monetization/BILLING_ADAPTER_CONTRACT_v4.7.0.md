# AndyAI Finance Engine v4.7.0 — Billing Adapter Contract

## Purpose

This checkpoint defines the first billing adapter contract for AndyAI Finance Engine.

It does not activate live billing.

## Adapter Principle

Billing providers should not directly control product trust.

External billing events should be mapped into internal access and review states.

## Future Provider Candidates

| Provider | Possible Role |
|---|---|
| Stripe | Main subscription and checkout provider candidate |
| Lemon Squeezy | Alternative merchant-of-record style provider candidate |
| Polar | Developer-friendly SaaS billing candidate |
| Manual Invoice | Consulting, pilot, and enterprise path |
| None | Safe default while billing is inactive |

## Internal Mapping Direction

A future billing adapter may translate external events into internal states such as:

- Free Preview
- Professional
- Business Team
- Enterprise Custom
- Manual Review
- Suspended

## Event Types

Future billing events may include:

- Checkout started
- Subscription created
- Subscription updated
- Subscription cancelled
- Payment failed
- Refund requested
- Manual invoice approved
- Manual review required

## Manual Invoice Mode

Manual Invoice mode is important for early pilots, Japanese business relationships, consulting offers, and enterprise conversations.

It should always include human operator review.

## No Billing Mode

No Billing mode keeps the product safe while monetization architecture is still being built.

In this mode, public preview behavior remains available, but paid access is not enforced.

## Safety Rules

- No provider secret should be committed.
- No live checkout should be activated without explicit approval.
- Billing status must not erase audit history.
- Payment success must not bypass human review.
- Payment failure should not destroy user records.
- Refund and cancellation logic must be documented before launch.
- Manual review must remain available for unclear billing states.

## Canonical Formula

Billing can unlock access.

Billing cannot unlock trust.
