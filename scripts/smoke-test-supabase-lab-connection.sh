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

KEY_KIND="legacy_or_unknown"
case "$NEXT_PUBLIC_SUPABASE_ANON_KEY" in
  sb_publishable_*)
    KEY_KIND="publishable"
    ;;
  eyJ*)
    KEY_KIND="legacy_anon_jwt"
    ;;
esac

echo "$GREEN Supabase URL loaded locally"
echo "$GREEN public key kind detected: $KEY_KIND"
echo "$YELLOW Testing Auth health endpoint without printing keys..."

SUPABASE_AUTH_HEALTH_URL="${NEXT_PUBLIC_SUPABASE_URL%/}/auth/v1/health"

HTTP_CODE="$(
  curl -sS -o /tmp/andyai_supabase_auth_health_response.txt \
    -w "%{http_code}" \
    "$SUPABASE_AUTH_HEALTH_URL" \
    -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" \
    -H "Accept: application/json" || true
)"

if [ "$HTTP_CODE" = "200" ]; then
  echo "$GREEN Supabase Auth health endpoint reachable with public key"
  echo "$GREEN Smoke test PASS"
  echo "$YELLOW Response preview, no secrets:"
  head -c 500 /tmp/andyai_supabase_auth_health_response.txt 2>/dev/null || true
  echo ""
  exit 0
fi

if [ "$HTTP_CODE" = "401" ] || [ "$HTTP_CODE" = "403" ]; then
  echo "$RED Supabase Auth health endpoint rejected public key. HTTP $HTTP_CODE"
  echo "$YELLOW Check project URL and public/publishable key."
  exit 1
fi

echo "$RED Unexpected Supabase Auth health response. HTTP $HTTP_CODE"
echo "$YELLOW Response body preview:"
head -c 500 /tmp/andyai_supabase_auth_health_response.txt 2>/dev/null || true
echo ""
exit 1
