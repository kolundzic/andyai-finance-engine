#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — SQL Apply Candidate Gate Verification"

required_files=(
  "docs/supabase-lab/SUPABASE_LAB_SQL_APPLY_CANDIDATE_GATE_v9.6.0.md"
  "docs/supabase-lab/SQL_APPLY_CANDIDATE_CHECKLIST_v9.6.0.md"
  "docs/tapforge/TAPFORGE_SQL_APPLY_CANDIDATE_DECISION_TEMPLATE_v9.6.0.md"
  "tapforge-packs/andyai-finance-engine/sql-apply-candidate-gate.v9.6.0.json"
  "tapforge-packs/andyai-finance-engine/dry-run-plan.v9.5.0.json"
  "tapforge-packs/andyai-finance-engine/migration-review-pack.v9.4.0.json"
  "supabase/dry-run-preview/finance-engine-lab-preview-v9.5.0.sql"
  "scripts/verify-supabase-lab-dry-run-plan.sh"
  "scripts/verify-supabase-migration-review-pack.sh"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/sql-apply-candidate-gate.v9.6.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -E "migration_apply_allowed\": true|production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/sql-apply-candidate-gate.v9.6.0.json >/dev/null 2>&1; then
  echo "🔴 Candidate gate allows apply. Stop."
  exit 1
fi

if ! grep -q "candidate_for_lab_apply_review" tapforge-packs/andyai-finance-engine/sql-apply-candidate-gate.v9.6.0.json; then
  echo "🔴 Candidate decision state missing"
  exit 1
fi

echo "🟢 JSON candidate gate valid"
echo "🟢 .env.local is not tracked"
echo "🟢 migration apply remains blocked"
echo "🟢 production apply remains blocked"
echo "🟢 SQL apply candidate gate verification complete"
