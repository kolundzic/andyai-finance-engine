#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v17.0.0 Talk Product Story Lock Verification"

required_files=(
  "src/talk/talk-copy-polish.ts"
  "configs/talk/conversation-scenarios.v16.3.0.json"
  "configs/talk/demo-script-carousel.v16.5.0.json"
  "docs/product/CLIENT_OBJECTION_HANDLING_PACK_v16.6.0.md"
  "app/talk-safety/page.tsx"
  "docs/product/PILOT_OFFER_COPY_PACK_v16.8.0.md"
  "docs/talk/TALK_PRODUCT_STORY_LOCK_v17.0.0.md"
  "tapforge-packs/andyai-finance-engine/talk-product-story-lock.v17.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q '"version": "17.0.0"' package.json || { echo "🔴 package version not 17.0.0"; exit 1; }
grep -q '"provider_connected": false' tapforge-packs/andyai-finance-engine/talk-product-story-lock.v17.0.0.json || { echo "🔴 provider boundary wrong"; exit 1; }

echo "🟢 v17.0.0 talk product story lock valid"
