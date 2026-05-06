#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.7.0 Read-Only Diagnostics Verification"

required_files=(
  "src/runtime/supabase-lab-read-only-diagnostics.ts"
  "docs/runtime/READ_ONLY_RUNTIME_DIAGNOSTICS_MODEL_v10.7.0.md"
  "configs/runtime/read-only-diagnostics-model.v10.7.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('configs/runtime/read-only-diagnostics-model.v10.7.0.json','utf8'))"

if grep -E "fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|SUPABASE_DB_URL|service_role" src/runtime/supabase-lab-read-only-diagnostics.ts >/dev/null 2>&1; then
  echo "🔴 diagnostics model contains forbidden execution or secret pattern"
  exit 1
fi

echo "🟢 v10.7.0 diagnostics model valid"
