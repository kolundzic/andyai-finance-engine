#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — v10 First SQL Apply Evidence Verification"

required_files=(
  "docs/supabase-lab/FIRST_SQL_APPLY_EVIDENCE_v10.0.0.md"
  "docs/tapforge/TAPFORGE_FIRST_SQL_APPLY_RECORD_v10.0.0.md"
  "tapforge-packs/andyai-finance-engine/first-sql-apply.v10.0.0.json"
  "supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/first-sql-apply.v10.0.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -q "production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/first-sql-apply.v10.0.0.json; then
  echo "🔴 v10 evidence allows production apply"
  exit 1
fi

if ! grep -q "verified_table_count\": 10" tapforge-packs/andyai-finance-engine/first-sql-apply.v10.0.0.json; then
  echo "🔴 verified table count missing"
  exit 1
fi

echo "🟢 v10 first SQL apply evidence valid"
echo "🟢 .env.local is not tracked"
echo "🟢 production remains blocked"
