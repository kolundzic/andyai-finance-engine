#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v11.7.0 Public Proof Copy Pack Verification"

required_files=(
  "docs/product/PUBLIC_PROOF_COPY_PACK_v11.7.0.md"
  "docs/release-train/v11.7.0_public_proof_copy_pack.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q "AndyAI Finance Engine" docs/product/PUBLIC_PROOF_COPY_PACK_v11.7.0.md || { echo "🔴 product name missing"; exit 1; }
grep -q "Read-only proof" docs/product/PUBLIC_PROOF_COPY_PACK_v11.7.0.md || { echo "🔴 read-only proof copy missing"; exit 1; }
grep -q "Human approval above automation" docs/product/PUBLIC_PROOF_COPY_PACK_v11.7.0.md || { echo "🔴 human approval copy missing"; exit 1; }
grep -q "The hands remain locked" docs/product/PUBLIC_PROOF_COPY_PACK_v11.7.0.md || { echo "🔴 canon line missing"; exit 1; }

echo "🟢 v11.7.0 public proof copy pack valid"
