#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Lab-Only Apply Candidate Verification"

CANDIDATE="supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql"

required_files=(
  "docs/supabase-lab/LAB_ONLY_APPLY_SCRIPT_CANDIDATE_v9.9.0.md"
  "docs/supabase-lab/LAB_ONLY_APPLY_OPERATOR_CONFIRMATION_v9.9.0.md"
  "docs/tapforge/TAPFORGE_LAB_ONLY_APPLY_CANDIDATE_RECORD_v9.9.0.md"
  "tapforge-packs/andyai-finance-engine/lab-only-apply-candidate.v9.9.0.json"
  "scripts/prepare-lab-only-apply-candidate.sh"
  "scripts/apply-supabase-lab-prefixed-sql-candidate.sh"
  "$CANDIDATE"
  "supabase/dry-run-preview/finance-engine-lab-prefixed-preview-v9.8.0.sql"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/lab-only-apply-candidate.v9.9.0.json','utf8'))"

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
  if ! grep -q "public.${name}" "$CANDIDATE"; then
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
  if grep -q "$pattern" "$CANDIDATE"; then
    echo "🔴 Unprefixed table reference found: $pattern"
    exit 1
  fi
done

if grep -q "human_attention" "$CANDIDATE"; then
  echo "🔴 Human Attention reference found in apply candidate"
  exit 1
fi

if ! grep -q "BEGIN;" "$CANDIDATE"; then
  echo "🔴 Candidate SQL missing BEGIN"
  exit 1
fi

if ! grep -q "COMMIT;" "$CANDIDATE"; then
  echo "🔴 Candidate SQL missing COMMIT"
  exit 1
fi

if grep -q "ROLLBACK;" "$CANDIDATE"; then
  echo "🔴 Candidate SQL still contains ROLLBACK"
  exit 1
fi

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if ! grep -q "ANDYAI_ALLOW_LAB_SQL_APPLY" scripts/apply-supabase-lab-prefixed-sql-candidate.sh; then
  echo "🔴 Apply candidate script missing explicit allow gate"
  exit 1
fi

if ! grep -q "APPLY ANDYAI FINANCE ENGINE LAB SQL" scripts/apply-supabase-lab-prefixed-sql-candidate.sh; then
  echo "🔴 Apply candidate script missing confirmation phrase"
  exit 1
fi

echo "🟢 JSON apply candidate manifest valid"
echo "🟢 no unprefixed Finance Engine table references found"
echo "🟢 Human Attention boundary clean"
echo "🟢 candidate SQL has transaction wrapper"
echo "🟢 candidate apply script has explicit allow gate"
echo "🟢 candidate apply script has confirmation phrase"
echo "🟢 .env.local is not tracked"
echo "🟢 lab-only apply candidate verification complete"
