import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Admin Review Console Blueprint",
  description: "Defines future admin review console boundaries.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/admin-review"
      badge="v64.0.0"
      title="Admin Review Console Blueprint"
      accent="controlled future gate."
      lead="Defines future admin review console boundaries."
      right={<EvidenceConsole rows={[
        ["Route", "/admin-review", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines future admin review console boundaries."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Admin review is planned without admin runtime."],
      ] as any} />
    </PrestigePage>
  );
}
