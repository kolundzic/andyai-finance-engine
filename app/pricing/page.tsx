import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — Clear packages without checkout risk.",
  description: "Pricing is presented as pilot-oriented packages. Checkout and payment remain blocked until a later approved runtime gate.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/pricing"
      eyebrow="Static pricing packages"
      title="Clear packages without checkout risk."
      lead="Pricing is presented as pilot-oriented packages. Checkout and payment remain blocked until a later approved runtime gate."
      right={<TrustSignal rows={[
        ["Checkout", "Not enabled", "green"],
        ["Payment", "Not enabled", "green"],
        ["Sales motion", "Pilot conversation first", "blue"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["Starter Pilot", "Discovery + sample model review", "For validating one document-to-model workflow."],
          ["Team Pilot", "Multi-source evidence workflow", "For finance teams that need structured review and approval."],
          ["Enterprise Pilot", "Governance + audit trail design", "For regulated or higher-risk financial workflows."],
      ] as any} />
      <ClarityPanel title="Pricing rule">
        <p>The public site may explain offer structure, but it does not process payment or create a checkout session.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
