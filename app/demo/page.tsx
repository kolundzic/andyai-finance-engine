import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — One concrete story beats thirty abstract pages.",
  description: "A sample balance sheet or spreadsheet becomes a governed model preview with assumptions, evidence, and a human approval checkpoint.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/demo"
      eyebrow="Demo scenario"
      title="One concrete story beats thirty abstract pages."
      lead="A sample balance sheet or spreadsheet becomes a governed model preview with assumptions, evidence, and a human approval checkpoint."
      right={<TrustSignal rows={[
        ["Sample input", "Demo only", "blue"],
        ["Model output", "Preview only", "green"],
        ["Approval", "Human required", "green"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["📥", "Input", "A sample balance sheet, CSV, or business plan enters the workflow."],
          ["🧠", "Model preview", "The system proposes structure, assumptions, and financial logic."],
          ["🧾", "Evidence pack", "Sources, assumptions, warnings, and review notes travel with the output."],
          ["✅", "Approval gate", "A human decides whether the result can be used."],
      ] as any} />
      <ClarityPanel title="Demo rule">
        <p>The demo must show what the engine does without pretending that production automation is already unlocked.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
