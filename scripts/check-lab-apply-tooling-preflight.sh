#!/usr/bin/env zsh
set -euo pipefail

GREEN="🟢"
YELLOW="🟡"
RED="🔴"

echo "============================================================"
echo "🅰️ AndyAI Finance Engine — Lab Apply Tooling Preflight"
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

required_files=(
  "supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql"
  "scripts/apply-supabase-lab-prefixed-sql-candidate.sh"
  "scripts/verify-lab-only-apply-candidate.sh"
  "scripts/verify-prefixed-supabase-lab-preview.sh"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "$RED Missing required file: $file"
    exit 1
  fi
  echo "$GREEN Found: $file"
done

./scripts/verify-supabase-env-local.sh --strict
./scripts/smoke-test-supabase-lab-connection.sh
./scripts/verify-lab-only-apply-candidate.sh

if command -v psql >/dev/null 2>&1; then
  echo "$GREEN psql found"
  psql --version
else
  echo "$YELLOW psql not installed or not found in PATH"
  echo "$YELLOW This blocks future command-line apply, but does not block documentation readiness."
fi

if [ -n "${SUPABASE_DB_URL:-}" ]; then
  python3 - <<'PY'
import os

url = os.environ.get("SUPABASE_DB_URL", "")
if url.startswith("postgresql://") or url.startswith("postgres://"):
    print(f"🟢 SUPABASE_DB_URL present and has Postgres URL shape length={len(url)}")
else:
    print(f"🟡 SUPABASE_DB_URL present but shape is unusual length={len(url)}")
PY
else
  echo "$YELLOW SUPABASE_DB_URL is not set in current shell"
  echo "$YELLOW This is expected until a deliberate lab apply attempt is prepared."
fi

echo "$GREEN tooling preflight complete"
echo "$YELLOW No SQL was applied."
