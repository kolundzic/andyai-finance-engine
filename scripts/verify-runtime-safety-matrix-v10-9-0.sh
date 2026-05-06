#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.9.0 Runtime Safety Matrix Verification"

required_files=(
  "docs/runtime/RUNTIME_SAFETY_TEST_MATRIX_v10.9.0.md"
  "src/runtime/supabase-lab-read-only-tables.ts"
  "src/runtime/supabase-lab-read-only-adapter.ts"
  "src/runtime/supabase-lab-read-only-contracts.ts"
  "src/runtime/supabase-lab-read-only-request-builder.ts"
  "src/runtime/supabase-lab-read-only-diagnostics.ts"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

if grep -R -E "fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|SUPABASE_DB_URL|service_role|serviceRole" src/runtime >/dev/null 2>&1; then
  echo "🔴 runtime source contains forbidden execution or secret pattern"
  grep -R -n -E "fetch\\(|\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|SUPABASE_DB_URL|service_role|serviceRole" src/runtime || true
  exit 1
fi

for verifier in \
  ./scripts/verify-v10-first-sql-apply-evidence.sh \
  ./scripts/verify-post-apply-seal-v10-0-1.sh \
  ./scripts/verify-read-only-runtime-gate-v10-1-0.sh \
  ./scripts/verify-read-only-adapter-skeleton-v10-2-0.sh \
  ./scripts/verify-read-only-query-contract-v10-4-0.sh \
  ./scripts/verify-read-only-request-builder-v10-5-0.sh \
  ./scripts/verify-server-side-runtime-boundary-v10-6-0.sh \
  ./scripts/verify-read-only-diagnostics-v10-7-0.sh \
  ./scripts/verify-read-only-proof-surface-v10-8-0.sh; do
  [ -x "$verifier" ] || { echo "🔴 Missing executable verifier: $verifier"; exit 1; }
  "$verifier"
done

echo "🟢 v10.9.0 runtime safety matrix valid"
