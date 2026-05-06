#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v15.0.0 Talk + Design Readiness Lock Verification"

required_files=(
  "app/talk/page.tsx"
  "app/routes/page.tsx"
  "docs/release-train/V14_TO_V15_MASTER_TOC_v14.1.0.md"
  "docs/talk/TALK_SCRIPT_PACK_v14.4.0.md"
  "docs/talk/CLIENT_CONVERSATION_FLOW_v14.6.0.md"
  "docs/talk/TALK_SAFETY_BOUNDARY_SEAL_v14.8.0.md"
  "docs/talk/V15_READINESS_CHECKLIST_v14.9.0.md"
  "docs/talk/TALK_AND_DESIGN_READINESS_LOCK_v15.0.0.md"
  "tapforge-packs/andyai-finance-engine/talk-design-readiness-lock.v15.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "15.0.0"' package.json || { echo "🔴 package version not 15.0.0"; exit 1; }
grep -q '"provider_connected": false' tapforge-packs/andyai-finance-engine/talk-design-readiness-lock.v15.0.0.json || { echo "🔴 provider boundary wrong"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/talk-design-readiness-lock.v15.0.0.json || { echo "🔴 database write boundary wrong"; exit 1; }

pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 forbidden runtime-code pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v15.0.0 talk + design readiness lock valid"
