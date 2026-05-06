import type { FinanceQuotaKey, FinanceRuntimeResult } from "./contracts";

export type QuotaSnapshot = {
  workspaceId: string;
  quotaKey: FinanceQuotaKey;
  usedAmount: number;
  limitAmount: number | "custom" | "not_available";
  windowStart?: string;
  windowEnd?: string;
};

export type UsageEventDraft = {
  workspaceId: string;
  quotaKey: FinanceQuotaKey;
  amount: number;
  eventRef?: string;
};

export type QuotaRuntime = {
  readQuota: (
    workspaceId: string,
    quotaKey: FinanceQuotaKey
  ) => Promise<FinanceRuntimeResult<QuotaSnapshot>>;

  recordUsageEvent: (
    event: UsageEventDraft
  ) => Promise<FinanceRuntimeResult<UsageEventDraft>>;
};

export const quotaRuntimeBoundary = {
  implementationStatus: "interface_only",
  runtimeEnforcementEnabled: false,
  billingProviderRequired: false,
  auditMustNotBeHiddenByQuota: true
} as const;
