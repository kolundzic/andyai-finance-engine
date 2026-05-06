import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — Trust signals, not scary internal block lists.",
  description: "The public site explains safety in human language: human approval, no hidden execution, read-only proof, and audit-ready workflow design.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/trust"
      eyebrow="Trust signal layer"
      title="Trust signals, not scary internal block lists."
      lead="The public site explains safety in human language: human approval, no hidden execution, read-only proof, and audit-ready workflow design."
      right={<TrustSignal rows={[
        ["Human approval", "Always above automation", "green"],
        ["Financial action", "No hidden execution from demo", "green"],
        ["Trust language", "Client-facing and plain", "blue"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["✅", "Approval required", "Serious outputs must pass a human authority gate."],
          ["🛑", "No hidden execution", "The demo does not secretly submit, bill, or change financial records."],
          ["🧭", "Audit-ready by design", "The workflow is built around traceability and review."],
      ] as any} />
      <ClarityPanel title="Why this matters">
        <p>Clients need to understand what is safe, what is blocked, and why the product is credible.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
