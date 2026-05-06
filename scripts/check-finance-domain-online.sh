#!/usr/bin/env zsh
set -euo pipefail

DOMAIN="finance.andyai.ai"

echo "🅰️ AndyAI Finance Engine — Domain Online Check"
echo "Domain: $DOMAIN"

if command -v dig >/dev/null 2>&1; then
  echo "DNS CNAME:"
  dig "$DOMAIN" CNAME +short || true
fi

echo "HTTP HEAD:"
curl -I "https://$DOMAIN" || true

echo "Status API:"
curl -sS "https://$DOMAIN/api/finance/read-only/status" | head -c 800 || true
echo

echo "Proof page:"
curl -I "https://$DOMAIN/finance-proof" || true
