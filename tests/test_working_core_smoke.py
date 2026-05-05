from pathlib import Path
import json

def test_demo_input_exists():
    p = Path("examples/working-core/saas_business_input.json")
    assert p.exists()
    data = json.loads(p.read_text())
    assert data["project_name"]
    assert "pricing" in data
