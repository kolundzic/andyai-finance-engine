#!/usr/bin/env bash
set -euo pipefail
echo "🔵 Running AndyAI Finance Engine local demo..."
python3 -m src.finance_engine.cli demo --input examples/working-core/saas_business_input.json --output reports/demo-output
echo "🟢 Demo output: reports/demo-output/DEMO_EXPORT_PACK.md"
