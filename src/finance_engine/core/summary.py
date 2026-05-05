from __future__ import annotations

def generate_financial_summary(data: dict, pricing: dict) -> dict:
    months = pricing["months"]
    total_revenue = sum(m["revenue"] for m in months)
    total_profit = sum(m["profit"] for m in months)
    margin = (total_profit / total_revenue) if total_revenue else 0
    return {
        "project_name": data["project_name"],
        "currency": data["currency"],
        "year_1_revenue": round(total_revenue, 2),
        "year_1_profit": round(total_profit, 2),
        "year_1_margin": round(margin, 4),
        "ending_mrr": pricing["ending_mrr"],
        "ending_arr": pricing["ending_arr"],
        "human_review_required": True,
    }
