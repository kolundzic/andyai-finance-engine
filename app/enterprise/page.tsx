import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Enterprise Brief",
  description: "Adds enterprise brief route for larger client conversations.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/enterprise"
      badge="v47.0.0"
      title="Enterprise Brief"
      accent="safe public surface."
      lead="Adds enterprise brief route for larger client conversations."
      right={<EvidenceConsole rows={[
        ["Route", "/enterprise", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds enterprise brief route for larger client conversations."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Enterprise narrative becomes visible."],
      ] as any} />
    </PrestigePage>
  );
}
