import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Implementation Roadmap Page",
  description: "Adds implementation roadmap page from static preview to future runtime gates.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/roadmap"
      badge="v36.0.0"
      title="Implementation Roadmap Page"
      accent="safe public surface."
      lead="Adds implementation roadmap page from static preview to future runtime gates."
      right={<EvidenceConsole rows={[
        ["Route", "/roadmap", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds implementation roadmap page from static preview to future runtime gates."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Roadmap becomes public."],
      ] as any} />
    </PrestigePage>
  );
}
