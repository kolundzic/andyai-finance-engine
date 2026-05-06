#!/usr/bin/env zsh
set -euo pipefail
echo "🅰️ v11.4.0 Executor Candidate Skeleton Verification"
for file in "src/runtime/server-side-read-only-executor-candidate.ts" "docs/runtime/EXECUTOR_CANDIDATE_SKELETON_v11.4.0.md" "configs/runtime/executor-candidate-skeleton.v11.4.0.json"; do
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
echo "🟢 v11.4.0 verifier valid"
