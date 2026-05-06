import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Offers",
  description: "Productized pilot offer scaffold.",
};

export default function OffersPage() {
  return (
    <PrestigePage
      active="/offers"
      badge="Offer Scaffold"
      title="Productized service"
      accent="before SaaS."
      lead="The first monetization layer can be a controlled pilot service before full SaaS runtime is activated."
      right={<EvidenceConsole rows={[
        ["Offer mode", "pilot service", "blue"],
        ["SaaS billing", "not active", "green"],
        ["Checkout", "blocked", "green"],
        ["Client value", "readiness", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["Starter", "Finance Model Readiness Review", "Review inputs, assumptions, and model workflow readiness."],
        ["Core", "Governed Model Workflow Pack", "Map model flow, audit points, and approval gates."],
        ["Premium", "Client Evidence Pack", "Prepare pilot memo, proof map, and export-readiness checklist."],
      ]} />
    </PrestigePage>
  );
}
