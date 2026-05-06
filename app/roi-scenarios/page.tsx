import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — ROI Scenario Explorer Prototype",
  description: "Adds a static ROI scenario explorer for value explanation.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/roi-scenarios"
      badge="v26.0.0"
      title="ROI Scenario Explorer Prototype"
      accent="safe public surface."
      lead="Adds a static ROI scenario explorer for value explanation."
      right={<EvidenceConsole rows={[
        ["Route", "/roi-scenarios", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a static ROI scenario explorer for value explanation."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "ROI logic becomes visible without calculator runtime."],
      ] as any} />
    </PrestigePage>
  );
}
