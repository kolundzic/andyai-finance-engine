#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Prefixed SQL Preview Verification"

PREVIEW="supabase/dry-run-preview/finance-engine-lab-prefixed-preview-v9.8.0.sql"

required_files=(
  "docs/supabase-lab/PREFIXED_SQL_PREVIEW_BUNDLE_v9.8.0.md"
  "docs/supabase-lab/PREFIXED_SQL_PREVIEW_REVIEW_CHECKLIST_v9.8.0.md"
  "docs/tapforge/TAPFORGE_PREFIXED_SQL_PREVIEW_RECORD_v9.8.0.md"
  "tapforge-packs/andyai-finance-engine/prefixed-sql-preview.v9.8.0.json"
  "scripts/prepare-prefixed-supabase-lab-preview.sh"
  "$PREVIEW"
  "tapforge-packs/andyai-finance-engine/namespace-decision-lock.v9.7.0.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/prefixed-sql-preview.v9.8.0.json','utf8'))"

required_names=(
  "fe_workspaces"
  "fe_workspace_members"
  "fe_membership_states"
  "fe_quota_policies"
  "fe_usage_events"
  "fe_quota_windows"
  "fe_audit_events"
  "fe_approval_decisions"
  "fe_export_records"
  "fe_manual_review_queue"
)

for name in "${required_names[@]}"; do
  if ! grep -q "public.${name}" "$PREVIEW"; then
    echo "🔴 Missing prefixed table reference: public.${name}"
    exit 1
  fi
  echo "🟢 Prefixed table reference present: public.${name}"
done

blocked_patterns=(
  "public.workspaces"
  "public.workspace_members"
  "public.membership_states"
  "public.quota_policies"
  "public.usage_events"
  "public.quota_windows"
  "public.audit_events"
  "public.approval_decisions"
  "public.export_records"
  "public.manual_review_queue"
)

for pattern in "${blocked_patterns[@]}"; do
  if grep -q "$pattern" "$PREVIEW"; then
    echo "🔴 Unprefixed table reference found: $pattern"
    exit 1
  fi
done

if grep -q "human_attention" "$PREVIEW"; then
  echo "🔴 Human Attention reference found in Finance Engine preview"
  exit 1
fi

if ! grep -q "ROLLBACK;" "$PREVIEW"; then
  echo "🔴 Preview does not include ROLLBACK"
  exit 1
fi

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -E "migration_apply_allowed\": true|production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/prefixed-sql-preview.v9.8.0.json >/dev/null 2>&1; then
  echo "🔴 Prefixed preview manifest allows apply. Stop."
  exit 1
fi

echo "🟢 JSON prefixed preview manifest valid"
echo "🟢 no unprefixed Finance Engine table references found"
echo "🟢 Human Attention boundary clean"
echo "🟢 preview includes ROLLBACK"
echo "🟢 migration apply remains blocked"
echo "🟢 production apply remains blocked"
echo "🟢 prefixed SQL preview verification complete"
