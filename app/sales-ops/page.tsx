import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Sales Ops Runbook",
  description: "Adds a sales operations runbook surface for pilot handling.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/sales-ops"
      badge="v32.0.0"
      title="Sales Ops Runbook"
      accent="safe public surface."
      lead="Adds a sales operations runbook surface for pilot handling."
      right={<EvidenceConsole rows={[
        ["Route", "/sales-ops", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a sales operations runbook surface for pilot handling."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Sales process becomes systematic."],
      ] as any} />
    </PrestigePage>
  );
}
