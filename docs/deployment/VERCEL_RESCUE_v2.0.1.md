# Vercel Rescue v2.0.1

## Problem

Vercel detected the repository as a Python project because `pyproject.toml` exists in the root.
The deployment failed because no Python web entrypoint was present.

## Fix

Add a minimal Next.js public showcase layer in the repository root:

- `package.json`
- `next.config.mjs`
- `vercel.json`
- `app/layout.tsx`
- `app/page.tsx`
- `app/globals.css`

This makes Vercel build the project as a Next.js web application while preserving the Python finance engine as the working core.

## Canon

The web layer is the public face.
The Python layer is the engine core.
The human approval gate remains the truth layer.
