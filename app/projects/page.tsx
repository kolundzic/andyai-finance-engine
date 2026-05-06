import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Projects",
  description: "Client finance work needs project memory.",
};

export default function ProjectsPage() {
  return (
    <PrestigePage
      active="/projects"
      badge="Project Workspace"
      title="Client finance work needs"
      accent="project memory."
      lead="Projects group business inputs, runs, approvals, exports, and evidence into one governed workspace."
      right={<EvidenceConsole rows={[
        ["Workspace", "planned", "blue"],
        ["Client inputs", "organized", "green"],
        ["Approvals", "linked", "gold"],
        ["Exports", "evidence-ready", "blue"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🏢", "Client workspace", "Every client or business case should have its own finance memory container."],
        ["📁", "Input library", "Plans, assumptions, and source data are organized before modeling begins."],
        ["🧾", "Evidence package", "The final model should include proof, not just calculations."],
        ["🔐", "Boundary control", "Sensitive data remains governed by approval and runtime gates."],
      ]} />
    </PrestigePage>
  );
}
