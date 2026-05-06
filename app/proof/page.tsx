import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Proof Hub",
  description: "Public proof routes and safety boundaries.",
};

export default function ProofHubPage() {
  return (
    <PrestigePage
      active="/finance-proof"
      badge="Proof Hub"
      title="Proof is not decoration."
      accent="It is the product boundary."
      lead="This hub maps the public proof routes and shows how the engine separates visibility from execution."
      right={<EvidenceConsole rows={[
        ["Main proof", "/finance-proof", "blue"],
        ["Status API", "/api/finance/read-only/status", "blue"],
        ["Mutation", "blocked", "green"],
        ["Execution", "gated", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🔗", "Finance proof", "The public human-readable proof page."],
        ["{}", "Runtime JSON", "The machine-readable status endpoint."],
        ["🧱", "Route map", "A visible public route portfolio for client review."],
        ["🛡️", "Safety lock", "Proof can be displayed without activating write runtime."],
      ]} />
    </PrestigePage>
  );
}
