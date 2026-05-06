import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";
import { PilotIntakeFormState } from "../../src/intake/pilot-intake-form-state";

export const metadata = {
  title: "AndyAI Finance Engine — Pilot Intake Form State",
  description: "Local-only pilot intake form state prototype.",
};

export default function PilotIntakeFormPage() {
  return (
    <PrestigePage
      active="/pilot-intake-form"
      badge="v20.1.0"
      title="Pilot intake form state"
      accent="without live submit."
      lead="This route demonstrates local checkbox-style intake state and readiness preview without sending, storing, or writing client data."
      right={<EvidenceConsole rows={[
        ["Interaction", "local state", "blue"],
        ["Live submit", "disabled", "green"],
        ["Network call", "disabled", "green"],
        ["Database writes", "blocked", "green"],
      ] as any} />}
    >
      <PilotIntakeFormState />
      <div style={{ marginTop: "28px" }}>
        <FeatureGrid items={[
          ["🧠", "Local form state", "The browser can update readiness preview locally."],
          ["🚫", "No live submit", "There is no form submit handler and no network call."],
          ["🔒", "No database write", "The route does not connect to Supabase or any runtime write path."],
          ["✅", "Human review", "The result is only a preview before human review."],
        ] as any} />
      </div>
    </PrestigePage>
  );
}
