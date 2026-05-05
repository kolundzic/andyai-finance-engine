from __future__ import annotations
import json
from pathlib import Path

def load_business_input(path: Path) -> dict:
    if not path.exists():
        raise FileNotFoundError(f"Input not found: {path}")
    with path.open("r", encoding="utf-8") as f:
        data = json.load(f)
    required = ["project_name", "currency", "pricing", "costs", "growth"]
    missing = [k for k in required if k not in data]
    if missing:
        raise ValueError(f"Missing required fields: {missing}")
    return data
