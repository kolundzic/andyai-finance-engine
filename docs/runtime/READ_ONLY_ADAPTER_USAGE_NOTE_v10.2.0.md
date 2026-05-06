# Read-Only Adapter Usage Note v10.2.0

## Example

```ts
import {
  createNewestFirstReadOnlyQueryPlan,
  getReadOnlyAdapterStatus,
} from "./src/runtime/supabase-lab-read-only-adapter";

const status = getReadOnlyAdapterStatus();

const plan = createNewestFirstReadOnlyQueryPlan("fe_audit_events", 10);
```

## Meaning

This produces a query plan only.

It does not connect to Supabase.

It does not execute a database command.

## Safety Boundary

The adapter status must keep these values disabled:

```text
mutationAllowed: false
productionRuntimeAllowed: false
billingAllowed: false
checkoutAllowed: false
webhooksAllowed: false
```

## Next Step

A later checkpoint may add a server-side read executor.

That future executor must remain read-only and must pass a separate gate.
