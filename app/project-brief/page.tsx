import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Project Brief Preview",
  description: "Static project brief preview.",
};

export default function ProjectBriefPage() {
  return (
    <PrestigePage
      active="/client-portal"
      badge="Project Brief Preview"
      title="Turn intake into"
      accent="a pilot brief."
      lead="This static page shows how intake context can become a structured project brief for human review."
      right={<EvidenceConsole rows={[
        ["Generated live", "no", "green"],
        ["Static preview", "yes", "blue"],
        ["Human review", "required", "gold"],
        ["Database write", "blocked", "green"],
      ]} />}
    >
      <FeatureGrid items={[
        ["Context", "Business summary", "What the client is trying to model."],
        ["Goal", "Financial output", "What kind of model or decision is needed."],
        ["Inputs", "Source readiness", "What materials exist and what is missing."],
        ["Approval", "Human owner", "Who reviews assumptions before output."],
      ]} />
    </PrestigePage>
  );
}
