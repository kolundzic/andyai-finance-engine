#!/usr/bin/env python3
"""AndyAI Finance Engine CLI."""
from __future__ import annotations
import argparse
from pathlib import Path
from .io.loader import load_business_input
from .core.pricing import calculate_saas_pricing
from .core.summary import generate_financial_summary
from .core.scenario import build_scenarios
from .core.audit import build_audit_trail
from .export.markdown import write_export_pack

def run_demo(input_path: str, output_dir: str) -> None:
    data = load_business_input(Path(input_path))
    pricing = calculate_saas_pricing(data)
    summary = generate_financial_summary(data, pricing)
    scenarios = build_scenarios(data, pricing)
    audit = build_audit_trail(data, pricing, summary, scenarios)
    out = write_export_pack(Path(output_dir), data, pricing, summary, scenarios, audit)
    print(f"🟢 AndyAI Finance Engine demo complete: {out}")

def main() -> None:
    parser = argparse.ArgumentParser(description="AndyAI Finance Engine")
    sub = parser.add_subparsers(dest="command", required=True)
    demo = sub.add_parser("demo", help="Run local end-to-end demo")
    demo.add_argument("--input", default="examples/working-core/saas_business_input.json")
    demo.add_argument("--output", default="reports/demo-output")
    args = parser.parse_args()
    if args.command == "demo":
        run_demo(args.input, args.output)

if __name__ == "__main__":
    main()
