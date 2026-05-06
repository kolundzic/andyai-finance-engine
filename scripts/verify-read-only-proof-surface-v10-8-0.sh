#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.8.0 Read-Only Proof Surface Verification"

required_files=(
  "docs/product/READ_ONLY_PROOF_SURFACE_BLUEPRINT_v10.8.0.md"
  "configs/runtime/read-only-proof-surface.v10.8.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/read-only-proof-surface.v10.8.0.json','utf8'))"

for field in ui_execution_allowed secret_display_allowed mutation_allowed production_runtime_allowed billing_allowed checkout_allowed webhooks_allowed; do
  grep -q "\"$field\": false" configs/runtime/read-only-proof-surface.v10.8.0.json || { echo "🔴 Field not false: $field"; exit 1; }
  echo "🟢 Field false: $field"
done

echo "🟢 v10.8.0 proof surface blueprint valid"
