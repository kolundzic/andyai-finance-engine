import { getReadOnlyAdapterStatus } from "./supabase-lab-read-only-adapter";

export type FinanceOnlineProofStatus = {
  readonly product: "AndyAI Finance Engine";
  readonly domain: "finance.andyai.ai";
  readonly mode: "online_proof_read_only";
  readonly databaseApplied: true;
  readonly verifiedTableCount: 10;
  readonly adapterTableCount: number;
  readonly mutationAllowed: false;
  readonly productionRuntimeAllowed: false;
  readonly billingAllowed: false;
  readonly checkoutAllowed: false;
  readonly webhooksAllowed: false;
  readonly paidRuntimeAllowed: false;
  readonly canonicalLine: "The system now has eyes. The hands remain locked.";
};

export function getFinanceOnlineProofStatus(): FinanceOnlineProofStatus {
  const adapter = getReadOnlyAdapterStatus();

  return {
    product: "AndyAI Finance Engine",
    domain: "finance.andyai.ai",
    mode: "online_proof_read_only",
    databaseApplied: true,
    verifiedTableCount: 10,
    adapterTableCount: adapter.tableCount,
    mutationAllowed: false,
    productionRuntimeAllowed: false,
    billingAllowed: false,
    checkoutAllowed: false,
    webhooksAllowed: false,
    paidRuntimeAllowed: false,
    canonicalLine: "The system now has eyes. The hands remain locked.",
  };
}
