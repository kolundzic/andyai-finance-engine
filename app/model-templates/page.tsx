import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Model Template Library Prototype",
  description: "Adds a static finance model template library surface.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/model-templates"
      badge="v28.0.0"
      title="Model Template Library Prototype"
      accent="safe public surface."
      lead="Adds a static finance model template library surface."
      right={<EvidenceConsole rows={[
        ["Route", "/model-templates", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a static finance model template library surface."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Template direction becomes visible."],
      ] as any} />
    </PrestigePage>
  );
}
