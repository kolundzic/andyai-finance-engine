#!/usr/bin/env zsh
set -euo pipefail

echo "🟢 AndyAI Finance Engine — Supabase Runtime Foundation Verification"

required_files=(
  "src/supabase-runtime/contracts.ts"
  "src/supabase-runtime/membership-repository.ts"
  "src/supabase-runtime/quota-runtime.ts"
  "src/supabase-runtime/audit-approval-runtime.ts"
  "src/supabase-runtime/export-safety-gate.ts"
  "src/supabase-runtime/manual-review-runtime.ts"
  "src/supabase-runtime/index.ts"
  "docs/supabase-runtime/RUNTIME_CONTRACT_TYPES_v6.1.0.md"
  "docs/supabase-runtime/MEMBERSHIP_REPOSITORY_INTERFACE_v6.2.0.md"
  "docs/supabase-runtime/QUOTA_RUNTIME_INTERFACE_v6.3.0.md"
  "docs/supabase-runtime/AUDIT_APPROVAL_RUNTIME_INTERFACE_v6.4.0.md"
  "docs/supabase-runtime/EXPORT_SAFETY_GATE_v6.5.0.md"
  "docs/supabase-runtime/MANUAL_REVIEW_RUNTIME_INTERFACE_v6.6.0.md"
  "docs/supabase-runtime/RUNTIME_BOUNDARY_INDEX_v6.7.0.md"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing required file: $file"
    exit 1
  fi
  echo "🟢 Found: $file"
done

if grep -R "createClient(" src/supabase-runtime >/dev/null 2>&1; then
  echo "🔴 Live Supabase client creation detected in runtime foundation contracts"
  exit 1
fi

if grep -R "SUPABASE_SERVICE_ROLE_KEY" src/supabase-runtime >/dev/null 2>&1; then
  echo "🔴 Service role key reference detected in runtime foundation contracts"
  exit 1
fi

echo "🟢 No live Supabase client creation detected"
echo "🟢 No service role key reference detected"
echo "🟢 Runtime foundation verification complete"
