#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v12.7.0 Vercel Deployment Checklist Verification"

required_files=(
  "docs/deployment/VERCEL_DEPLOYMENT_EVIDENCE_CHECKLIST_v12.7.0.md"
  "scripts/check-finance-domain-online.sh"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q "andyai-finance-engine" docs/deployment/VERCEL_DEPLOYMENT_EVIDENCE_CHECKLIST_v12.7.0.md || { echo "🔴 project evidence missing"; exit 1; }
grep -q "finance.andyai.ai" docs/deployment/VERCEL_DEPLOYMENT_EVIDENCE_CHECKLIST_v12.7.0.md || { echo "🔴 domain evidence missing"; exit 1; }

echo "🟢 v12.7.0 deployment checklist valid"
