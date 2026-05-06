import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Local Form Validation Prototype",
  description: "Adds a planning surface for local validation before any server submission exists.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/local-validation"
      badge="v52.0.0"
      title="Local Form Validation Prototype"
      accent="controlled future gate."
      lead="Adds a planning surface for local validation before any server submission exists."
      right={<EvidenceConsole rows={[
        ["Route", "/local-validation", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a planning surface for local validation before any server submission exists."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Validation remains local and non-persistent."],
      ] as any} />
    </PrestigePage>
  );
}
