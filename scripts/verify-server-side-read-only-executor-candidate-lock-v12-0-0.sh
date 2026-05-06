#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v12.0.0 Executor Candidate Lock Verification"

required_files=(
  "docs/runtime/SERVER_SIDE_READ_ONLY_EXECUTOR_CANDIDATE_LOCK_v12.0.0.md"
  "tapforge-packs/andyai-finance-engine/server-side-read-only-executor-candidate-lock.v12.0.0.json"
  "docs/tapforge/TAPFORGE_EXECUTOR_CANDIDATE_LOCK_RECORD_v12.0.0.md"
  "docs/runtime/V12_READINESS_CHECKLIST_v11.9.0.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/server-side-read-only-executor-candidate-lock.v12.0.0.json','utf8'))"

for field in execution_allowed database_connection_allowed mutation_allowed production_runtime_allowed billing_activated checkout_activated webhooks_activated paid_runtime_activated; do
  grep -q "\"$field\": false" tapforge-packs/andyai-finance-engine/server-side-read-only-executor-candidate-lock.v12.0.0.json || { echo "🔴 Field not false: $field"; exit 1; }
  echo "🟢 Field false: $field"
done

./scripts/verify-executor-candidate-safety-v11-8-0.sh

echo "🟢 v12.0.0 candidate lock valid"
