#!/usr/bin/env zsh
set -euo pipefail
echo "🅰️ v11.6.0 Finance Subdomain Runbook Verification"
for file in "docs/deployment/FINANCE_SUBDOMAIN_DEPLOYMENT_RUNBOOK_v11.6.0.md" "docs/release-train/v11.6.0_finance_subdomain_deployment_runbook.md"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done
if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi
if grep -R -E "fetch\(|\.insert\(|\.update\(|\.delete\(|\.upsert\(|SUPABASE_DB_URL|service_role|serviceRole" src/runtime >/dev/null 2>&1; then
  echo "🔴 runtime source contains forbidden execution or secret pattern"
  grep -R -n -E "fetch\(|\.insert\(|\.update\(|\.delete\(|\.upsert\(|SUPABASE_DB_URL|service_role|serviceRole" src/runtime || true
  exit 1
fi
echo "🟢 v11.6.0 verifier valid"
