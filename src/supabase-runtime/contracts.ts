export type FinanceMembershipState =
  | "free_preview"
  | "professional"
  | "business_team"
  | "enterprise_custom"
  | "manual_review"
  | "suspended";

export type FinanceWorkspaceRole =
  | "owner"
  | "admin"
  | "operator"
  | "reviewer"
  | "viewer";

export type FinanceApprovalStatus =
  | "draft"
  | "needs_review"
  | "approved"
  | "rejected"
  | "superseded"
  | "archived";

export type FinanceQuotaKey =
  | "projects_per_month"
  | "model_drafts_per_month"
  | "exports_per_month"
  | "team_members"
  | "audit_retention_days"
  | "manual_reviews";

export type FinanceRuntimeResult<T> = {
  ok: boolean;
  data?: T;
  error?: string;
  requiresManualReview?: boolean;
};

export type FinanceRuntimeBoundary = {
  liveDatabaseCallsEnabled: false;
  liveBillingEnabled: false;
  humanApprovalRequired: true;
  auditRequired: true;
};

export const financeRuntimeBoundary: FinanceRuntimeBoundary = {
  liveDatabaseCallsEnabled: false,
  liveBillingEnabled: false,
  humanApprovalRequired: true,
  auditRequired: true
};
