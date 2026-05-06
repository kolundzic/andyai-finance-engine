#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v12.1.0 Status Route Candidate Verification"

required_files=(
  "docs/runtime/V12_TO_V13_ONLINE_PROOF_TOC_v12.1.0.md"
  "docs/runtime/SERVER_SIDE_READ_ONLY_STATUS_ROUTE_CANDIDATE_v12.1.0.md"
  "configs/runtime/status-route-candidate.v12.1.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/status-route-candidate.v12.1.0.json','utf8'))"

grep -q '"mutation_allowed": false' configs/runtime/status-route-candidate.v12.1.0.json || { echo "🔴 mutation flag wrong"; exit 1; }

echo "🟢 v12.1.0 status route candidate valid"
