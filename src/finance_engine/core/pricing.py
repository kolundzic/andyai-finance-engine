from __future__ import annotations

def calculate_saas_pricing(data: dict) -> dict:
    pricing = data["pricing"]
    costs = data["costs"]
    growth = data["growth"]
    users = int(growth.get("starting_customers", 0))
    monthly_price = float(pricing.get("average_monthly_price", 0))
    churn = float(growth.get("monthly_churn_rate", 0))
    acquisition = int(growth.get("monthly_new_customers", 0))
    fixed_cost = float(costs.get("monthly_fixed_cost", 0))
    variable_cost_per_customer = float(costs.get("variable_cost_per_customer", 0))
    months=[]
    for m in range(1,13):
        users = max(0, int(users * (1 - churn) + acquisition))
        revenue = users * monthly_price
        variable = users * variable_cost_per_customer
        profit = revenue - fixed_cost - variable
        months.append({"month": m, "customers": users, "revenue": round(revenue,2), "fixed_cost": fixed_cost, "variable_cost": round(variable,2), "profit": round(profit,2)})
    arr = months[-1]["revenue"] * 12 if months else 0
    return {"months": months, "ending_arr": round(arr,2), "ending_mrr": months[-1]["revenue"] if months else 0}
