import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Pre-v80 Audit Seal",
  description: "Adds final audit checkpoint before runtime gate readiness lock.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/pre-v80-audit"
      badge="v79.0.0"
      title="Pre-v80 Audit Seal"
      accent="controlled future gate."
      lead="Adds final audit checkpoint before runtime gate readiness lock."
      right={<EvidenceConsole rows={[
        ["Route", "/pre-v80-audit", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds final audit checkpoint before runtime gate readiness lock."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Pre-v80 proof is sealed."],
      ] as any} />
    </PrestigePage>
  );
}
