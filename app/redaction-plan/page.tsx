import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Redaction and Privacy Filter Plan",
  description: "Plans how sensitive client content should be reduced before review or export.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/redaction-plan"
      badge="v54.0.0"
      title="Redaction and Privacy Filter Plan"
      accent="controlled future gate."
      lead="Plans how sensitive client content should be reduced before review or export."
      right={<EvidenceConsole rows={[
        ["Route", "/redaction-plan", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Plans how sensitive client content should be reduced before review or export."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Privacy thinking becomes part of the runtime gate."],
      ] as any} />
    </PrestigePage>
  );
}
