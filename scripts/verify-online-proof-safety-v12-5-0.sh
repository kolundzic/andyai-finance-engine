#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v12.5.0 Online Proof Safety Scanner"

if git ls-files | grep -E '(^|/)\.env.local$' >/dev/null 2>&1; then
  echo "🔴 .env.local is tracked by Git"
  exit 1
fi

# Runtime-code scan only.
# Do not scan configs/docs/scripts because those files intentionally contain
# historical forbidden-pattern lists and false flags documenting blocked behavior.
pattern="\\.insert\\(|\\.update\\(|\\.delete\\(|\\.upsert\\(|process\\.env\\.SUPABASE_DB_URL|SUPABASE_SERVICE_ROLE_KEY|SERVICE_ROLE_KEY|service_role_key|service_role secret"

for target in src app pages; do
  [ -e "$target" ] || continue
  if grep -R -E "$pattern" "$target" >/dev/null 2>&1; then
    echo "🔴 forbidden runtime-code pattern in $target"
    grep -R -n -E "$pattern" "$target" || true
    exit 1
  fi
done

for path in app/api/finance/read-only/status/route.ts app/finance-proof/page.tsx app/not-found.tsx pages/404.tsx; do
  [ -f "$path" ] || { echo "🔴 Missing online proof/build path: $path"; exit 1; }
  echo "🟢 Online proof/build path present: $path"
done

for json_file in \
  configs/runtime/finance-domain-verification.v12.4.0.json \
  configs/runtime/finance-proof-page.v12.3.0.json \
  configs/runtime/static-runtime-status-api-route.v12.2.0.json; do
  [ -f "$json_file" ] || { echo "🔴 Missing config JSON: $json_file"; exit 1; }
  [[ -s "$json_file" ]] || { echo "🔴 Config JSON empty or missing: $json_file"; exit 1; }
  echo "🟢 Config JSON file present and non-empty: $json_file"
done

echo "🟢 online proof safety valid"
