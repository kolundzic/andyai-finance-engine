import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Client Dashboard UX Blueprint",
  description: "Defines future client dashboard UX without login or account storage.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/client-dashboard"
      badge="v63.0.0"
      title="Client Dashboard UX Blueprint"
      accent="controlled future gate."
      lead="Defines future client dashboard UX without login or account storage."
      right={<EvidenceConsole rows={[
        ["Route", "/client-dashboard", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines future client dashboard UX without login or account storage."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Dashboard remains static planning."],
      ] as any} />
    </PrestigePage>
  );
}
