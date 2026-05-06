import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Human Approval Draft Queue Blueprint",
  description: "Defines a future queue where draft outputs wait for human approval.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/approval-queue"
      badge="v55.0.0"
      title="Human Approval Draft Queue Blueprint"
      accent="controlled future gate."
      lead="Defines a future queue where draft outputs wait for human approval."
      right={<EvidenceConsole rows={[
        ["Route", "/approval-queue", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines a future queue where draft outputs wait for human approval."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Human approval remains above automation."],
      ] as any} />
    </PrestigePage>
  );
}
