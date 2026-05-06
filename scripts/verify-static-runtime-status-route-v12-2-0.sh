#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v12.2.0 Static Runtime Status Route Verification"

required_files=(
  "src/runtime/finance-online-proof-status.ts"
  "app/api/finance/read-only/status/route.ts"
  "app/not-found.tsx"
  "pages/404.tsx"
  "docs/runtime/STATIC_RUNTIME_STATUS_API_ROUTE_v12.2.0.md"
  "configs/runtime/static-runtime-status-api-route.v12.2.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/static-runtime-status-api-route.v12.2.0.json','utf8'))"

grep -q "GET" app/api/finance/read-only/status/route.ts || { echo "🔴 GET missing"; exit 1; }

pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret|createClient"
if grep -R -E "$pattern" app/api/finance/read-only/status src/runtime/finance-online-proof-status.ts app/not-found.tsx pages/404.tsx >/dev/null 2>&1; then
  echo "🔴 forbidden pattern in status route or build anchors"
  grep -R -n -E "$pattern" app/api/finance/read-only/status src/runtime/finance-online-proof-status.ts app/not-found.tsx pages/404.tsx || true
  exit 1
fi

echo "🟢 v12.2.0 static status route valid"
