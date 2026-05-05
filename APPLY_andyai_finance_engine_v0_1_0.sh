#!/usr/bin/env bash
set -euo pipefail

GREEN="🟢"; YELLOW="🟡"; RED="🔴"; BLUE="🔵"
REPO_NAME="andyai-finance-engine"
VERSION="v0.1.0"
TARGET_ROOT="$HOME/Documents/Projects"
TARGET_DIR="$TARGET_ROOT/$REPO_NAME"
SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

fail(){ echo "$RED APPLY FAILED: $1"; exit 1; }
info(){ echo "$BLUE $1"; }
ok(){ echo "$GREEN $1"; }
warn(){ echo "$YELLOW $1"; }

info "AndyAI Finance Engine Bootstrap — $VERSION"
info "Source: $SOURCE_DIR"
info "Target: $TARGET_DIR"

[[ -f "$SOURCE_DIR/PROJECT_CANON.md" ]] || fail "PROJECT_CANON.md missing in source."
[[ -f "$SOURCE_DIR/VERIFY.sh" ]] || fail "VERIFY.sh missing in source."
mkdir -p "$TARGET_ROOT"

if [[ -d "$TARGET_DIR" ]]; then
  BACKUP="$TARGET_DIR.backup.$(date +%Y%m%d-%H%M%S)"
  warn "Existing target folder found. Moving it to: $BACKUP"
  mv "$TARGET_DIR" "$BACKUP"
fi

mkdir -p "$TARGET_DIR"
info "Copying scaffold..."
rsync -a --exclude='.git' "$SOURCE_DIR/" "$TARGET_DIR/"
cd "$TARGET_DIR"
chmod +x VERIFY.sh scripts/bootstrap-github-repo.sh

info "Running verifier..."
./VERIFY.sh

if [[ ! -d .git ]]; then
  info "Initializing git repo..."
  git init -b main >/dev/null 2>&1 || { git init >/dev/null; git checkout -b main >/dev/null 2>&1 || true; }
fi

git config user.name "Andrija Kolundzic" >/dev/null 2>&1 || true
git config user.email "kolundzic@gmail.com" >/dev/null 2>&1 || true

git add .
if git diff --cached --quiet; then
  warn "No changes to commit."
else
  git commit -m "Bootstrap andyai-finance-engine v0.1.0" >/dev/null
  ok "Committed bootstrap."
fi

if git rev-parse "$VERSION" >/dev/null 2>&1; then
  warn "Tag $VERSION already exists locally."
else
  git tag -a "$VERSION" -m "andyai-finance-engine $VERSION"
  ok "Created tag $VERSION."
fi

ok "APPLY complete."
echo ""
echo "$GREEN Local repo ready: $TARGET_DIR"
echo "$BLUE Next optional step: cd '$TARGET_DIR' && ./scripts/bootstrap-github-repo.sh"
