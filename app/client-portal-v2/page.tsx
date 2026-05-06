import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Client Portal Narrative Upgrade",
  description: "Upgrades the client portal story and clarifies the public pilot route map.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/client-portal-v2"
      badge="v24.0.0"
      title="Client Portal Narrative Upgrade"
      accent="safe public surface."
      lead="Upgrades the client portal story and clarifies the public pilot route map."
      right={<EvidenceConsole rows={[
        ["Route", "/client-portal-v2", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Upgrades the client portal story and clarifies the public pilot route map."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Client portal becomes clearer and more commercial."],
      ] as any} />
    </PrestigePage>
  );
}
