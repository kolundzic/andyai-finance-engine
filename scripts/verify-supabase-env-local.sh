#!/usr/bin/env zsh
set -euo pipefail

STRICT="${1:-}"

echo "🅰️ AndyAI Finance Engine — Supabase Env Local Guard"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git. Stop."
  exit 1
fi

echo "🟢 .env.local is not tracked"

if [ ! -f ".env.local" ]; then
  if [ "$STRICT" = "--strict" ]; then
    echo "🔴 .env.local missing in strict mode"
    exit 1
  fi
  echo "🟡 .env.local missing; OK before live setup"
  exit 0
fi

missing=0

check_var() {
  local name="$1"
  if grep -E "^${name}=.+" ".env.local" >/dev/null 2>&1; then
    echo "🟢 ${name} present"
  else
    echo "🔴 ${name} missing"
    missing=1
  fi
}

check_var "NEXT_PUBLIC_SUPABASE_URL"
check_var "NEXT_PUBLIC_SUPABASE_ANON_KEY"
check_var "SUPABASE_SERVICE_ROLE_KEY"

if [ "$missing" -ne 0 ]; then
  exit 1
fi

echo "🟢 Supabase env local guard complete"
