from __future__ import annotations

def build_scenarios(data: dict, pricing: dict) -> dict:
    base_arr = pricing["ending_arr"]
    return {
        "conservative": {"ending_arr": round(base_arr * 0.75, 2), "note": "Lower acquisition / higher churn"},
        "base": {"ending_arr": round(base_arr, 2), "note": "Current assumptions"},
        "optimistic": {"ending_arr": round(base_arr * 1.35, 2), "note": "Higher acquisition / lower churn"},
    }
