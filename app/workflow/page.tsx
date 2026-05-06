import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Workflow",
  description: "From business input to governed model output.",
};

export default function WorkflowPage() {
  return (
    <PrestigePage
      active="/workflow"
      badge="Workflow Map"
      title="From business input"
      accent="to governed output."
      lead="The finance workflow turns documents and business ideas into structured, reviewable, evidence-backed model outputs."
      right={<EvidenceConsole rows={[
        ["Step 1", "input", "blue"],
        ["Step 2", "model draft", "blue"],
        ["Step 3", "audit", "gold"],
        ["Step 4", "approval", "gold"],
        ["Step 5", "export", "green"],
      ]} />}
    >
      <FeatureGrid items={[
        ["01", "Input capture", "Business data, assumptions, and source materials enter the workflow."],
        ["02", "Model drafting", "AI helps produce structured projections and model logic."],
        ["03", "Audit review", "Warnings, assumptions, and gaps become visible."],
        ["04", "Approval and export", "Human review precedes any client-ready output."],
      ]} />
    </PrestigePage>
  );
}
