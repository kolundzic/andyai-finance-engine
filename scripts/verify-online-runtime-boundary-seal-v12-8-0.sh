#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v12.8.0 Online Runtime Boundary Seal Verification"

required_files=(
  "docs/runtime/ONLINE_RUNTIME_BOUNDARY_SEAL_v12.8.0.md"
  "configs/runtime/online-runtime-boundary-seal.v12.8.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

[[ -s "configs/runtime/online-runtime-boundary-seal.v12.8.0.json" ]] || { echo "🔴 JSON file empty or missing: configs/runtime/online-runtime-boundary-seal.v12.8.0.json"; exit 1; }

for field in database_writes_allowed db_url_exposure_allowed service_role_exposure_allowed billing_allowed checkout_allowed webhooks_allowed paid_runtime_allowed; do
  grep -q "\"$field\": false" configs/runtime/online-runtime-boundary-seal.v12.8.0.json || { echo "🔴 Field not false: $field"; exit 1; }
  echo "🟢 Field false: $field"
done

echo "🟢 v12.8.0 boundary seal valid"
