#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v50.0.0 Public Business System Lock Verification"

required_files=(
  "app/pilot-intake-form/page.tsx"
  "src/intake/pilot-intake-form-state.tsx"
  "app/evidence-builder/page.tsx"
  "app/proposal-workspace/page.tsx"
  "app/pricing/page.tsx"
  "app/trust-center/page.tsx"
  "app/security/page.tsx"
  "app/roadmap/page.tsx"
  "app/demo-theater/page.tsx"
  "docs/product/PUBLIC_BUSINESS_SYSTEM_LOCK_v50.0.0.md"
  "tapforge-packs/andyai-finance-engine/public-business-system-lock.v50.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "50.0.0"' package.json || { echo "🔴 package version not 50.0.0"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/public-business-system-lock.v50.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
grep -q '"payment_enabled": false' tapforge-packs/andyai-finance-engine/public-business-system-lock.v50.0.0.json || { echo "🔴 payment boundary wrong"; exit 1; }

pattern="fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY|navigator\\.mediaDevices|getUserMedia|MediaRecorder"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 Forbidden runtime/network/payment/mic pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v50.0.0 public business system lock valid"
