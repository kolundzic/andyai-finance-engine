#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v12.6.0 Public Route Map Verification"

required_files=(
  "docs/product/PUBLIC_ROUTE_MAP_AND_COPY_SEAL_v12.6.0.md"
  "configs/runtime/public-route-map.v12.6.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

[[ -s "configs/runtime/public-route-map.v12.6.0.json" ]] || { echo "🔴 JSON file empty or missing: configs/runtime/public-route-map.v12.6.0.json"; exit 1; }

grep -q "/finance-proof" docs/product/PUBLIC_ROUTE_MAP_AND_COPY_SEAL_v12.6.0.md || { echo "🔴 finance proof route missing"; exit 1; }
grep -q "/api/finance/read-only/status" docs/product/PUBLIC_ROUTE_MAP_AND_COPY_SEAL_v12.6.0.md || { echo "🔴 status route missing"; exit 1; }

echo "🟢 public route map valid"
