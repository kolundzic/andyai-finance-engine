#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v18.0.0 Client Conversion Layer Lock Verification"

required_files=(
  "app/lead/page.tsx"
  "app/pilot/page.tsx"
  "app/offers/page.tsx"
  "app/case-study/page.tsx"
  "app/roi/page.tsx"
  "docs/product/EVIDENCE_PACK_EXPORT_PLAN_v17.6.0.md"
  "docs/product/INVESTOR_CLIENT_DECK_OUTLINE_v17.8.0.md"
  "docs/product/V18_READINESS_CHECKLIST_v17.9.0.md"
  "docs/product/CLIENT_CONVERSION_LAYER_LOCK_v18.0.0.md"
  "tapforge-packs/andyai-finance-engine/client-conversion-layer-lock.v18.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "18.0.0"' package.json || { echo "🔴 package version not 18.0.0"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/client-conversion-layer-lock.v18.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }
grep -q '"checkout_allowed": false' tapforge-packs/andyai-finance-engine/client-conversion-layer-lock.v18.0.0.json || { echo "🔴 checkout boundary wrong"; exit 1; }

pattern="fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY|navigator\\.mediaDevices|getUserMedia|MediaRecorder"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 Forbidden runtime/network/payment/mic pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v18.0.0 client conversion layer lock valid"
