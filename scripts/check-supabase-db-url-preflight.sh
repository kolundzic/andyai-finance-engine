#!/usr/bin/env zsh
set -euo pipefail

GREEN="🟢"
YELLOW="🟡"
RED="🔴"

echo "============================================================"
echo "🅰️ AndyAI Finance Engine — SUPABASE_DB_URL Safe Preflight"
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

if ! command -v psql >/dev/null 2>&1; then
  echo "$RED psql not found in PATH"
  exit 1
fi

echo "$GREEN psql found"
psql --version

./scripts/verify-supabase-env-local.sh --strict
./scripts/smoke-test-supabase-lab-connection.sh
./scripts/verify-lab-only-apply-candidate.sh

if [ -z "${SUPABASE_DB_URL:-}" ]; then
  echo "$YELLOW SUPABASE_DB_URL is not set in current shell"
  echo "$YELLOW This is safe and expected until a deliberate lab apply attempt."
  echo "$YELLOW No DB connection test was run."
  exit 0
fi

python3 - <<'PY'
import os
import sys

url = os.environ.get("SUPABASE_DB_URL", "")
if not (url.startswith("postgresql://") or url.startswith("postgres://")):
    print(f"🔴 SUPABASE_DB_URL present but invalid URL shape length={len(url)}")
    sys.exit(1)

if "@" not in url or ":" not in url:
    print(f"🔴 SUPABASE_DB_URL present but missing expected connection structure length={len(url)}")
    sys.exit(1)

print(f"🟢 SUPABASE_DB_URL present with Postgres URL shape length={len(url)}")
print("🟢 Secret value not printed")
PY

echo "$YELLOW Running read-only psql connection test without printing DB URL..."
psql "$SUPABASE_DB_URL" -v ON_ERROR_STOP=1 -c "select current_database() as database_name, current_user as db_user;" >/tmp/andyai_finance_engine_psql_preflight.txt

cat /tmp/andyai_finance_engine_psql_preflight.txt

echo "$GREEN DB URL connection preflight PASS"
echo "$YELLOW No schema was created."
echo "$YELLOW No table was created."
echo "$YELLOW No data was written."
