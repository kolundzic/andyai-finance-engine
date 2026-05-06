import type { FinanceApprovalStatus, FinanceRuntimeResult } from "./contracts";

export type ExportSafetyInput = {
  workspaceId: string;
  projectRef?: string;
  exportType: string;
  approvalStatus: FinanceApprovalStatus;
  assumptionsVisible: boolean;
  evidenceAttached: boolean;
  disclaimerAttached: boolean;
};

export type ExportSafetyDecision = {
  allowed: boolean;
  requiresManualReview: boolean;
  reasons: string[];
};

export function evaluateExportSafety(
  input: ExportSafetyInput
): FinanceRuntimeResult<ExportSafetyDecision> {
  const reasons: string[] = [];

  if (!input.assumptionsVisible) reasons.push("assumptions_not_visible");
  if (!input.disclaimerAttached) reasons.push("disclaimer_not_attached");
  if (input.approvalStatus !== "approved") reasons.push("not_human_approved");

  return {
    ok: true,
    data: {
      allowed: reasons.length === 0,
      requiresManualReview: reasons.length > 0,
      reasons
    },
    requiresManualReview: reasons.length > 0
  };
}

export const exportSafetyGateBoundary = {
  implementationStatus: "pure_function_only",
  liveExportRuntimeEnabled: false,
  paidExportEnabled: false,
  humanApprovalRequired: true
} as const;
