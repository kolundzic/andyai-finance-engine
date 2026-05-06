import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Evidence Pack Assembly Blueprint",
  description: "Plans how evidence packs may be assembled from approved inputs.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/evidence-assembly"
      badge="v61.0.0"
      title="Evidence Pack Assembly Blueprint"
      accent="controlled future gate."
      lead="Plans how evidence packs may be assembled from approved inputs."
      right={<EvidenceConsole rows={[
        ["Route", "/evidence-assembly", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Plans how evidence packs may be assembled from approved inputs."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Evidence assembly is designed but not executed."],
      ] as any} />
    </PrestigePage>
  );
}
