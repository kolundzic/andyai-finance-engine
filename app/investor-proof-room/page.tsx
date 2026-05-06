import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Investor Proof Room",
  description: "Creates investor proof-room surface for product logic and maturity.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/investor-proof-room"
      badge="v76.0.0"
      title="Investor Proof Room"
      accent="controlled future gate."
      lead="Creates investor proof-room surface for product logic and maturity."
      right={<EvidenceConsole rows={[
        ["Route", "/investor-proof-room", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Creates investor proof-room surface for product logic and maturity."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Investor-facing proof gets its own room."],
      ] as any} />
    </PrestigePage>
  );
}
