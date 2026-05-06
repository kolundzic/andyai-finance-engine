import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Client Portal",
  description: "Static client portal preview.",
};

export default function ClientPortalPage() {
  return (
    <PrestigePage
      active="/client-portal"
      badge="Client Portal Preview"
      title="One place for the"
      accent="pilot story."
      lead="This static portal preview organizes pilot intake, readiness, evidence, proposal, and handoff routes without account login or data storage."
      right={<EvidenceConsole rows={[
        ["Login", "not active", "green"],
        ["Account data", "not stored", "green"],
        ["Portal mode", "static", "blue"],
        ["Pilot path", "visible", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["Intake", "Pilot intake", "Context, goals, source materials, approval boundary."],
        ["Readiness", "Readiness review", "What must be true before modeling begins."],
        ["Evidence", "Evidence preview", "What proof pack sections may include."],
        ["Proposal", "Proposal preview", "How a pilot offer may be structured."],
      ]} />
    </PrestigePage>
  );
}
