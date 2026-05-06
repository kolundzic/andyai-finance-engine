# TAPFORGE Lab-Only Apply Candidate Record v9.9.0

## Purpose

This document defines the evidence TAPFORGE should record for the lab-only apply candidate.

## Evidence Fields

- source repo
- source tag
- candidate SQL path
- candidate script path
- operator
- target project label
- target mode
- strict env guard result
- smoke test result
- prefixed preview verifier result
- candidate verifier result
- decision state
- notes

## Decision States

- blocked
- needs_revision
- ready_for_manual_lab_apply_attempt

## Rule

TAPFORGE may record candidate readiness.

TAPFORGE must not claim SQL was applied unless an actual future apply step runs and produces evidence.
