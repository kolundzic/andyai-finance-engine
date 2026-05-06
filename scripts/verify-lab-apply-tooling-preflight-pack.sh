#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Lab Apply Tooling Preflight Pack Verification"

required_files=(
  "docs/supabase-lab/LAB_APPLY_TOOLING_PREFLIGHT_v9.9.1.md"
  "docs/supabase-lab/SUPABASE_DB_URL_HANDLING_v9.9.1.md"
  "docs/tapforge/TAPFORGE_TOOLING_PREFLIGHT_RECORD_v9.9.1.md"
  "tapforge-packs/andyai-finance-engine/lab-apply-tooling-preflight.v9.9.1.json"
  "scripts/check-lab-apply-tooling-preflight.sh"
  "scripts/apply-supabase-lab-prefixed-sql-candidate.sh"
  "supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/lab-apply-tooling-preflight.v9.9.1.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -E "apply_executed_by_release_tap\": true|production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/lab-apply-tooling-preflight.v9.9.1.json >/dev/null 2>&1; then
  echo "🔴 Tooling preflight manifest allows unsafe apply state. Stop."
  exit 1
fi

if ! grep -q "SUPABASE_DB_URL" scripts/check-lab-apply-tooling-preflight.sh; then
  echo "🔴 Tooling preflight script does not check SUPABASE_DB_URL"
  exit 1
fi

if ! grep -q "psql" scripts/check-lab-apply-tooling-preflight.sh; then
  echo "🔴 Tooling preflight script does not check psql"
  exit 1
fi

echo "🟢 JSON tooling preflight manifest valid"
echo "🟢 .env.local is not tracked"
echo "🟢 release tap does not execute SQL"
echo "🟢 production apply remains blocked"
echo "🟢 tooling preflight pack verification complete"
