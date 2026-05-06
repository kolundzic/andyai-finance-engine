#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v16.0.0 Talk UI Prototype Lock Verification"

required_files=(
  "src/talk/static-talk-console.tsx"
  "app/talk/page.tsx"
  "app/client-demo/page.tsx"
  "configs/talk/prompt-card-library.v15.4.0.json"
  "configs/talk/talk-event-schema.v15.6.0.json"
  "configs/talk/provider-adapter-placeholder.v15.7.0.json"
  "scripts/verify-talk-ui-safety-v15-8-0.sh"
  "docs/talk/V16_READINESS_CHECKLIST_v15.9.0.md"
  "docs/talk/TALK_UI_PROTOTYPE_LOCK_v16.0.0.md"
  "tapforge-packs/andyai-finance-engine/talk-ui-prototype-lock.v16.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "16.0.0"' package.json || { echo "🔴 package version not 16.0.0"; exit 1; }
grep -q '"microphone_enabled": false' tapforge-packs/andyai-finance-engine/talk-ui-prototype-lock.v16.0.0.json || { echo "🔴 microphone boundary wrong"; exit 1; }
grep -q '"provider_connected": false' tapforge-packs/andyai-finance-engine/talk-ui-prototype-lock.v16.0.0.json || { echo "🔴 provider boundary wrong"; exit 1; }
grep -q '"database_writes_allowed": false' tapforge-packs/andyai-finance-engine/talk-ui-prototype-lock.v16.0.0.json || { echo "🔴 DB write boundary wrong"; exit 1; }

./scripts/verify-talk-ui-safety-v15-8-0.sh

echo "🟢 v16.0.0 talk UI prototype lock valid"
