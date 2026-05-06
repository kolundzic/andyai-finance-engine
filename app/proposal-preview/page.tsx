import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Proposal Preview",
  description: "Static pilot proposal preview.",
};

export default function ProposalPreviewPage() {
  return (
    <PrestigePage
      active="/offers"
      badge="Pilot Proposal Preview"
      title="A pilot proposal"
      accent="without payment runtime."
      lead="This static page previews how a governed finance-model readiness pilot could be presented to a client."
      right={<EvidenceConsole rows={[
        ["Payment", "disabled", "green"],
        ["Checkout", "blocked", "green"],
        ["Proposal", "static", "blue"],
        ["Human follow-up", "required", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["Scope", "Finance Model Readiness Pilot", "Review inputs, assumptions, workflow, risk, and approval gates."],
        ["Deliverables", "Evidence pack", "Brief, checklist, assumptions register, and next-step memo."],
        ["Boundary", "No production automation", "The pilot does not activate writes, billing, or payment execution."],
      ]} />
    </PrestigePage>
  );
}
