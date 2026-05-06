#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.5.0 Read-Only Request Builder Verification"

required_files=(
  "src/runtime/supabase-lab-read-only-request-builder.ts"
  "docs/runtime/READ_ONLY_REST_REQUEST_BUILDER_SKELETON_v10.5.0.md"
  "configs/runtime/read-only-request-builder.v10.5.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/read-only-request-builder.v10.5.0.json','utf8'))"

grep -q 'readonly method: "GET"' src/runtime/supabase-lab-read-only-request-builder.ts || { echo "🔴 GET method contract missing"; exit 1; }
grep -q 'bodyAllowed: false' src/runtime/supabase-lab-read-only-request-builder.ts || { echo "🔴 bodyAllowed false missing"; exit 1; }

if grep -E "fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|SUPABASE_DB_URL|service_role" src/runtime/supabase-lab-read-only-request-builder.ts >/dev/null 2>&1; then
  echo "🔴 request builder contains forbidden execution or secret pattern"
  exit 1
fi

echo "🟢 v10.5.0 read-only request builder valid"
