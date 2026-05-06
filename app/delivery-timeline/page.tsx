import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Pilot Delivery Timeline",
  description: "Adds pilot delivery timeline for client expectation setting.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/delivery-timeline"
      badge="v37.0.0"
      title="Pilot Delivery Timeline"
      accent="safe public surface."
      lead="Adds pilot delivery timeline for client expectation setting."
      right={<EvidenceConsole rows={[
        ["Route", "/delivery-timeline", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds pilot delivery timeline for client expectation setting."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Pilot delivery becomes structured."],
      ] as any} />
    </PrestigePage>
  );
}
