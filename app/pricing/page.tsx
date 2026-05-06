import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Offer and Pricing Static Pack Lock",
  description: "Adds static offer and pricing explanation while keeping checkout blocked.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/pricing"
      badge="v25.0.0"
      title="Offer and Pricing Static Pack Lock"
      accent="safe public surface."
      lead="Adds static offer and pricing explanation while keeping checkout blocked."
      right={<EvidenceConsole rows={[
        ["Route", "/pricing", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds static offer and pricing explanation while keeping checkout blocked."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Pricing can be explained without payment runtime."],
      ] as any} />
    </PrestigePage>
  );
}
