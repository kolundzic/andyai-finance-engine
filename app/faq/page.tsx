import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Support FAQ Layer",
  description: "Adds a support FAQ layer for common client questions.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/faq"
      badge="v33.0.0"
      title="Support FAQ Layer"
      accent="safe public surface."
      lead="Adds a support FAQ layer for common client questions."
      right={<EvidenceConsole rows={[
        ["Route", "/faq", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a support FAQ layer for common client questions."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Support story becomes public."],
      ] as any} />
    </PrestigePage>
  );
}
