import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Talk Safety",
  description: "The talk layer safety boundary.",
};

export default function TalkSafetyPage() {
  return (
    <PrestigePage
      active="/talk"
      badge="Talk Safety"
      title="The guide can explain."
      accent="It cannot execute."
      lead="This page documents the safety boundary of the talk layer: no microphone, no recording, no provider calls, no external AI calls, no database writes."
      right={<EvidenceConsole rows={[
        ["Microphone", "disabled", "green"],
        ["Recording", "disabled", "green"],
        ["Provider", "not connected", "green"],
        ["External calls", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Human approval", "required", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🚫", "No microphone", "The current talk layer does not request microphone access."],
        ["🔒", "No recording", "No audio recording runtime is active."],
        ["🛡️", "No provider", "No external AI provider is connected in this layer."],
        ["✅", "Approval-first", "The human remains the authority gate."],
      ]} />
    </PrestigePage>
  );
}
