import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Legal Disclaimer and Finance Safety Copy",
  description: "Adds finance-safety language for client-facing routes.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/finance-safety"
      badge="v69.0.0"
      title="Legal Disclaimer and Finance Safety Copy"
      accent="controlled future gate."
      lead="Adds finance-safety language for client-facing routes."
      right={<EvidenceConsole rows={[
        ["Route", "/finance-safety", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds finance-safety language for client-facing routes."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Financial advice boundary is clarified."],
      ] as any} />
    </PrestigePage>
  );
}
