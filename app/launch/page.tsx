import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Launch Checklist",
  description: "Adds launch checklist for public pilot rollout.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/launch"
      badge="v45.0.0"
      title="Launch Checklist"
      accent="safe public surface."
      lead="Adds launch checklist for public pilot rollout."
      right={<EvidenceConsole rows={[
        ["Route", "/launch", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds launch checklist for public pilot rollout."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Launch readiness becomes explicit."],
      ] as any} />
    </PrestigePage>
  );
}
