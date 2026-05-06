#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v19.0.0 Pilot Intake Prototype Lock Verification"

required_files=(
  "src/intake/static-intake-console.tsx"
  "app/pilot-intake/page.tsx"
  "configs/intake/intake-question-library.v18.4.0.json"
  "src/intake/evidence-preview.ts"
  "app/readiness/page.tsx"
  "configs/intake/intake-safety-boundary.v18.7.0.json"
  "docs/intake/INTAKE_REVIEW_CHECKLIST_v18.8.0.md"
  "docs/intake/PILOT_INTAKE_PROTOTYPE_LOCK_v19.0.0.md"
  "tapforge-packs/andyai-finance-engine/pilot-intake-prototype-lock.v19.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "19.0.0"' package.json || { echo "🔴 package version not 19.0.0"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/pilot-intake-prototype-lock.v19.0.0.json || { echo "🔴 DB boundary wrong"; exit 1; }

pattern="fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY|navigator\\.mediaDevices|getUserMedia|MediaRecorder"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 Forbidden runtime/network/payment/mic pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v19.0.0 pilot intake prototype lock valid"
