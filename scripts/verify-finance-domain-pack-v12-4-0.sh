#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v12.4.0 Finance Domain Pack Verification"

required_files=(
  "scripts/check-finance-domain-online.sh"
  "docs/domain/FINANCE_DOMAIN_VERIFICATION_PACK_v12.4.0.md"
  "configs/runtime/finance-domain-verification.v12.4.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

[ -x scripts/check-finance-domain-online.sh ] || { echo "🔴 domain script not executable"; exit 1; }

grep -q "finance.andyai.ai" docs/domain/FINANCE_DOMAIN_VERIFICATION_PACK_v12.4.0.md || { echo "🔴 domain missing"; exit 1; }

echo "🟢 v12.4.0 domain pack valid"
