import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Governance Maturity Matrix",
  description: "Adds governance maturity matrix route.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/governance-matrix"
      badge="v44.0.0"
      title="Governance Maturity Matrix"
      accent="safe public surface."
      lead="Adds governance maturity matrix route."
      right={<EvidenceConsole rows={[
        ["Route", "/governance-matrix", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds governance maturity matrix route."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Governance can be explained by maturity levels."],
      ] as any} />
    </PrestigePage>
  );
}
