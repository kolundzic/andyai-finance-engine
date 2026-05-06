import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Marketplace Package Surface",
  description: "Defines how future productized packages may be shown publicly.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/marketplace"
      badge="v71.0.0"
      title="Marketplace Package Surface"
      accent="controlled future gate."
      lead="Defines how future productized packages may be shown publicly."
      right={<EvidenceConsole rows={[
        ["Route", "/marketplace", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines how future productized packages may be shown publicly."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Marketplace is surfaced without checkout."],
      ] as any} />
    </PrestigePage>
  );
}
