import type { FinanceRuntimeResult } from "./contracts";

export type ManualReviewSeverity = "low" | "normal" | "high" | "critical";
export type ManualReviewStatus = "open" | "in_review" | "resolved" | "dismissed";

export type ManualReviewRequest = {
  workspaceId: string;
  reason: string;
  severity: ManualReviewSeverity;
  sourceRef?: string;
};

export type ManualReviewRecord = ManualReviewRequest & {
  status: ManualReviewStatus;
  createdAt?: string;
  resolvedAt?: string;
};

export type ManualReviewRuntime = {
  openReview: (
    request: ManualReviewRequest
  ) => Promise<FinanceRuntimeResult<ManualReviewRecord>>;

  resolveReview: (
    reviewId: string,
    note: string
  ) => Promise<FinanceRuntimeResult<{ reviewId: string; status: "resolved" }>>;
};

export const manualReviewRuntimeBoundary = {
  implementationStatus: "interface_only",
  manualReviewRequiredForAmbiguousStates: true,
  liveDatabaseCallsEnabled: false
} as const;
