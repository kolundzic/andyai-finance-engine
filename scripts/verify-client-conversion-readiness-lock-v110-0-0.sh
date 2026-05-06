#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v110.0.0 Client Conversion Readiness Lock Verification"
required_files=("app/pilot/page.tsx" "app/page.tsx" "app/approval-flow/page.tsx" "app/before-after/page.tsx" "app/use-cases/startup-runway/page.tsx" "app/use-cases/investor-update/page.tsx" "app/pilot-proof/page.tsx" "src/ui/finance-pilot-cta.tsx" "docs/product/CLIENT_CONVERSION_READINESS_LOCK_v110.0.0.md" "tapforge-packs/andyai-finance-engine/client-conversion-readiness-lock.v110.0.0.json")
for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done
/usr/bin/grep -q '"version": "110.0.0"' package.json || { echo "🔴 package version not 110.0.0"; exit 1; }
/usr/bin/grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/client-conversion-readiness-lock.v110.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
/usr/bin/grep -q 'Request a pilot run' docs/product/CLIENT_CONVERSION_READINESS_LOCK_v110.0.0.md || { echo "🔴 CTA missing"; exit 1; }
echo "🟢 v110.0.0 client conversion readiness lock valid"
