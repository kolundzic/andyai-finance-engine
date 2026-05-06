import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Public Roadmap v2",
  description: "Adds second public roadmap surface after v50 growth.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/roadmap-v2"
      badge="v77.0.0"
      title="Public Roadmap v2"
      accent="controlled future gate."
      lead="Adds second public roadmap surface after v50 growth."
      right={<EvidenceConsole rows={[
        ["Route", "/roadmap-v2", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds second public roadmap surface after v50 growth."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Roadmap is refreshed."],
      ] as any} />
    </PrestigePage>
  );
}
