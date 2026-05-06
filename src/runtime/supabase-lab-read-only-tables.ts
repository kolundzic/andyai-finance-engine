export const FINANCE_ENGINE_READ_ONLY_TABLES = [
  "fe_approval_decisions",
  "fe_audit_events",
  "fe_export_records",
  "fe_manual_review_queue",
  "fe_membership_states",
  "fe_quota_policies",
  "fe_quota_windows",
  "fe_usage_events",
  "fe_workspace_members",
  "fe_workspaces",
] as const;

export type FinanceEngineReadOnlyTable =
  (typeof FINANCE_ENGINE_READ_ONLY_TABLES)[number];

export function isFinanceEngineReadOnlyTable(
  value: string,
): value is FinanceEngineReadOnlyTable {
  return FINANCE_ENGINE_READ_ONLY_TABLES.includes(
    value as FinanceEngineReadOnlyTable,
  );
}
