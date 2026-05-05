# AndyAI Finance Engine — Working Core Stable v2.0.0

`andyai-finance-engine` now has a runnable local working core.

## Proof

Run:

```bash
PYTHONPATH=src python3 -m finance_engine.cli demo --input examples/working-core/saas_business_input.json --output reports/demo-output
```

Expected output:

- `reports/demo-output/DEMO_EXPORT_PACK.md`
- `reports/demo-output/pricing_output.json`
- `reports/demo-output/summary_output.json`
- `reports/demo-output/scenario_output.json`
- `reports/demo-output/audit_trail.json`

## Truth Rule

AI can build the model fast. But the human must verify that the model tells the truth.
