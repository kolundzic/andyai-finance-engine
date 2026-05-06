#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Namespace Decision Lock Verification"

required_files=(
  "docs/supabase-lab/SUPABASE_LAB_NAMESPACE_DECISION_LOCK_v9.7.0.md"
  "docs/supabase-lab/PREFIX_NAMING_MAP_v9.7.0.md"
  "docs/tapforge/TAPFORGE_NAMESPACE_DECISION_RECORD_v9.7.0.md"
  "tapforge-packs/andyai-finance-engine/namespace-decision-lock.v9.7.0.json"
  "supabase/lab-namespace/README.md"
  "tapforge-packs/andyai-finance-engine/sql-apply-candidate-gate.v9.6.0.json"
  "tapforge-packs/andyai-finance-engine/dry-run-plan.v9.5.0.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/namespace-decision-lock.v9.7.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -E "migration_apply_allowed\": true|production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/namespace-decision-lock.v9.7.0.json >/dev/null 2>&1; then
  echo "🔴 Namespace lock allows apply. Stop."
  exit 1
fi

for prefix in "fe_" "tf_" "audit_" "human_attention_"; do
  if ! grep -q "$prefix" tapforge-packs/andyai-finance-engine/namespace-decision-lock.v9.7.0.json; then
    echo "🔴 Missing locked prefix: $prefix"
    exit 1
  fi
  echo "🟢 Locked prefix present: $prefix"
done

echo "🟢 JSON namespace decision lock valid"
echo "🟢 .env.local is not tracked"
echo "🟢 migration apply remains blocked"
echo "🟢 production apply remains blocked"
echo "🟢 namespace decision lock verification complete"
