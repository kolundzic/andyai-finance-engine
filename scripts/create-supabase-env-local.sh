#!/usr/bin/env zsh
set -euo pipefail

GREEN="🟢"
YELLOW="🟡"
RED="🔴"

echo "============================================================"
echo "🅰️ AndyAI Finance Engine — Local Supabase .env Assistant"
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

if [ -f ".env.local" ]; then
  echo "$YELLOW .env.local already exists."
  echo "$YELLOW This assistant will not overwrite it automatically."
  echo ""
  echo "To replace it manually:"
  echo "  mv .env.local .env.local.backup.\$(date +%Y%m%d_%H%M%S)"
  echo "  ./scripts/create-supabase-env-local.sh"
  exit 0
fi

echo ""
echo "Paste Supabase values locally."
echo "Do NOT paste these secrets into chat, README, GitHub, screenshots, or public notes."
echo ""

printf "NEXT_PUBLIC_SUPABASE_URL: "
read SUPABASE_URL

printf "NEXT_PUBLIC_SUPABASE_ANON_KEY: "
read SUPABASE_ANON_KEY

printf "SUPABASE_SERVICE_ROLE_KEY: "
read -s SUPABASE_SERVICE_ROLE_KEY
echo ""

if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_ANON_KEY" ] || [ -z "$SUPABASE_SERVICE_ROLE_KEY" ]; then
  echo "$RED Missing required value. .env.local not created."
  exit 1
fi

cat > .env.local <<ENVEOF
NEXT_PUBLIC_SUPABASE_URL=$SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=$SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=$SUPABASE_SERVICE_ROLE_KEY
ENVEOF

chmod 600 .env.local

echo "$GREEN .env.local created locally"
echo "$GREEN permissions set to 600"

if [ -x "./scripts/verify-supabase-env-local.sh" ]; then
  ./scripts/verify-supabase-env-local.sh --strict
else
  echo "$YELLOW verify-supabase-env-local.sh not found; skipping strict guard"
fi

echo "$GREEN Local Supabase env setup complete"
