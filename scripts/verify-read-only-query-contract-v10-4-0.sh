#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.4.0 Read-Only Query Contract Verification"

required_files=(
  "src/runtime/supabase-lab-read-only-contracts.ts"
  "docs/runtime/READ_ONLY_QUERY_CONTRACT_LAYER_v10.4.0.md"
  "configs/runtime/read-only-query-contract.v10.4.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/read-only-query-contract.v10.4.0.json','utf8'))"

for blocked in insert update delete upsert truncate drop alter create grant revoke mutation_rpc; do
  grep -q "$blocked" src/runtime/supabase-lab-read-only-contracts.ts || { echo "🔴 Missing blocked operation: $blocked"; exit 1; }
  echo "🟢 Blocked operation present: $blocked"
done

if grep -q '"mutation_allowed": true' configs/runtime/read-only-query-contract.v10.4.0.json; then
  echo "🔴 mutation allowed in contract config"
  exit 1
fi

echo "🟢 v10.4.0 read-only query contract valid"
