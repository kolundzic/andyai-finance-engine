# TAPFORGE + AndyAI Finance Engine — Orchestration Strategy v8.1.0

## Purpose

This document defines how TAPFORGE should interact with AndyAI Finance Engine without duplicating its schema ownership.

## Decision

TAPFORGE should not copy all finance tables as its own truth.

TAPFORGE should orchestrate installation and verification of versioned packs.

## TAPFORGE Responsibilities

TAPFORGE may own:

- install/run registry
- package manifests
- operator approvals
- migration application logs
- verification results
- rollback notes
- evidence trails
- release application status

## Finance Engine Responsibilities

AndyAI Finance Engine owns:

- financial schema design
- membership model
- quota model
- audit/approval/export model
- SQL drafts
- runtime contracts
- activation rules

## Bridge Principle

TAPFORGE installs and records.

Finance Engine defines and governs.
