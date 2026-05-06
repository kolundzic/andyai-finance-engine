# RLS Review Checklist v9.4.0

## Purpose

This checklist must be completed before any RLS draft is applied.

## Core Questions

- Can a user read only allowed workspace records?
- Can a viewer write anything?
- Can an operator approve financial output?
- Can a reviewer approve without owning the workspace?
- Can an admin change members without erasing audit evidence?
- Can an owner manage workspace settings?
- Are audit events protected from silent deletion?
- Are manual review records visible to authorized reviewers?
- Are export records tied to approval state?
- Does paid status bypass review? It must not.

## Shared Lab Questions

Because `andyai-human-attention` may be used as shared lab:

- Are existing Human Attention tables untouched?
- Are Finance Engine tables namespaced or prefixed?
- Are TAPFORGE tables namespaced or prefixed?
- Is shared audit separated?
- Can we delete Finance Engine lab tables later without touching Human Attention?

## Required Result

RLS review result must be one of:

- approved_for_lab_dry_run
- needs_revision
- blocked

## Production Rule

Production apply is blocked.
