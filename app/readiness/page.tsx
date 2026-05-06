import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Readiness",
  description: "Static pilot readiness explanation.",
};

export default function ReadinessPage() {
  return (
    <PrestigePage
      active="/pilot-intake"
      badge="Pilot Readiness"
      title="Readiness before"
      accent="automation."
      lead="This static page explains what must be clear before a finance workflow should move from idea to serious model output."
      right={<EvidenceConsole rows={[
        ["Business context", "required", "gold"],
        ["Source materials", "required", "gold"],
        ["Assumptions", "reviewed", "blue"],
        ["Human approval", "required", "gold"],
        ["Execution", "blocked", "green"],
      ]} />}
    >
      <FeatureGrid items={[
        ["1", "Clear goal", "The desired model output must be known before building."],
        ["2", "Source context", "Inputs and assumptions must be identified."],
        ["3", "Risk review", "Weak or missing information must be visible."],
        ["4", "Approval owner", "A human owner must approve before delivery."],
      ]} />
    </PrestigePage>
  );
}
