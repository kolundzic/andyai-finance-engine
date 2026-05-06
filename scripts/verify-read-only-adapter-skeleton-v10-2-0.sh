#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — v10.2.0 Read-Only Adapter Skeleton Verification"

required_files=(
  "src/runtime/supabase-lab-read-only-tables.ts"
  "src/runtime/supabase-lab-read-only-adapter.ts"
  "docs/runtime/READ_ONLY_RUNTIME_ADAPTER_SKELETON_v10.2.0.md"
  "docs/runtime/READ_ONLY_ADAPTER_USAGE_NOTE_v10.2.0.md"
  "configs/runtime/read-only-adapter-skeleton.v10.2.0.json"
  "docs/tapforge/TAPFORGE_READ_ONLY_ADAPTER_SKELETON_RECORD_v10.2.0.md"
  "tapforge-packs/andyai-finance-engine/read-only-adapter-skeleton.v10.2.0.json"
  "configs/runtime/read-only-table-allowlist.v10.1.0.json"
  "tapforge-packs/andyai-finance-engine/read-only-runtime-gate.v10.1.0.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/read-only-adapter-skeleton.v10.2.0.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/read-only-adapter-skeleton.v10.2.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -q '"connects_to_database": true' configs/runtime/read-only-adapter-skeleton.v10.2.0.json; then
  echo "🔴 adapter skeleton claims database connection"
  exit 1
fi

if grep -q '"mutation_allowed": true' configs/runtime/read-only-adapter-skeleton.v10.2.0.json; then
  echo "🔴 mutation allowed in adapter skeleton config"
  exit 1
fi

if grep -q '"production_runtime_allowed": true' tapforge-packs/andyai-finance-engine/read-only-adapter-skeleton.v10.2.0.json; then
  echo "🔴 production runtime allowed in adapter skeleton manifest"
  exit 1
fi

for table in fe_workspaces fe_workspace_members fe_membership_states fe_quota_policies fe_usage_events fe_quota_windows fe_audit_events fe_approval_decisions fe_export_records fe_manual_review_queue; do
  if ! grep -q "$table" src/runtime/supabase-lab-read-only-tables.ts; then
    echo "🔴 Missing table in adapter allowlist: $table"
    exit 1
  fi
  echo "🟢 Table present in adapter allowlist: $table"
done

for required_flag in "mutationAllowed: false" "productionRuntimeAllowed: false" "billingAllowed: false" "checkoutAllowed: false" "webhooksAllowed: false"; do
  if ! grep -q "$required_flag" src/runtime/supabase-lab-read-only-adapter.ts; then
    echo "🔴 Missing disabled status flag: $required_flag"
    exit 1
  fi
  echo "🟢 Disabled status flag present: $required_flag"
done

if grep -E "from\\(['\"]|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|service_role|SUPABASE_DB_URL" src/runtime/supabase-lab-read-only-adapter.ts src/runtime/supabase-lab-read-only-tables.ts >/dev/null 2>&1; then
  echo "🔴 Adapter skeleton contains forbidden runtime execution or secret pattern"
  exit 1
fi

echo "🟢 read-only adapter skeleton valid"
echo "🟢 no database execution pattern found"
echo "🟢 mutation remains blocked"
echo "🟢 production runtime remains blocked"
echo "🟢 billing / checkout / webhooks remain blocked"
echo "🟢 .env.local is not tracked"
