import { createNewestFirstReadOnlyQueryPlan } from "./supabase-lab-read-only-adapter";
import { buildReadOnlyRestRequest } from "./supabase-lab-read-only-request-builder";
import type { ServerSideReadOnlyExecutorEnvelope } from "./server-side-read-only-executor-envelope";
import type { ServerSideReadOnlyExecutorResult } from "./server-side-read-only-executor-result";
import { createExecutionBlockedResult } from "./server-side-read-only-executor-result";

export type ServerSideReadOnlyExecutorCandidatePlan = {
  readonly enabled: false;
  readonly envelope: ServerSideReadOnlyExecutorEnvelope;
  readonly requestPath: string;
  readonly method: "GET";
  readonly mutationAllowed: false;
};

export function createServerSideReadOnlyExecutorCandidatePlan(envelope: ServerSideReadOnlyExecutorEnvelope): ServerSideReadOnlyExecutorCandidatePlan {
  const plan = createNewestFirstReadOnlyQueryPlan(envelope.table, envelope.limit);
  const request = buildReadOnlyRestRequest(plan);
  return { enabled: false, envelope, requestPath: request.path, method: "GET", mutationAllowed: false };
}

export function executeServerSideReadOnlyCandidateDisabled(): ServerSideReadOnlyExecutorResult {
  return createExecutionBlockedResult(["execution disabled", "separate activation gate required"]);
}
