#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Supabase Live Preflight"

required_files=(
  "docs/supabase-activation/LIVE_SETUP_BOUNDARY_v7.1.0.md"
  "docs/supabase-activation/MIGRATION_BUNDLE_MAP_v7.2.0.md"
  "scripts/verify-supabase-env-local.sh"
  "scripts/check-supabase-cli.sh"
  "docs/supabase-activation/MIGRATION_APPLICATION_RUNBOOK_v7.5.0.md"
  "docs/supabase-activation/RLS_REVIEW_GATE_v7.6.0.md"
  "docs/supabase-activation/VERCEL_ENV_SYNC_CHECKLIST_v7.7.0.md"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

./scripts/verify-supabase-env-local.sh
./scripts/check-supabase-cli.sh

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked. Stop."
  exit 1
fi

echo "🟢 .env.local not tracked"
echo "🟢 Supabase live preflight complete"
