import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Press Landing Copy Pack",
  description: "Adds press and landing copy pack surface.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/press"
      badge="v46.0.0"
      title="Press Landing Copy Pack"
      accent="safe public surface."
      lead="Adds press and landing copy pack surface."
      right={<EvidenceConsole rows={[
        ["Route", "/press", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds press and landing copy pack surface."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Public storytelling becomes reusable."],
      ] as any} />
    </PrestigePage>
  );
}
