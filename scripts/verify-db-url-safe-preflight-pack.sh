#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — DB URL Safe Preflight Pack Verification"

required_files=(
  "docs/supabase-lab/DB_URL_SAFE_PREFLIGHT_v9.9.2.md"
  "docs/supabase-lab/DB_URL_EXPORT_GUIDE_v9.9.2.md"
  "docs/tapforge/TAPFORGE_DB_URL_PREFLIGHT_RECORD_v9.9.2.md"
  "tapforge-packs/andyai-finance-engine/db-url-safe-preflight.v9.9.2.json"
  "scripts/check-supabase-db-url-preflight.sh"
  "scripts/check-lab-apply-tooling-preflight.sh"
  "scripts/apply-supabase-lab-prefixed-sql-candidate.sh"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

node -e "JSON.parse(require('fs').readFileSync('tapforge-packs/andyai-finance-engine/db-url-safe-preflight.v9.9.2.json','utf8'))"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -E "apply_executed_by_release_tap\": true|production_apply_allowed\": true" tapforge-packs/andyai-finance-engine/db-url-safe-preflight.v9.9.2.json >/dev/null 2>&1; then
  echo "🔴 DB URL preflight manifest allows unsafe apply state. Stop."
  exit 1
fi

if ! grep -q "SUPABASE_DB_URL" scripts/check-supabase-db-url-preflight.sh; then
  echo "🔴 DB URL preflight script does not check SUPABASE_DB_URL"
  exit 1
fi

if grep -q 'echo "\$SUPABASE_DB_URL"' scripts/check-supabase-db-url-preflight.sh; then
  echo "🔴 DB URL preflight script may print SUPABASE_DB_URL"
  exit 1
fi

echo "🟢 JSON DB URL preflight manifest valid"
echo "🟢 .env.local is not tracked"
echo "🟢 release tap does not execute SQL"
echo "🟢 production apply remains blocked"
echo "🟢 DB URL value is not printed by verifier pattern"
echo "🟢 DB URL safe preflight pack verification complete"
