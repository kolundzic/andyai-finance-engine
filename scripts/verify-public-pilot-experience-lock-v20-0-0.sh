#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v20.0.0 Public Pilot Experience Lock Verification"

required_files=(
  "app/pilot-intake/page.tsx"
  "app/readiness/page.tsx"
  "app/client-portal/page.tsx"
  "app/project-brief/page.tsx"
  "app/evidence-preview/page.tsx"
  "app/proposal-preview/page.tsx"
  "docs/product/CLIENT_DELIVERY_SOP_v19.6.0.md"
  "docs/product/PUBLIC_PILOT_JOURNEY_MAP_v19.7.0.md"
  "docs/product/CLIENT_HANDOFF_CHECKLIST_v19.8.0.md"
  "docs/product/V20_READINESS_CHECKLIST_v19.9.0.md"
  "docs/product/PUBLIC_PILOT_EXPERIENCE_LOCK_v20.0.0.md"
  "tapforge-packs/andyai-finance-engine/public-pilot-experience-lock.v20.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "20.0.0"' package.json || { echo "🔴 package version not 20.0.0"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/public-pilot-experience-lock.v20.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
grep -q '"payment_enabled": false' tapforge-packs/andyai-finance-engine/public-pilot-experience-lock.v20.0.0.json || { echo "🔴 payment boundary wrong"; exit 1; }

pattern="fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY|navigator\\.mediaDevices|getUserMedia|MediaRecorder"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 Forbidden runtime/network/payment/mic pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v20.0.0 public pilot experience lock valid"
