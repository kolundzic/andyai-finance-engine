import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Privacy and Security Surface",
  description: "Adds privacy and security explanation surface.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/security"
      badge="v35.0.0"
      title="Privacy and Security Surface"
      accent="safe public surface."
      lead="Adds privacy and security explanation surface."
      right={<EvidenceConsole rows={[
        ["Route", "/security", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds privacy and security explanation surface."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Security posture becomes visible."],
      ] as any} />
    </PrestigePage>
  );
}
