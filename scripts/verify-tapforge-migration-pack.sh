#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — TAPFORGE Migration Pack Verification"

required_files=(
  "tapforge-packs/andyai-finance-engine/manifest.v8.2.0.json"
  "tapforge-packs/andyai-finance-engine/import-contract.v8.3.0.json"
  "tapforge-packs/andyai-finance-engine/dry-run-contract.v8.4.0.json"
  "tapforge-packs/andyai-finance-engine/namespace-registry.v8.5.0.json"
  "tapforge-packs/andyai-finance-engine/evidence-ledger-contract.v8.6.0.json"
  "docs/tapforge/TAPFORGE_MIGRATION_PACK_MANIFEST_v8.2.0.md"
  "docs/tapforge/FINANCE_ENGINE_MIGRATION_IMPORT_CONTRACT_v8.3.0.md"
  "docs/tapforge/TAPFORGE_APPLY_DRY_RUN_CONTRACT_v8.4.0.md"
  "docs/supabase-activation/NAMESPACE_REGISTRY_v8.5.0.md"
  "docs/tapforge/MIGRATION_EVIDENCE_LEDGER_CONTRACT_v8.6.0.md"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/manifest.v8.2.0.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/import-contract.v8.3.0.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/dry-run-contract.v8.4.0.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/namespace-registry.v8.5.0.json','utf8'))"
node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/evidence-ledger-contract.v8.6.0.json','utf8'))"

echo "🟢 JSON manifests valid"

if git ls-files | grep -E '^supabase/\.temp/' >/dev/null 2>&1; then
  echo "🔴 Supabase temp files are tracked"
  exit 1
fi

echo "🟢 No tracked Supabase temp files"
echo "🟢 TAPFORGE migration pack verification complete"
