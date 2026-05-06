#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v11.9.0 v12 Readiness Checklist Verification"

required_files=(
  "docs/runtime/V12_READINESS_CHECKLIST_v11.9.0.md"
  "docs/release-train/v11.9.0_v12_readiness_checklist.md"
  "scripts/verify-executor-candidate-safety-v11-8-0.sh"
  "docs/product/PUBLIC_PROOF_COPY_PACK_v11.7.0.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

./scripts/verify-executor-candidate-safety-v11-8-0.sh

grep -q "v12 may not activate execution" docs/runtime/V12_READINESS_CHECKLIST_v11.9.0.md || { echo "🔴 execution boundary missing"; exit 1; }

echo "🟢 v12 readiness valid"
