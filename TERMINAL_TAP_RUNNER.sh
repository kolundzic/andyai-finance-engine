#!/usr/bin/env bash
set -euo pipefail

GREEN="🟢"; YELLOW="🟡"; RED="🔴"; BLUE="🔵"
ZIP="$HOME/Downloads/andyai-finance-engine-bootstrap-v0.1.0-fresh.zip"
WORK="$HOME/Downloads/andyai-finance-engine-bootstrap-v0.1.0-fresh-run"

fail(){ echo "$RED TERMINAL TAP FAILED: $1"; exit 1; }
info(){ echo "$BLUE $1"; }
ok(){ echo "$GREEN $1"; }
warn(){ echo "$YELLOW $1"; }

info "Starting AndyAI Finance Engine Terminal TAP..."
[[ -f "$ZIP" ]] || fail "ZIP not found: $ZIP"
rm -rf "$WORK"
mkdir -p "$WORK"
unzip -q "$ZIP" -d "$WORK"
cd "$WORK/andyai-finance-engine-bootstrap" || fail "Bootstrap folder not found inside ZIP."
chmod +x APPLY_andyai_finance_engine_v0_1_0.sh
./APPLY_andyai_finance_engine_v0_1_0.sh
cd "$HOME/Documents/Projects/andyai-finance-engine"

if [[ -x ./scripts/bootstrap-github-repo.sh ]]; then
  ./scripts/bootstrap-github-repo.sh || warn "GitHub bootstrap did not complete; local repo remains ready."
fi

ok "TAP-TAP complete."
