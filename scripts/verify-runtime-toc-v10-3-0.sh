#!/usr/bin/env zsh
set -euo pipefail

echo "🅰️ v10.3.0 Runtime TOC Verification"

required_files=(
  "docs/runtime/RUNTIME_TOC_v10.3_to_v11.0.md"
  "docs/release-train/v10.3.0_runtime_toc_and_master_pack_map.md"
)

for file in "${required_files[@]}"; do
  [ -f "$file" ] || { echo "🔴 Missing: $file"; exit 1; }
  echo "🟢 Found: $file"
done

for version in v10.3.0 v10.4.0 v10.5.0 v10.6.0 v10.7.0 v10.8.0 v10.9.0 v11.0.0; do
  grep -q "$version" docs/runtime/RUNTIME_TOC_v10.3_to_v11.0.md || { echo "🔴 Missing TOC version: $version"; exit 1; }
  echo "🟢 TOC includes: $version"
done

echo "🟢 v10.3.0 TOC valid"
