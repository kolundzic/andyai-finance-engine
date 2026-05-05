#!/usr/bin/env bash
set -euo pipefail

GREEN="🟢"; YELLOW="🟡"; RED="🔴"; BLUE="🔵"
fail(){ echo "$RED VERIFY FAILED: $1"; exit 1; }
info(){ echo "$BLUE $1"; }
ok(){ echo "$GREEN $1"; }
warn(){ echo "$YELLOW $1"; }

info "Running andyai-finance-engine verification..."

required=(README.md PROJECT_CANON.md META.md ARCHITECTURE.md WORKFLOW.md GOVERNANCE.md docs/ROADMAP.md schemas/business_input.schema.json examples/example_business_input.json scripts/bootstrap-github-repo.sh)
for f in "${required[@]}"; do
  [[ -f "$f" ]] || fail "Missing required file: $f"
  ok "Found $f"
done

if command -v python3 >/dev/null 2>&1; then
  python3 - <<'PY'
import json
from pathlib import Path
for p in [Path('schemas/business_input.schema.json'), Path('examples/example_business_input.json')]:
    json.loads(p.read_text())
print('🟢 JSON files are valid')
PY
else
  warn "python3 not found; skipped JSON validation"
fi

ok "VERIFY complete — scaffold is healthy."
