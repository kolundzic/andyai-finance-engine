import type { FinanceEngineReadOnlyTable } from "./supabase-lab-read-only-tables";
import { isFinanceEngineReadOnlyTable } from "./supabase-lab-read-only-tables";

export type ServerSideReadOnlyExecutorEnvelope = {
  readonly mode: "server_side_read_only_candidate";
  readonly table: FinanceEngineReadOnlyTable;
  readonly limit: 1 | 5 | 10 | 25 | 50;
  readonly reason: string;
  readonly mutationAllowed: false;
};

export function createServerSideReadOnlyExecutorEnvelope(input: {
  readonly table: string;
  readonly limit?: 1 | 5 | 10 | 25 | 50;
  readonly reason: string;
}): ServerSideReadOnlyExecutorEnvelope {
  if (!isFinanceEngineReadOnlyTable(input.table)) throw new Error("Table outside allowlist.");
  if (!input.reason.trim()) throw new Error("Reason is required.");
  return { mode: "server_side_read_only_candidate", table: input.table, limit: input.limit ?? 10, reason: input.reason, mutationAllowed: false };
}
