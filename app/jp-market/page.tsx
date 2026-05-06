import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Japanese Market Landing Surface",
  description: "Adds Japanese-market positioning surface for future localization.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/jp-market"
      badge="v73.0.0"
      title="Japanese Market Landing Surface"
      accent="controlled future gate."
      lead="Adds Japanese-market positioning surface for future localization."
      right={<EvidenceConsole rows={[
        ["Route", "/jp-market", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds Japanese-market positioning surface for future localization."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Japan-first positioning becomes visible."],
      ] as any} />
    </PrestigePage>
  );
}
