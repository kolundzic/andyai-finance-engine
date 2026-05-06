import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Read-Only to Write Path Transition Matrix",
  description: "Explains how the product may safely move from read-only to write-enabled later.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/write-transition"
      badge="v66.0.0"
      title="Read-Only to Write Path Transition Matrix"
      accent="controlled future gate."
      lead="Explains how the product may safely move from read-only to write-enabled later."
      right={<EvidenceConsole rows={[
        ["Route", "/write-transition", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Explains how the product may safely move from read-only to write-enabled later."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Transition is mapped, not activated."],
      ] as any} />
    </PrestigePage>
  );
}
