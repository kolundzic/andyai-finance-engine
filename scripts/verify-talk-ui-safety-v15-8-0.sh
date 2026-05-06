#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v15.8.0 Talk UI Safety Verification"

required_files=(
  "app/talk/page.tsx"
  "app/client-demo/page.tsx"
  "src/talk/static-talk-console.tsx"
  "configs/talk/provider-adapter-placeholder.v15.7.0.json"
  "configs/talk/talk-event-schema.v15.6.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

pattern="navigator\\.mediaDevices|getUserMedia|MediaRecorder|fetch\\(|OPENAI_API_KEY|ANTHROPIC_API_KEY|GEMINI_API_KEY|ELEVENLABS_API_KEY|NEXT_PUBLIC_.*KEY|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\("
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 Forbidden talk/runtime pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 talk UI safety valid"
