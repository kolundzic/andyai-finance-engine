import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — Proof before automation.",
  description: "A client should see what the system can explain, what is blocked, and where human review is required before anything operational happens.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/proof"
      eyebrow="Read-only proof surface"
      title="Proof before automation."
      lead="A client should see what the system can explain, what is blocked, and where human review is required before anything operational happens."
      right={<TrustSignal rows={[
        ["Proof mode", "Read-only public explanation", "blue"],
        ["Hidden mutation", "Blocked from public demo", "green"],
        ["Auditability", "Designed into the workflow", "green"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["🔍", "Source clarity", "The workflow must show what input shaped the output."],
          ["📌", "Assumption ledger", "Key assumptions should be visible before model use."],
          ["🧱", "Safety boundary", "Public proof pages are not payment, write, or execution surfaces."],
      ] as any} />
      <ClarityPanel title="What proof means here">
        <p>Proof means the system can explain the path from input to model preview, including assumptions, limits, and approval points.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
