#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v100.0.0 Product Value Proof Lock Verification"

required_files=(
  "app/page.tsx"
  "app/value-demo/page.tsx"
  "app/sample-input/page.tsx"
  "app/model-preview/page.tsx"
  "app/assumptions/page.tsx"
  "app/evidence-pack/page.tsx"
  "app/approval-flow/page.tsx"
  "app/output-pack/page.tsx"
  "app/use-cases/page.tsx"
  "app/before-after/page.tsx"
  "app/client-story/page.tsx"
  "docs/product/PRODUCT_VALUE_PROOF_LOCK_v100.0.0.md"
  "tapforge-packs/andyai-finance-engine/product-value-proof-lock.v100.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

/usr/bin/grep -q '"version": "100.0.0"' package.json || { echo "🔴 package version not 100.0.0"; exit 1; }
/usr/bin/grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/product-value-proof-lock.v100.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
/usr/bin/grep -q 'sample input' docs/product/PRODUCT_VALUE_PROOF_LOCK_v100.0.0.md || { echo "🔴 value flow missing"; exit 1; }

echo "🟢 v100.0.0 product value proof lock valid"
