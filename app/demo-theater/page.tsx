import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Demo Theater Script",
  description: "Adds demo theater script route for guided product performance.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/demo-theater"
      badge="v48.0.0"
      title="Demo Theater Script"
      accent="safe public surface."
      lead="Adds demo theater script route for guided product performance."
      right={<EvidenceConsole rows={[
        ["Route", "/demo-theater", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds demo theater script route for guided product performance."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "The product begins to perform its own story."],
      ] as any} />
    </PrestigePage>
  );
}
