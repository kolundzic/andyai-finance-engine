import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Sales Demo Theater Upgrade",
  description: "Upgrades demo-theater planning for client presentations.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/sales-theater"
      badge="v75.0.0"
      title="Sales Demo Theater Upgrade"
      accent="controlled future gate."
      lead="Upgrades demo-theater planning for client presentations."
      right={<EvidenceConsole rows={[
        ["Route", "/sales-theater", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Upgrades demo-theater planning for client presentations."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Sales story becomes presentable."],
      ] as any} />
    </PrestigePage>
  );
}
