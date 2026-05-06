#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v11.8.0 Executor Candidate Safety Scanner"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret"

if grep -R -E "$pattern" src/runtime >/dev/null 2>&1; then
  echo "🔴 forbidden runtime pattern found"
  grep -R -n -E "$pattern" src/runtime || true
  exit 1
fi

echo "🟢 executor candidate safety scanner valid"
