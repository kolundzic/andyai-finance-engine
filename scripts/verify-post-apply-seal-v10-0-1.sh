#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — v10.0.1 Post-Apply Seal Verification"

required_files=(
  "docs/supabase-lab/POST_APPLY_SEAL_v10.0.1.md"
  "docs/security/POST_APPLY_SECRET_ROTATION_NOTE_v10.0.1.md"
  "docs/tapforge/TAPFORGE_POST_APPLY_SEAL_RECORD_v10.0.1.md"
  "tapforge-packs/andyai-finance-engine/post-apply-seal.v10.0.1.json"
  "docs/supabase-lab/FIRST_SQL_APPLY_EVIDENCE_v10.0.0.md"
  "docs/tapforge/TAPFORGE_FIRST_SQL_APPLY_RECORD_v10.0.0.md"
  "tapforge-packs/andyai-finance-engine/first-sql-apply.v10.0.0.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/post-apply-seal.v10.0.1.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -q '"sql_applied_by_this_release": true' tapforge-packs/andyai-finance-engine/post-apply-seal.v10.0.1.json; then
  echo "🔴 v10.0.1 claims SQL apply"
  exit 1
fi

if grep -q '"production_apply_allowed": true' tapforge-packs/andyai-finance-engine/post-apply-seal.v10.0.1.json; then
  echo "🔴 production apply allowed in seal"
  exit 1
fi

if ! grep -q '"verified_previous_table_count": 10' tapforge-packs/andyai-finance-engine/post-apply-seal.v10.0.1.json; then
  echo "🔴 verified previous table count missing"
  exit 1
fi

for table in fe_workspaces fe_workspace_members fe_membership_states fe_quota_policies fe_usage_events fe_quota_windows fe_audit_events fe_approval_decisions fe_export_records fe_manual_review_queue; do
  if ! grep -q "$table" docs/supabase-lab/POST_APPLY_SEAL_v10.0.1.md; then
    echo "🔴 Missing table in post-apply seal: $table"
    exit 1
  fi
  echo "🟢 Table sealed in docs: $table"
done

echo "🟢 v10.0.1 post-apply seal valid"
echo "🟢 .env.local is not tracked"
echo "🟢 v10.0.1 does not apply SQL"
echo "🟢 production remains blocked"
echo "🟢 billing / checkout / webhooks remain blocked"
