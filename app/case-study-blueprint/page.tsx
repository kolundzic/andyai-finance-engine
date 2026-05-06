import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Case Study Generator Blueprint",
  description: "Adds a case study blueprint without generator runtime.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/case-study-blueprint"
      badge="v31.0.0"
      title="Case Study Generator Blueprint"
      accent="safe public surface."
      lead="Adds a case study blueprint without generator runtime."
      right={<EvidenceConsole rows={[
        ["Route", "/case-study-blueprint", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a case study blueprint without generator runtime."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Case-study structure is defined."],
      ] as any} />
    </PrestigePage>
  );
}
