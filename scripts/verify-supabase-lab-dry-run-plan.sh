#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Supabase Lab Dry-Run Plan Verification"

required_files=(
  "docs/supabase-lab/SUPABASE_LAB_DRY_RUN_MIGRATION_PLAN_v9.5.0.md"
  "docs/supabase-lab/SUPABASE_LAB_DRY_RUN_CHECKLIST_v9.5.0.md"
  "docs/tapforge/TAPFORGE_DRY_RUN_EVIDENCE_TEMPLATE_v9.5.0.md"
  "tapforge-packs/andyai-finance-engine/dry-run-plan.v9.5.0.json"
  "scripts/prepare-supabase-lab-dry-run-preview.sh"
  "supabase/dry-run-preview/finance-engine-lab-preview-v9.5.0.sql"
  "docs/supabase/sql-drafts/v5.3.0_membership_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.4.0_usage_quota_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.5.0_audit_approval_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.6.0_rls_policy_draft.sql"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/dry-run-plan.v9.5.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -E "migration_apply_allowed\": true|production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/dry-run-plan.v9.5.0.json >/dev/null 2>&1; then
  echo "🔴 Dry-run plan allows apply. Stop."
  exit 1
fi

echo "🟢 JSON dry-run plan valid"
echo "🟢 .env.local is not tracked"
echo "🟢 migration apply remains blocked"
echo "🟢 Supabase lab dry-run plan verification complete"
