import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Runtime Readiness Gate Lock",
  description: "Locks the first runtime-readiness planning layer.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/runtime-readiness"
      badge="v60.0.0"
      title="Runtime Readiness Gate Lock"
      accent="controlled future gate."
      lead="Locks the first runtime-readiness planning layer."
      right={<EvidenceConsole rows={[
        ["Route", "/runtime-readiness", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Locks the first runtime-readiness planning layer."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Runtime readiness is sealed as planning only."],
      ] as any} />
    </PrestigePage>
  );
}
