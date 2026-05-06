#!/usr/bin/env zsh
set -euo pipefail
echo "🅰️ v11.1.0 Candidate Gate Verification"
for file in "docs/runtime/V11_TO_V12_EXECUTOR_TOC_v11.1.0.md" "docs/runtime/SERVER_SIDE_READ_ONLY_EXECUTOR_CANDIDATE_GATE_v11.1.0.md" "configs/runtime/server-side-read-only-executor-candidate-gate.v11.1.0.json"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done
if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi
if grep -R -E "fetch\(|\.insert\(|\.update\(|\.delete\(|\.upsert\(|SUPABASE_DB_URL|service_role|serviceRole" src/runtime >/dev/null 2>&1; then
  echo "🔴 runtime source contains forbidden execution or secret pattern"
  grep -R -n -E "fetch\(|\.insert\(|\.update\(|\.delete\(|\.upsert\(|SUPABASE_DB_URL|service_role|serviceRole" src/runtime || true
  exit 1
fi
echo "🟢 v11.1.0 verifier valid"
