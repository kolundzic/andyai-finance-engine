#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v50.0.1 Documentation Consolidation Verification"

required_files=(
  "docs/master/ANDYAI_FINANCE_ENGINE_MASTER_EVOLUTION_RECORD_v50.0.1.md"
  "docs/master/PHASE_MAP_v50.0.1.md"
  "docs/glossary/BEGINNER_GLOSSARY_v50.0.1.md"
  "docs/product/PUBLIC_BUSINESS_SYSTEM_EXPLAINED_v50.0.1.md"
  "docs/release-train/v50.0.1_documentation_consolidation_seal.md"
  "docs/release-train/v50.0.1_documentation-consolidation-seal.md"
  "tapforge-packs/andyai-finance-engine/documentation-consolidation-seal.v50.0.1.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "50.0.1"' package.json || { echo "🔴 package version not 50.0.1"; exit 1; }
grep -q '"runtime_changes": false' tapforge-packs/andyai-finance-engine/documentation-consolidation-seal.v50.0.1.json || { echo "🔴 runtime boundary wrong"; exit 1; }

echo "🟢 v50.0.1 documentation consolidation valid"
