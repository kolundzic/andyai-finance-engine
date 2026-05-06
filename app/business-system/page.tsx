import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Public Business System Lock",
  description: "Locks the public business system surface from v20.1.0 through v50.0.0.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/business-system"
      badge="v50.0.0"
      title="Public Business System Lock"
      accent="safe public surface."
      lead="Locks the public business system surface from v20.1.0 through v50.0.0."
      right={<EvidenceConsole rows={[
        ["Route", "/business-system", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Locks the public business system surface from v20.1.0 through v50.0.0."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "The public business system layer is sealed."],
      ] as any} />
    </PrestigePage>
  );
}
