import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — Governed financial modeling, verified before execution.",
  description: "Turn business documents, spreadsheets, assumptions, and evidence into reviewable financial-model workflows before AI-generated output is approved, exported, or used.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/"
      eyebrow="For finance teams, founders, and operators"
      title="Governed financial modeling, verified before execution."
      lead="Turn business documents, spreadsheets, assumptions, and evidence into reviewable financial-model workflows before AI-generated output is approved, exported, or used."
      right={<TrustSignal rows={[
        ["Human approval", "Required before model output is used", "green"],
        ["Public demo", "Read-only and safe by design", "green"],
        ["Client value", "Less spreadsheet chaos, more reviewable proof", "blue"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["📄", "Document-to-model workflow", "Documents and assumptions become structured model previews."],
          ["🧾", "Evidence before output", "Every serious result should carry assumptions, sources, warnings, and review notes."],
          ["🧑‍⚖️", "Human approval gate", "AI can draft and organize, but a responsible human approves serious financial use."],
      ] as any} />
      <ClarityPanel title="Who this is for">
        <p>AndyAI Finance Engine is for teams that need AI help in finance without losing control over evidence, approval, and auditability.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
