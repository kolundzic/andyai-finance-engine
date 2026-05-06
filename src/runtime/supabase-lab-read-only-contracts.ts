export const READ_ONLY_OPERATIONS = ["select", "metadata"] as const;

export type ReadOnlyOperation = (typeof READ_ONLY_OPERATIONS)[number];

export const BLOCKED_MUTATION_OPERATIONS = [
  "insert",
  "update",
  "delete",
  "upsert",
  "truncate",
  "drop",
  "alter",
  "create",
  "grant",
  "revoke",
  "mutation_rpc",
] as const;

export type BlockedMutationOperation =
  (typeof BLOCKED_MUTATION_OPERATIONS)[number];

export type ReadOnlyRuntimeContract = {
  readonly mode: "supabase_lab_read_only";
  readonly allowedOperations: readonly ReadOnlyOperation[];
  readonly blockedOperations: readonly BlockedMutationOperation[];
  readonly mutationAllowed: false;
  readonly productionRuntimeAllowed: false;
  readonly billingAllowed: false;
  readonly checkoutAllowed: false;
  readonly webhooksAllowed: false;
};

export const READ_ONLY_RUNTIME_CONTRACT: ReadOnlyRuntimeContract = {
  mode: "supabase_lab_read_only",
  allowedOperations: READ_ONLY_OPERATIONS,
  blockedOperations: BLOCKED_MUTATION_OPERATIONS,
  mutationAllowed: false,
  productionRuntimeAllowed: false,
  billingAllowed: false,
  checkoutAllowed: false,
  webhooksAllowed: false,
};

export function assertReadOnlyOperation(
  operation: string,
): asserts operation is ReadOnlyOperation {
  if (!READ_ONLY_OPERATIONS.includes(operation as ReadOnlyOperation)) {
    throw new Error("Operation is not allowed in read-only runtime.");
  }
}

export function isBlockedMutationOperation(operation: string): boolean {
  return BLOCKED_MUTATION_OPERATIONS.includes(
    operation as BlockedMutationOperation,
  );
}
