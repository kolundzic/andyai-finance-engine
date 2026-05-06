import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Audit Trail",
  description: "Financial output must leave evidence.",
};

export default function AuditPage() {
  return (
    <PrestigePage
      active="/audit"
      badge="Audit Trail"
      title="Financial output must leave"
      accent="evidence."
      lead="Audit events make assumptions, warnings, model decisions, approvals, and export metadata visible before human approval."
      right={<EvidenceConsole rows={[
        ["Input loaded", "tracked", "green"],
        ["Assumption check", "required", "gold"],
        ["Human approval", "required", "gold"],
        ["Mutation", "blocked", "green"],
        ["Proof state", "visible", "blue"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🧠", "Assumption visibility", "Every financial model should expose the assumptions behind its numbers."],
        ["⚠️", "Warning capture", "Risk signals and weak inputs become visible before output is trusted."],
        ["🧍", "Human approval", "The operator remains the authority gate before execution or delivery."],
        ["📦", "Export evidence", "Future PDF/Excel exports should carry proof metadata, not just polished numbers."],
      ]} />
    </PrestigePage>
  );
}
