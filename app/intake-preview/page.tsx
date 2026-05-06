import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Intake Preview Engine Lock",
  description: "Locks the local-only intake preview layer and its no-submit boundary.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/intake-preview"
      badge="v21.0.0"
      title="Intake Preview Engine Lock"
      accent="safe public surface."
      lead="Locks the local-only intake preview layer and its no-submit boundary."
      right={<EvidenceConsole rows={[
        ["Route", "/intake-preview", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Locks the local-only intake preview layer and its no-submit boundary."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Intake preview becomes a stable public surface."],
      ] as any} />
    </PrestigePage>
  );
}
