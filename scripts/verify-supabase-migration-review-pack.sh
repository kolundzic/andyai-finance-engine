#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Supabase Migration Review Pack Verification"

required_files=(
  "docs/supabase-lab/SUPABASE_LAB_MIGRATION_REVIEW_PACK_v9.4.0.md"
  "docs/supabase-lab/MIGRATION_DRAFT_INVENTORY_v9.4.0.md"
  "docs/supabase-lab/RLS_REVIEW_CHECKLIST_v9.4.0.md"
  "docs/tapforge/TAPFORGE_MIGRATION_REVIEW_REPORT_TEMPLATE_v9.4.0.md"
  "tapforge-packs/andyai-finance-engine/migration-review-pack.v9.4.0.json"
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

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/migration-review-pack.v9.4.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

echo "🟢 JSON review pack valid"
echo "🟢 .env.local is not tracked"
echo "🟢 Migration review pack verification complete"
