import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Trust Center Page",
  description: "Adds a trust center page for proof, boundaries, and governance.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/trust-center"
      badge="v34.0.0"
      title="Trust Center Page"
      accent="safe public surface."
      lead="Adds a trust center page for proof, boundaries, and governance."
      right={<EvidenceConsole rows={[
        ["Route", "/trust-center", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a trust center page for proof, boundaries, and governance."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Trust becomes a first-class public route."],
      ] as any} />
    </PrestigePage>
  );
}
