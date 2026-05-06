import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Proposal Workspace Prototype",
  description: "Adds a static proposal workspace for pilot offer review.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/proposal-workspace"
      badge="v23.0.0"
      title="Proposal Workspace Prototype"
      accent="safe public surface."
      lead="Adds a static proposal workspace for pilot offer review."
      right={<EvidenceConsole rows={[
        ["Route", "/proposal-workspace", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a static proposal workspace for pilot offer review."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Proposal logic gets a public workspace."],
      ] as any} />
    </PrestigePage>
  );
}
