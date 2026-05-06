import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — CRM Integration Boundary Spec",
  description: "Defines future CRM integration boundaries without connecting a CRM.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/crm-boundary"
      badge="v58.0.0"
      title="CRM Integration Boundary Spec"
      accent="controlled future gate."
      lead="Defines future CRM integration boundaries without connecting a CRM."
      right={<EvidenceConsole rows={[
        ["Route", "/crm-boundary", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines future CRM integration boundaries without connecting a CRM."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "CRM boundary is planned but disconnected."],
      ] as any} />
    </PrestigePage>
  );
}
