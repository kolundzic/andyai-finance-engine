import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Client Journey Simulator Static",
  description: "Adds static client journey simulator route.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/journey-simulator"
      badge="v42.0.0"
      title="Client Journey Simulator Static"
      accent="safe public surface."
      lead="Adds static client journey simulator route."
      right={<EvidenceConsole rows={[
        ["Route", "/journey-simulator", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds static client journey simulator route."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Client journey can be explored safely."],
      ] as any} />
    </PrestigePage>
  );
}
