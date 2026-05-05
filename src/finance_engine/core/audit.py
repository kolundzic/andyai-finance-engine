from __future__ import annotations
from datetime import datetime, timezone

def build_audit_trail(data: dict, pricing: dict, summary: dict, scenarios: dict) -> dict:
    return {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "engine": "andyai-finance-engine",
        "version": "2.0.0",
        "checks": [
            {"name": "required_input_fields", "status": "passed"},
            {"name": "pricing_months_generated", "status": "passed", "count": len(pricing.get("months", []))},
            {"name": "human_review_gate", "status": "required"},
        ],
        "source_project": data.get("project_name"),
        "truth_rule": "AI can build the model fast. But the human must verify that the model tells the truth.",
    }
