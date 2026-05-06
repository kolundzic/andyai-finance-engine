import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Bilingual EN-JP Content Pack",
  description: "Defines bilingual English/Japanese content structure for product pages.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/bilingual-pack"
      badge="v74.0.0"
      title="Bilingual EN-JP Content Pack"
      accent="controlled future gate."
      lead="Defines bilingual English/Japanese content structure for product pages."
      right={<EvidenceConsole rows={[
        ["Route", "/bilingual-pack", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines bilingual English/Japanese content structure for product pages."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Bilingual content plan is locked."],
      ] as any} />
    </PrestigePage>
  );
}
