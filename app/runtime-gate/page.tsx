import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Live Pilot Intake Draft Runtime Gate",
  description: "Defines the first future gate toward live pilot intake draft handling without enabling live submit.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/runtime-gate"
      badge="v51.0.0"
      title="Live Pilot Intake Draft Runtime Gate"
      accent="controlled future gate."
      lead="Defines the first future gate toward live pilot intake draft handling without enabling live submit."
      right={<EvidenceConsole rows={[
        ["Route", "/runtime-gate", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines the first future gate toward live pilot intake draft handling without enabling live submit."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Runtime gate is described, not activated."],
      ] as any} />
    </PrestigePage>
  );
}
