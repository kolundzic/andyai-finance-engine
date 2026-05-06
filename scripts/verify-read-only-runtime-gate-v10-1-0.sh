#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — v10.1.0 Read-Only Runtime Gate Verification"

required_files=(
  "docs/runtime/READ_ONLY_RUNTIME_WIRING_GATE_v10.1.0.md"
  "docs/runtime/READ_ONLY_RUNTIME_ACCESS_CONTRACT_v10.1.0.md"
  "configs/runtime/read-only-table-allowlist.v10.1.0.json"
  "docs/tapforge/TAPFORGE_READ_ONLY_RUNTIME_GATE_RECORD_v10.1.0.md"
  "tapforge-packs/andyai-finance-engine/read-only-runtime-gate.v10.1.0.json"
  "docs/supabase-lab/FIRST_SQL_APPLY_EVIDENCE_v10.0.0.md"
  "docs/supabase-lab/POST_APPLY_SEAL_v10.0.1.md"
  "tapforge-packs/andyai-finance-engine/post-apply-seal.v10.0.1.json"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/read-only-table-allowlist.v10.1.0.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/read-only-runtime-gate.v10.1.0.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -q '"mutation_allowed": true' configs/runtime/read-only-table-allowlist.v10.1.0.json; then
  echo "🔴 mutation allowed in runtime allowlist"
  exit 1
fi

if grep -q '"production_runtime_allowed": true' tapforge-packs/andyai-finance-engine/read-only-runtime-gate.v10.1.0.json; then
  echo "🔴 production runtime allowed in gate"
  exit 1
fi

if grep -q '"billing_activated": true' tapforge-packs/andyai-finance-engine/read-only-runtime-gate.v10.1.0.json; then
  echo "🔴 billing activated in gate"
  exit 1
fi

for table in fe_workspaces fe_workspace_members fe_membership_states fe_quota_policies fe_usage_events fe_quota_windows fe_audit_events fe_approval_decisions fe_export_records fe_manual_review_queue; do
  if ! grep -q "$table" configs/runtime/read-only-table-allowlist.v10.1.0.json; then
    echo "🔴 Missing table in read-only allowlist: $table"
    exit 1
  fi
  echo "🟢 Table present in read-only allowlist: $table"
done

for blocked in insert update delete upsert truncate drop alter create; do
  if ! grep -q "$blocked" configs/runtime/read-only-table-allowlist.v10.1.0.json; then
    echo "🔴 Missing blocked operation: $blocked"
    exit 1
  fi
  echo "🟢 Blocked operation recorded: $blocked"
done

echo "🟢 read-only runtime gate valid"
echo "🟢 mutation remains blocked"
echo "🟢 production runtime remains blocked"
echo "🟢 billing / checkout / webhooks remain blocked"
echo "🟢 .env.local is not tracked"
