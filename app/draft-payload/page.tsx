import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Draft Payload Schema",
  description: "Defines the shape of a future pilot-intake draft payload without writing it anywhere.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/draft-payload"
      badge="v53.0.0"
      title="Draft Payload Schema"
      accent="controlled future gate."
      lead="Defines the shape of a future pilot-intake draft payload without writing it anywhere."
      right={<EvidenceConsole rows={[
        ["Route", "/draft-payload", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines the shape of a future pilot-intake draft payload without writing it anywhere."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Draft payload is designed but not submitted."],
      ] as any} />
    </PrestigePage>
  );
}
