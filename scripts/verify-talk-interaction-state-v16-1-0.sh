#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v16.1.0 Talk Interaction State Verification"

required_files=(
  "src/talk/talk-interaction-console.tsx"
  "app/talk-interaction/page.tsx"
  "docs/talk/TALK_INTERACTION_STATE_PROTOTYPE_v16.1.0.md"
  "tapforge-packs/andyai-finance-engine/talk-interaction-state-prototype.v16.1.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "16.1.0"' package.json || { echo "🔴 package version not 16.1.0"; exit 1; }
grep -q '"provider_connected": false' tapforge-packs/andyai-finance-engine/talk-interaction-state-prototype.v16.1.0.json || { echo "🔴 provider boundary wrong"; exit 1; }
grep -q '"network_fetch_enabled": false' tapforge-packs/andyai-finance-engine/talk-interaction-state-prototype.v16.1.0.json || { echo "🔴 network boundary wrong"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/talk-interaction-state-prototype.v16.1.0.json || { echo "🔴 DB write boundary wrong"; exit 1; }

pattern="navigator\\.mediaDevices|getUserMedia|MediaRecorder|fetch\\(|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\("
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 Forbidden talk/runtime pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

grep -q "useState" src/talk/talk-interaction-console.tsx || { echo "🔴 useState missing"; exit 1; }
grep -q "No provider calls" app/talk-interaction/page.tsx || { echo "🔴 boundary copy missing"; exit 1; }

echo "🟢 v16.1.0 talk interaction state valid"
