import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Error and Recovery SOP",
  description: "Defines how failures should be handled before live runtime exists.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/recovery-sop"
      badge="v67.0.0"
      title="Error and Recovery SOP"
      accent="controlled future gate."
      lead="Defines how failures should be handled before live runtime exists."
      right={<EvidenceConsole rows={[
        ["Route", "/recovery-sop", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines how failures should be handled before live runtime exists."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Recovery discipline is documented."],
      ] as any} />
    </PrestigePage>
  );
}
