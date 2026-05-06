#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v13.0.0 Finance Engine Online Proof Lock Verification"

required_files=(
  "docs/runtime/FINANCE_ENGINE_ONLINE_PROOF_LOCK_v13.0.0.md"
  "tapforge-packs/andyai-finance-engine/online-proof-lock.v13.0.0.json"
  "docs/tapforge/TAPFORGE_ONLINE_PROOF_LOCK_RECORD_v13.0.0.md"
  "docs/runtime/V13_READINESS_CHECKLIST_v12.9.0.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

[[ -s "tapforge-packs/andyai-finance-engine/online-proof-lock.v13.0.0.json" ]] || { echo "🔴 JSON file empty or missing: tapforge-packs/andyai-finance-engine/online-proof-lock.v13.0.0.json"; exit 1; }

for field in database_writes_allowed db_url_exposure_allowed service_role_exposure_allowed billing_allowed checkout_allowed webhooks_allowed paid_runtime_allowed; do
  grep -q "\"$field\": false" tapforge-packs/andyai-finance-engine/online-proof-lock.v13.0.0.json || { echo "🔴 Field not false: $field"; exit 1; }
  echo "🟢 Field false: $field"
done

./scripts/verify-v13-readiness-checklist-v12-9-0.sh

echo "🟢 v13.0.0 online proof lock valid"
