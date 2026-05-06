import type { FinanceEngineReadOnlyTable } from "./supabase-lab-read-only-tables";

export type ServerSideReadOnlyExecutorResult =
  | { readonly ok: true; readonly mode: "server_side_read_only_candidate"; readonly table: FinanceEngineReadOnlyTable; readonly rowsRead: number; readonly mutationAllowed: false; readonly productionRuntimeAllowed: false; readonly evidence: string[] }
  | { readonly ok: false; readonly mode: "server_side_read_only_candidate"; readonly table?: FinanceEngineReadOnlyTable; readonly errorCode: "TABLE_NOT_ALLOWED" | "MISSING_REASON" | "EXECUTION_NOT_ENABLED" | "RUNTIME_BOUNDARY_BLOCKED"; readonly mutationAllowed: false; readonly productionRuntimeAllowed: false; readonly evidence: string[] };

export function createExecutionBlockedResult(evidence: string[] = []): ServerSideReadOnlyExecutorResult {
  return { ok: false, mode: "server_side_read_only_candidate", errorCode: "EXECUTION_NOT_ENABLED", mutationAllowed: false, productionRuntimeAllowed: false, evidence };
}
