import type {
  FinanceMembershipState,
  FinanceRuntimeResult,
  FinanceWorkspaceRole
} from "./contracts";

export type WorkspaceMembershipRecord = {
  workspaceId: string;
  userId: string;
  role: FinanceWorkspaceRole;
  membershipState: FinanceMembershipState;
  requiresManualReview: boolean;
};

export type MembershipRepository = {
  getMembershipForUser: (
    workspaceId: string,
    userId: string
  ) => Promise<FinanceRuntimeResult<WorkspaceMembershipRecord>>;

  listWorkspaceMembers: (
    workspaceId: string
  ) => Promise<FinanceRuntimeResult<WorkspaceMembershipRecord[]>>;
};

export const membershipRepositoryRuntimeBoundary = {
  implementationStatus: "interface_only",
  liveSupabaseCallsEnabled: false,
  serviceRoleKeyRequired: false,
  rlsRequiredBeforeLiveUse: true
} as const;
