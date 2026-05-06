import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Analytics Plan No Tracking",
  description: "Adds analytics plan while keeping tracking runtime disabled.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/analytics-plan"
      badge="v41.0.0"
      title="Analytics Plan No Tracking"
      accent="safe public surface."
      lead="Adds analytics plan while keeping tracking runtime disabled."
      right={<EvidenceConsole rows={[
        ["Route", "/analytics-plan", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds analytics plan while keeping tracking runtime disabled."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Analytics is planned without tracking."],
      ] as any} />
    </PrestigePage>
  );
}
