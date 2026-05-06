import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Approval Gate",
  description: "Human authority above automation.",
};

export default function ApprovalPage() {
  return (
    <PrestigePage
      active="/approval"
      badge="Human Authority Gate"
      title="Automation may prepare."
      accent="Humans approve."
      lead="Financial automation should never silently cross the line from proof into execution. Approval is a product feature, not a bureaucratic delay."
      right={<EvidenceConsole rows={[
        ["Authority", "human", "gold"],
        ["Auto-execution", "blocked", "green"],
        ["Review state", "required", "gold"],
        ["Override record", "planned", "blue"],
      ]} />}
    >
      <FeatureGrid items={[
        ["✅", "Approval before execution", "The system can prepare results, but approval remains a deliberate human action."],
        ["🧷", "Accountability chain", "Every approval decision should attach to an operator, context, and evidence packet."],
        ["🚧", "Blocked automation", "No paid runtime, billing, checkout, or write execution is active on the public surface."],
        ["📜", "Decision memory", "Future approval events become durable records in the finance workflow."],
      ]} />
    </PrestigePage>
  );
}
