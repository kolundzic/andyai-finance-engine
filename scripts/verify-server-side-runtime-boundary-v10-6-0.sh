#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.6.0 Server-Side Runtime Boundary Verification"

required_files=(
  "docs/runtime/SERVER_SIDE_RUNTIME_BOUNDARY_v10.6.0.md"
  "configs/runtime/server-side-runtime-boundary.v10.6.0.json"
  "docs/tapforge/TAPFORGE_SERVER_SIDE_RUNTIME_BOUNDARY_RECORD_v10.6.0.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/server-side-runtime-boundary.v10.6.0.json','utf8'))"

for field in browser_service_role_allowed browser_db_url_allowed mutation_allowed production_runtime_allowed billing_allowed checkout_allowed webhooks_allowed; do
  if ! grep -q "\"$field\": false" configs/runtime/server-side-runtime-boundary.v10.6.0.json; then
    echo "🔴 Boundary field not false: $field"
    exit 1
  fi
  echo "🟢 Boundary field false: $field"
done

echo "🟢 v10.6.0 server-side boundary valid"
