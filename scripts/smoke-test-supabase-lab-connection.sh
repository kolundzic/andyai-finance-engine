#!/usr/bin/env zsh
set -euo pipefail

GREEN="🟢"
YELLOW="🟡"
RED="🔴"

echo "============================================================"
echo "🅰️ AndyAI Finance Engine — Supabase Lab Connection Smoke Test"
echo "============================================================"

if [ ! -d ".git" ]; then
  echo "$RED Run this from the repo root."
  exit 1
fi

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "$RED .env.local is tracked by Git. Stop."
  exit 1
fi

echo "$GREEN .env.local is not tracked by Git"

if [ ! -f ".env.local" ]; then
  echo "$RED .env.local is missing."
  echo "$YELLOW First run:"
  echo "  ./scripts/create-supabase-env-local.sh"
  exit 1
fi

set -a
source .env.local
set +a

missing=0

check_var() {
  local name="$1"
  local value="${(P)name:-}"
  if [ -z "$value" ]; then
    echo "$RED $name missing"
    missing=1
  else
    echo "$GREEN $name present"
  fi
}

check_var "NEXT_PUBLIC_SUPABASE_URL"
check_var "NEXT_PUBLIC_SUPABASE_ANON_KEY"
check_var "SUPABASE_SERVICE_ROLE_KEY"

if [ "$missing" -ne 0 ]; then
  echo "$RED Missing required Supabase env values."
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "$RED curl not found"
  exit 1
fi

SUPABASE_REST_URL="${NEXT_PUBLIC_SUPABASE_URL%/}/rest/v1/"

echo "$GREEN Supabase URL loaded locally"
echo "$YELLOW Testing REST endpoint without printing keys..."
echo "$YELLOW Endpoint: $SUPABASE_REST_URL"

HTTP_CODE="$(
  curl -sS -o /tmp/andyai_supabase_smoke_response.txt \
    -w "%{http_code}" \
    "$SUPABASE_REST_URL" \
    -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" \
    -H "Authorization: Bearer $NEXT_PUBLIC_SUPABASE_ANON_KEY" \
    -H "Accept: application/json" || true
)"

if [ "$HTTP_CODE" = "200" ]; then
  echo "$GREEN Supabase REST endpoint reachable with anon key"
  echo "$GREEN Smoke test PASS"
  exit 0
fi

if [ "$HTTP_CODE" = "401" ] || [ "$HTTP_CODE" = "403" ]; then
  echo "$RED Supabase REST endpoint rejected anon key. HTTP $HTTP_CODE"
  echo "$YELLOW Check NEXT_PUBLIC_SUPABASE_ANON_KEY and project URL."
  exit 1
fi

echo "$RED Unexpected Supabase REST response. HTTP $HTTP_CODE"
echo "$YELLOW Response body preview:"
head -c 500 /tmp/andyai_supabase_smoke_response.txt 2>/dev/null || true
echo ""
exit 1
