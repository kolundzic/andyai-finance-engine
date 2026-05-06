#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v12.3.0 Finance Proof Page Verification"

required_files=(
  "app/finance-proof/page.tsx"
  "docs/product/FINANCE_PROOF_PAGE_SKELETON_v12.3.0.md"
  "configs/runtime/finance-proof-page.v12.3.0.json"
  "src/runtime/finance-online-proof-status.ts"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/finance-proof-page.v12.3.0.json','utf8'))"

pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret|createClient"
if grep -R -E "$pattern" app/finance-proof >/dev/null 2>&1; then
  echo "🔴 forbidden pattern in finance proof page"
  grep -R -n -E "$pattern" app/finance-proof || true
  exit 1
fi

grep -q "status.canonicalLine" app/finance-proof/page.tsx || { echo "🔴 page does not render status.canonicalLine"; exit 1; }
grep -q "The system now has eyes" src/runtime/finance-online-proof-status.ts || { echo "🔴 canonical line missing from status model"; exit 1; }

echo "🟢 v12.3.0 finance proof page valid"
