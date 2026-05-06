import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Evidence Builder Prototype",
  description: "Adds a static evidence-pack builder surface for client review.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/evidence-builder"
      badge="v22.0.0"
      title="Evidence Builder Prototype"
      accent="safe public surface."
      lead="Adds a static evidence-pack builder surface for client review."
      right={<EvidenceConsole rows={[
        ["Route", "/evidence-builder", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a static evidence-pack builder surface for client review."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Evidence pack structure becomes visible to clients."],
      ] as any} />
    </PrestigePage>
  );
}
