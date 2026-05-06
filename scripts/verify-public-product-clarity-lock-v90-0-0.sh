#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v90.0.0 Public Product Clarity Lock Verification"

required_files=(
  "src/ui/public-product-shell.tsx"
  "app/page.tsx"
  "app/proof/page.tsx"
  "app/pilot/page.tsx"
  "app/pricing/page.tsx"
  "app/trust/page.tsx"
  "app/demo/page.tsx"
  "app/architecture/page.tsx"
  "docs/product/PUBLIC_PRODUCT_CLARITY_LOCK_v90.0.0.md"
  "tapforge-packs/andyai-finance-engine/public-product-clarity-lock.v90.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "90.0.0"' package.json || { echo "🔴 package version not 90.0.0"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/public-product-clarity-lock.v90.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
grep -q 'Home → Proof → Pilot' docs/product/PUBLIC_PRODUCT_CLARITY_LOCK_v90.0.0.md || { echo "🔴 client path missing"; exit 1; }
grep -q 'Trust signal' src/ui/public-product-shell.tsx || { echo "🔴 Trust Signal component missing"; exit 1; }

echo "🟢 v90.0.0 public product clarity lock valid"
