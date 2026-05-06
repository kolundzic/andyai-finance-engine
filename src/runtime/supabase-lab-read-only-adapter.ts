import {
  FINANCE_ENGINE_READ_ONLY_TABLES,
  type FinanceEngineReadOnlyTable,
  isFinanceEngineReadOnlyTable,
} from "./supabase-lab-read-only-tables";

export type ReadOnlyLimit = 1 | 5 | 10 | 25 | 50;

export type ReadOnlyQueryPlan = {
  readonly mode: "supabase_lab_read_only";
  readonly table: FinanceEngineReadOnlyTable;
  readonly limit: ReadOnlyLimit;
  readonly orderBy?: string;
  readonly ascending?: boolean;
};

export type ReadOnlyAdapterStatus = {
  readonly mode: "supabase_lab_read_only";
  readonly mutationAllowed: false;
  readonly productionRuntimeAllowed: false;
  readonly billingAllowed: false;
  readonly checkoutAllowed: false;
  readonly webhooksAllowed: false;
  readonly tableCount: number;
  readonly allowedTables: readonly FinanceEngineReadOnlyTable[];
};

export function getReadOnlyAdapterStatus(): ReadOnlyAdapterStatus {
  return {
    mode: "supabase_lab_read_only",
    mutationAllowed: false,
    productionRuntimeAllowed: false,
    billingAllowed: false,
    checkoutAllowed: false,
    webhooksAllowed: false,
    tableCount: FINANCE_ENGINE_READ_ONLY_TABLES.length,
    allowedTables: FINANCE_ENGINE_READ_ONLY_TABLES,
  };
}

export function createReadOnlyQueryPlan(
  table: string,
  limit: ReadOnlyLimit = 10,
): ReadOnlyQueryPlan {
  if (!isFinanceEngineReadOnlyTable(table)) {
    throw new Error(`Table is outside the Finance Engine read-only allowlist.`);
  }

  return {
    mode: "supabase_lab_read_only",
    table,
    limit,
  };
}

export function createNewestFirstReadOnlyQueryPlan(
  table: string,
  limit: ReadOnlyLimit = 10,
): ReadOnlyQueryPlan {
  const plan = createReadOnlyQueryPlan(table, limit);

  return {
    ...plan,
    orderBy: "created_at",
    ascending: false,
  };
}
