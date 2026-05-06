import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Enterprise Pilot Governance Pack",
  description: "Defines enterprise pilot governance expectations.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/enterprise-governance"
      badge="v78.0.0"
      title="Enterprise Pilot Governance Pack"
      accent="controlled future gate."
      lead="Defines enterprise pilot governance expectations."
      right={<EvidenceConsole rows={[
        ["Route", "/enterprise-governance", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines enterprise pilot governance expectations."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Enterprise governance is mapped."],
      ] as any} />
    </PrestigePage>
  );
}
