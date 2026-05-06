import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Audit and Approval Demo Flow",
  description: "Adds a static audit-to-approval demo journey.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/approval-demo"
      badge="v27.0.0"
      title="Audit and Approval Demo Flow"
      accent="safe public surface."
      lead="Adds a static audit-to-approval demo journey."
      right={<EvidenceConsole rows={[
        ["Route", "/approval-demo", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a static audit-to-approval demo journey."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Approval flow becomes a public story."],
      ] as any} />
    </PrestigePage>
  );
}
