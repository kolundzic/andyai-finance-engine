#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v120.0.0 Screenshot Mockups & Demo Output Gallery Verification"
required_files=(
  "public/demo/saas-finance-engine-dashboard-overview.png"
  "public/demo/modern-financial-dashboard-ui-design.png"
  "public/demo/sleek-finance-dashboard-with-detailed-metrics.png"
  "public/demo/sleek-finance-model-dashboard-summary.png"
  "public/demo/human-approval-workflow-in-finance-dashboard.png"
  "public/demo/from-chaos-to-clarity-in-finance.png"
  "app/page.tsx"
  "app/value-demo/page.tsx"
  "app/model-preview/page.tsx"
  "app/approval-flow/page.tsx"
  "app/before-after/page.tsx"
  "app/demo-gallery/page.tsx"
  "app/pilot/page.tsx"
  "docs/product/SCREENSHOT_MOCKUPS_DEMO_GALLERY_LOCK_v120.0.0.md"
  "tapforge-packs/andyai-finance-engine/screenshot-mockups-demo-gallery-lock.v120.0.0.json"
)
for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done
grep -q '"version": "120.0.0"' package.json || { echo "🔴 package version not 120.0.0"; exit 1; }
grep -q '/demo-gallery' app/page.tsx || { echo "🔴 gallery link missing from home"; exit 1; }
grep -q 'blocked' docs/product/SCREENSHOT_MOCKUPS_DEMO_GALLERY_LOCK_v120.0.0.md || { echo "🔴 lock language missing"; exit 1; }
echo "🟢 v120.0.0 screenshot mockups & demo gallery valid"
