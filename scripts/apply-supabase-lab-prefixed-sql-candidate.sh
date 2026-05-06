#!/usr/bin/env zsh
set -euo pipefail

GREEN="🟢"
YELLOW="🟡"
RED="🔴"

echo "============================================================"
echo "🅰️ AndyAI Finance Engine — Lab-Only SQL Apply Candidate"
echo "============================================================"

if [ "${ANDYAI_ALLOW_LAB_SQL_APPLY:-}" != "yes" ]; then
  echo "$RED Apply is disabled by default."
  echo "$YELLOW To even allow this candidate script to continue, run with:"
  echo "ANDYAI_ALLOW_LAB_SQL_APPLY=yes ./scripts/apply-supabase-lab-prefixed-sql-candidate.sh"
  exit 1
fi

if [ ! -d ".git" ]; then
  echo "$RED Run this from the repo root."
  exit 1
fi

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "$RED .env.local is tracked by Git. Stop."
  exit 1
fi

if [ ! -f ".env.local" ]; then
  echo "$RED .env.local missing. Stop."
  exit 1
fi

if [ ! -f "supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql" ]; then
  echo "$RED Candidate SQL missing. Stop."
  exit 1
fi

./scripts/verify-supabase-env-local.sh --strict
./scripts/smoke-test-supabase-lab-connection.sh
./scripts/verify-prefixed-supabase-lab-preview.sh
./scripts/verify-lab-only-apply-candidate.sh

echo ""
echo "$YELLOW This candidate can mutate the Supabase lab database."
echo "$YELLOW It is intended only for the shared Free lab, not production."
echo "$YELLOW It must not touch Human Attention tables."
echo ""
echo "Type this exact phrase to continue:"
echo "APPLY ANDYAI FINANCE ENGINE LAB SQL"
printf "> "
read CONFIRMATION

if [ "$CONFIRMATION" != "APPLY ANDYAI FINANCE ENGINE LAB SQL" ]; then
  echo "$RED Confirmation phrase mismatch. Stop."
  exit 1
fi

if ! command -v psql >/dev/null 2>&1; then
  echo "$RED psql not found."
  echo "$YELLOW Candidate is verified, but apply cannot run without psql."
  echo "$YELLOW Install PostgreSQL client or use Supabase SQL Editor manually after review."
  exit 1
fi

if [ -z "${SUPABASE_DB_URL:-}" ]; then
  echo "$RED SUPABASE_DB_URL is not set in the shell."
  echo "$YELLOW For safety, this candidate does not infer database passwords."
  echo "$YELLOW Export a reviewed lab-only DB URL only when you intentionally apply."
  exit 1
fi

psql "$SUPABASE_DB_URL" -v ON_ERROR_STOP=1 -f "supabase/lab-apply-candidate/finance-engine-lab-apply-candidate-v9.9.0.sql"

echo "$GREEN Lab-only SQL apply candidate executed."
echo "$YELLOW Verify tables manually before any next step."
