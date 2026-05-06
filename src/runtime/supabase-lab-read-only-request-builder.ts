import type { ReadOnlyQueryPlan } from "./supabase-lab-read-only-adapter";
import { isFinanceEngineReadOnlyTable } from "./supabase-lab-read-only-tables";

export type ReadOnlyRestRequest = {
  readonly method: "GET";
  readonly path: string;
  readonly table: string;
  readonly bodyAllowed: false;
  readonly requiresPublicApiKeyHeader: true;
};

const SAFE_IDENTIFIER = /^[a-z_][a-z0-9_]*$/;

function assertSafeIdentifier(value: string): void {
  if (!SAFE_IDENTIFIER.test(value)) {
    throw new Error("Unsafe identifier for read-only request plan.");
  }
}

export function buildReadOnlyRestRequest(
  plan: ReadOnlyQueryPlan,
): ReadOnlyRestRequest {
  if (!isFinanceEngineReadOnlyTable(plan.table)) {
    throw new Error("Table is outside the Finance Engine read-only allowlist.");
  }

  assertSafeIdentifier(plan.table);

  const params = new URLSearchParams();
  params.set("select", "*");
  params.set("limit", String(plan.limit));

  if (plan.orderBy) {
    assertSafeIdentifier(plan.orderBy);
    params.set("order", `${plan.orderBy}.${plan.ascending ? "asc" : "desc"}`);
  }

  return {
    method: "GET",
    path: `/rest/v1/${plan.table}?${params.toString()}`,
    table: plan.table,
    bodyAllowed: false,
    requiresPublicApiKeyHeader: true,
  };
}
