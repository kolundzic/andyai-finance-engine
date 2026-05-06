import {
  createNewestFirstReadOnlyQueryPlan,
  getReadOnlyAdapterStatus,
} from "./supabase-lab-read-only-adapter";
import { FINANCE_ENGINE_READ_ONLY_TABLES } from "./supabase-lab-read-only-tables";

export type ReadOnlyRuntimeDiagnostic = {
  readonly mode: "supabase_lab_read_only_diagnostics";
  readonly tableCount: number;
  readonly mutationAllowed: false;
  readonly productionRuntimeAllowed: false;
  readonly diagnosticPlans: readonly ReturnType<
    typeof createNewestFirstReadOnlyQueryPlan
  >[];
};

export function getReadOnlyRuntimeDiagnostics(): ReadOnlyRuntimeDiagnostic {
  const status = getReadOnlyAdapterStatus();

  return {
    mode: "supabase_lab_read_only_diagnostics",
    tableCount: status.tableCount,
    mutationAllowed: false,
    productionRuntimeAllowed: false,
    diagnosticPlans: FINANCE_ENGINE_READ_ONLY_TABLES.map((table) =>
      createNewestFirstReadOnlyQueryPlan(table, 5),
    ),
  };
}
