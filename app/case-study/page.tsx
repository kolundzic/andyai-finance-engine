import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Case Study Template",
  description: "Template for future client proof stories.",
};

export default function CaseStudyPage() {
  return (
    <PrestigePage
      active="/demo"
      badge="Case Study Template"
      title="Proof stories need"
      accent="structure."
      lead="A future case study should show the business problem, model workflow, evidence found, approval path, and result."
      right={<EvidenceConsole rows={[
        ["Client data", "placeholder", "blue"],
        ["Private info", "not shown", "green"],
        ["Evidence", "structured", "gold"],
        ["Result", "reviewable", "blue"],
      ]} />}
    >
      <FeatureGrid items={[
        ["Problem", "Business planning lacked structured financial evidence.", "Start with the pain."],
        ["Workflow", "Inputs were mapped into a reviewable model process.", "Show the method."],
        ["Evidence", "Assumptions and risks were made visible.", "Show proof."],
        ["Outcome", "Client received a clearer decision path.", "Show value."],
      ]} />
    </PrestigePage>
  );
}
