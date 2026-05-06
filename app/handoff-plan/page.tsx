import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Email-Free Handoff Plan",
  description: "Plans client handoff without automatically sending email or external messages.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/handoff-plan"
      badge="v56.0.0"
      title="Email-Free Handoff Plan"
      accent="controlled future gate."
      lead="Plans client handoff without automatically sending email or external messages."
      right={<EvidenceConsole rows={[
        ["Route", "/handoff-plan", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Plans client handoff without automatically sending email or external messages."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Handoff is structured but not sent."],
      ] as any} />
    </PrestigePage>
  );
}
