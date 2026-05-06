#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v80.0.0 Runtime Gate Readiness Lock Verification"

required_files=(
  "docs/product/RUNTIME_GATE_READINESS_LOCK_v80.0.0.md"
  "tapforge-packs/andyai-finance-engine/runtime-gate-readiness-lock.v80.0.0.json"
  "app/runtime-readiness/page.tsx"
  "app/runtime-gate/page.tsx"
  "app/draft-payload/page.tsx"
  "app/approval-queue/page.tsx"
  "app/jp-market/page.tsx"
  "app/investor-proof-room/page.tsx"
  "app/enterprise-governance/page.tsx"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "80.0.0"' package.json || { echo "🔴 package version not 80.0.0"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/runtime-gate-readiness-lock.v80.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
grep -q '"payment_enabled": false' tapforge-packs/andyai-finance-engine/runtime-gate-readiness-lock.v80.0.0.json || { echo "🔴 payment boundary wrong"; exit 1; }

echo "🟢 v80.0.0 runtime gate readiness lock valid"
