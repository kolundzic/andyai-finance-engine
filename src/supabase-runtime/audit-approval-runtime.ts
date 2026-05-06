import type {
  FinanceApprovalStatus,
  FinanceRuntimeResult
} from "./contracts";

export type AuditEventDraft = {
  workspaceId: string;
  actorUserId?: string;
  eventType: string;
  eventPayload: Record<string, unknown>;
};

export type ApprovalDecisionDraft = {
  workspaceId: string;
  projectRef?: string;
  modelRunRef?: string;
  status: FinanceApprovalStatus;
  reviewerUserId?: string;
  decisionNote?: string;
};

export type AuditApprovalRuntime = {
  recordAuditEvent: (
    event: AuditEventDraft
  ) => Promise<FinanceRuntimeResult<AuditEventDraft>>;

  recordApprovalDecision: (
    decision: ApprovalDecisionDraft
  ) => Promise<FinanceRuntimeResult<ApprovalDecisionDraft>>;
};

export const auditApprovalRuntimeBoundary = {
  implementationStatus: "interface_only",
  auditAppendRequired: true,
  humanApprovalRequired: true,
  liveDatabaseCallsEnabled: false
} as const;
