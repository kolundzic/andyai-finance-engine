#!/usr/bin/env zsh
set -euo pipefail

echo "🟢 AndyAI Finance Engine — Supabase Monetization Foundation Verification"

required_files=(
  "docs/supabase/SUPABASE_MONETIZATION_SETUP_READINESS_v5.2.0.md"
  "docs/supabase/MEMBERSHIP_TABLES_DRAFT_v5.3.0.md"
  "docs/supabase/USAGE_QUOTA_TABLES_DRAFT_v5.4.0.md"
  "docs/supabase/AUDIT_APPROVAL_TABLES_DRAFT_v5.5.0.md"
  "docs/supabase/RLS_POLICY_DRAFT_v5.6.0.md"
  "docs/supabase/SUPABASE_ENV_SETUP_GUIDE_v5.7.0.md"
  "docs/supabase/sql-drafts/v5.3.0_membership_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.4.0_usage_quota_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.5.0_audit_approval_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.6.0_rls_policy_draft.sql"
  ".env.example"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local appears to be tracked. Stop."
  exit 1
fi

echo "🟢 No tracked .env.local detected"
echo "🟢 Verification complete"
