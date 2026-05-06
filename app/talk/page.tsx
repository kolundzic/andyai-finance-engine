import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Talk Layer Candidate",
  description: "A guided explanation layer for proof, safety, and human approval.",
};

export default function TalkPage() {
  return (
    <PrestigePage
      active="/talk"
      badge="Talk Layer Candidate"
      title="The product can explain"
      accent="without executing."
      lead="This is the first talk-layer surface: a guided explanation concept for proof, safety, governance, and client understanding. No voice provider is connected yet."
      right={<EvidenceConsole rows={[
        ["Voice provider", "not connected", "green"],
        ["Microphone", "disabled", "green"],
        ["Recording", "disabled", "green"],
        ["External AI calls", "disabled", "green"],
        ["Execution", "blocked", "green"],
        ["Human approval", "required", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🗣️", "Product Guide", "Explains what AndyAI Finance Engine does in plain language."],
        ["🛡️", "Proof Narrator", "Explains read-only proof, blocked mutation, and why the hands remain locked."],
        ["🤝", "Client Briefing", "Helps a potential client understand value, safety, and next steps."],
        ["🧭", "Operator Coach", "Guides the human operator through evidence before approval."],
      ]} />
    </PrestigePage>
  );
}
