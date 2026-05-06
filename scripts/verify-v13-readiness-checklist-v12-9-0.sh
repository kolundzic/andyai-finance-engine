#!/usr/bin/env zsh
set -euo pipefail
export PATH="/opt/homebrew/bin:/opt/homebrew/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:$PATH"

echo "🅰️ v12.9.0 v13 Readiness Checklist Verification"

for verifier in \
  ./scripts/verify-static-runtime-status-route-v12-2-0.sh \
  ./scripts/verify-finance-proof-page-v12-3-0.sh \
  ./scripts/verify-finance-domain-pack-v12-4-0.sh \
  ./scripts/verify-online-proof-safety-v12-5-0.sh \
  ./scripts/verify-public-route-map-v12-6-0.sh \
  ./scripts/verify-vercel-deployment-evidence-checklist-v12-7-0.sh \
  ./scripts/verify-online-runtime-boundary-seal-v12-8-0.sh; do
  [ -x "$verifier" ] || { echo "🔴 Missing verifier: $verifier"; exit 1; }
  "$verifier"
done

[ -f docs/runtime/V13_READINESS_CHECKLIST_v12.9.0.md ] || { echo "🔴 missing readiness doc"; exit 1; }

echo "🟢 v13 readiness valid"
