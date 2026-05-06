import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Pilot",
  description: "Governed Finance Model Readiness Pilot.",
};

export default function PilotPage() {
  return (
    <PrestigePage
      active="/pilot"
      badge="Pilot Offer"
      title="Governed Finance Model"
      accent="Readiness Pilot."
      lead="A controlled pilot for teams that need reviewable financial-model workflows, assumption visibility, and human approval before automation."
      right={<EvidenceConsole rows={[
        ["Pilot type", "readiness", "blue"],
        ["Production writes", "blocked", "green"],
        ["Approval", "required", "gold"],
        ["Deliverable", "evidence pack", "blue"],
      ]} />}
    >
      <FeatureGrid items={[
        ["01", "Intake", "Collect business context, inputs, assumptions, and desired model output."],
        ["02", "Workflow map", "Define how input becomes draft model, evidence, approval, and export."],
        ["03", "Risk review", "Surface weak assumptions, missing inputs, and unsafe automation points."],
        ["04", "Pilot memo", "Deliver a clear readiness memo and next-step recommendation."],
      ]} />
    </PrestigePage>
  );
}
