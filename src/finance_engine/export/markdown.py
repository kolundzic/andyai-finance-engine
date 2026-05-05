from __future__ import annotations
import json
from pathlib import Path

def write_export_pack(output_dir: Path, data: dict, pricing: dict, summary: dict, scenarios: dict, audit: dict) -> Path:
    output_dir.mkdir(parents=True, exist_ok=True)
    (output_dir / "pricing_output.json").write_text(json.dumps(pricing, indent=2), encoding="utf-8")
    (output_dir / "summary_output.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    (output_dir / "scenario_output.json").write_text(json.dumps(scenarios, indent=2), encoding="utf-8")
    (output_dir / "audit_trail.json").write_text(json.dumps(audit, indent=2), encoding="utf-8")
    md = f"""# AndyAI Finance Engine — Demo Export Pack

## Project

**{summary['project_name']}**

## Financial Summary

| Metric | Value |
|---|---:|
| Currency | {summary['currency']} |
| Year 1 Revenue | {summary['year_1_revenue']} |
| Year 1 Profit | {summary['year_1_profit']} |
| Year 1 Margin | {summary['year_1_margin']} |
| Ending MRR | {summary['ending_mrr']} |
| Ending ARR | {summary['ending_arr']} |

## Scenarios

| Scenario | Ending ARR | Note |
|---|---:|---|
| Conservative | {scenarios['conservative']['ending_arr']} | {scenarios['conservative']['note']} |
| Base | {scenarios['base']['ending_arr']} | {scenarios['base']['note']} |
| Optimistic | {scenarios['optimistic']['ending_arr']} | {scenarios['optimistic']['note']} |

## Human Approval Gate

- [ ] Assumptions reviewed
- [ ] Formula logic reviewed
- [ ] Export pack approved

> AI can build the model fast. But the human must verify that the model tells the truth.
"""
    out = output_dir / "DEMO_EXPORT_PACK.md"
    out.write_text(md, encoding="utf-8")
    return out
