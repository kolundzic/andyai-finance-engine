import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — Start with a controlled pilot, not blind automation.",
  description: "The pilot path gathers business context, model goals, source material, and approval ownership before any live runtime is enabled.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/pilot"
      eyebrow="Pilot intake preview"
      title="Start with a controlled pilot, not blind automation."
      lead="The pilot path gathers business context, model goals, source material, and approval ownership before any live runtime is enabled."
      right={<TrustSignal rows={[
        ["Live submit", "Still disabled in public demo", "green"],
        ["Approval owner", "Required for serious workflow", "green"],
        ["Pilot outcome", "Reviewable model preview", "blue"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["1", "Business context", "Define the company, use case, and financial question."],
          ["2", "Source material", "Prepare documents, spreadsheets, assumptions, and supporting evidence."],
          ["3", "Review gate", "Human approval decides what moves from draft to usable output."],
      ] as any} />
      <ClarityPanel title="Pilot promise">
        <p>A good pilot does not begin with automation. It begins with scope, evidence, boundaries, and a named approval owner.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
