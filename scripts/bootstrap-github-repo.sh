#!/usr/bin/env bash
set -euo pipefail

GREEN="🟢"; YELLOW="🟡"; RED="🔴"; BLUE="🔵"
REPO_NAME="andyai-finance-engine"
REMOTE_URL="https://github.com/kolundzic/andyai-finance-engine.git"
GH_REPO="kolundzic/andyai-finance-engine"

fail(){ echo "$RED GITHUB BOOTSTRAP FAILED: $1"; exit 1; }
info(){ echo "$BLUE $1"; }
ok(){ echo "$GREEN $1"; }
warn(){ echo "$YELLOW $1"; }

[[ "$(basename "$PWD")" == "$REPO_NAME" ]] || fail "Run this from repo folder named $REPO_NAME. Current: $PWD"
[[ -d .git ]] || fail "Git repo not initialized. Run APPLY script first."

info "Checking GitHub CLI..."
if ! command -v gh >/dev/null 2>&1; then
  warn "gh CLI not found. Skipping GitHub repo creation/push. Local repo is ready."
  exit 0
fi

if ! gh auth status >/dev/null 2>&1; then
  warn "gh is not authenticated. Run: gh auth login"
  exit 0
fi

if gh repo view "$GH_REPO" >/dev/null 2>&1; then
  ok "GitHub repo exists: $GH_REPO"
else
  info "Creating GitHub repo: $GH_REPO"
  gh repo create "$GH_REPO" --public --source=. --remote=origin --description "AndyAI Financial Modeling Engine — governed AI-assisted finance workflows" || fail "Could not create repo"
fi

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REMOTE_URL"
else
  git remote add origin "$REMOTE_URL"
fi

info "Pushing main and tag v0.1.0..."
git push -u origin main
git push origin v0.1.0

if gh repo edit "$GH_REPO" --add-topic andyai --add-topic finance-engine --add-topic financial-modeling --add-topic tapforge --add-topic human-approval >/dev/null 2>&1; then
  ok "Topics applied."
else
  warn "Could not apply topics; continuing."
fi

ok "GitHub bootstrap complete."
