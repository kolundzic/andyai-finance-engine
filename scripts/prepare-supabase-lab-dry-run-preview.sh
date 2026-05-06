#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Prepare Supabase Lab Dry-Run Preview"

OUT="supabase/dry-run-preview/finance-engine-lab-preview-v9.5.0.sql"
mkdir -p "$(dirname "$OUT")"

inputs=(
  "docs/supabase/sql-drafts/v5.3.0_membership_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.4.0_usage_quota_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.5.0_audit_approval_tables_draft.sql"
  "docs/supabase/sql-drafts/v5.6.0_rls_policy_draft.sql"
)

: > "$OUT"

printf '%s\n' "BEGIN;" >> "$OUT"
printf '%s\n\n' "ROLLBACK;" >> "$OUT"

for file in "${inputs[@]}"; do
  if [ ! -f "$file" ]; then
    echo "🔴 Missing SQL draft: $file"
    exit 1
  fi
  printf '%s\n' "" >> "$OUT"
  printf '%s\n' "/* SOURCE_FILE: $file */" >> "$OUT"
  cat "$file" >> "$OUT"
  printf '%s\n' "" >> "$OUT"
done

echo "🟢 Preview bundle generated: $OUT"
echo "🟡 This file is a review artifact. It is not applied by this script."
