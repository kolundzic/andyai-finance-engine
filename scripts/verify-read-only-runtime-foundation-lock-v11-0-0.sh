#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v11.0.0 Read-Only Runtime Foundation Lock Verification"

required_files=(
  "docs/runtime/READ_ONLY_RUNTIME_FOUNDATION_LOCK_v11.0.0.md"
  "tapforge-packs/andyai-finance-engine/read-only-runtime-foundation-lock.v11.0.0.json"
  "docs/tapforge/TAPFORGE_READ_ONLY_RUNTIME_FOUNDATION_LOCK_RECORD_v11.0.0.md"
  "docs/runtime/RUNTIME_TOC_v10.3_to_v11.0.md"
  "docs/runtime/RUNTIME_SAFETY_TEST_MATRIX_v10.9.0.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/read-only-runtime-foundation-lock.v11.0.0.json','utf8'))"

if grep -q '"mutation_allowed": true' tapforge-packs/andyai-finance-engine/read-only-runtime-foundation-lock.v11.0.0.json; then
  echo "🔴 mutation allowed in v11 lock"
  exit 1
fi

if grep -q '"connects_to_database": true' tapforge-packs/andyai-finance-engine/read-only-runtime-foundation-lock.v11.0.0.json; then
  echo "🔴 v11 lock claims database connection"
  exit 1
fi

./scripts/verify-runtime-safety-matrix-v10-9-0.sh

echo "🟢 v11.0.0 read-only runtime foundation lock valid"
