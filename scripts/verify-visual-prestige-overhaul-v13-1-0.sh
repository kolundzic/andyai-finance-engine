#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v13.1.0 Visual Prestige Overhaul Verification"

required_files=(
  "app/page.tsx"
  "app/finance-proof/page.tsx"
  "docs/visual/VISUAL_PRESTIGE_OVERHAUL_v13.1.0.md"
  "docs/release-train/v13.1.0_visual_prestige_overhaul.md"
  "src/runtime/finance-online-proof-status.ts"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

grep -q "Governed financial modeling" app/page.tsx || { echo "🔴 homepage hero missing"; exit 1; }
grep -q "Read-only proof" app/page.tsx || { echo "🔴 homepage proof copy missing"; exit 1; }
grep -q "Evidence Console" app/finance-proof/page.tsx || { echo "🔴 proof evidence console missing"; exit 1; }
grep -q "status.canonicalLine" app/finance-proof/page.tsx || { echo "🔴 proof page does not render status.canonicalLine"; exit 1; }

pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret"
for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 forbidden runtime-code pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

echo "🟢 v13.1.0 visual prestige overhaul valid"
