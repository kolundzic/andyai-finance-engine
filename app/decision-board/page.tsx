import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Decision Board Prototype",
  description: "Adds static decision board prototype for pilot review.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/decision-board"
      badge="v43.0.0"
      title="Decision Board Prototype"
      accent="safe public surface."
      lead="Adds static decision board prototype for pilot review."
      right={<EvidenceConsole rows={[
        ["Route", "/decision-board", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds static decision board prototype for pilot review."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Decision board is visible without writes."],
      ] as any} />
    </PrestigePage>
  );
}
