#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v14.0.0 Visual Consistency Lock Verification"

required_files=(
  "src/ui/finance-prestige-system.tsx"
  "app/page.tsx"
  "app/finance-proof/page.tsx"
  "app/proof/page.tsx"
  "app/supabase/page.tsx"
  "app/audit/page.tsx"
  "app/approval/page.tsx"
  "app/runs/page.tsx"
  "app/projects/page.tsx"
  "app/workflow/page.tsx"
  "app/demo/page.tsx"
  "app/library/page.tsx"
  "docs/visual/VISUAL_CONSISTENCY_LOCK_v14.0.0.md"
  "tapforge-packs/andyai-finance-engine/visual-consistency-lock.v14.0.0.json"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q "PrestigePage" src/ui/finance-prestige-system.tsx || { echo "🔴 PrestigePage missing"; exit 1; }
grep -q "Read-only proof" app/page.tsx || { echo "🔴 homepage proof copy missing"; exit 1; }
grep -q "Human authority intact" app/finance-proof/page.tsx || { echo "🔴 proof page authority copy missing"; exit 1; }
grep -q '"version": "14.0.0"' package.json || { echo "🔴 package version not 14.0.0"; exit 1; }

pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 forbidden runtime-code pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v14.0.0 visual consistency lock valid"
