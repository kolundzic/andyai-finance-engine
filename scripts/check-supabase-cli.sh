#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ AndyAI Finance Engine — Supabase CLI Preflight"

if command -v supabase >/dev/null 2>&1; then
  echo "🟢 Supabase CLI found"
  supabase --version || true
else
  echo "🟡 Supabase CLI not found"
  echo "🟡 This is OK before live setup. Install it only when moving to real project activation."
fi

echo "🟢 CLI preflight complete"
