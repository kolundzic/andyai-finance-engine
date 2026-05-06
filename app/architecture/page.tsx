import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — A serious system should be explainable without jargon fog.",
  description: "The architecture is a controlled path: public surface, intake, evidence, model preview, approval gate, audit trail, and future runtime gates.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/architecture"
      eyebrow="Architecture for humans"
      title="A serious system should be explainable without jargon fog."
      lead="The architecture is a controlled path: public surface, intake, evidence, model preview, approval gate, audit trail, and future runtime gates."
      right={<TrustSignal rows={[
        ["Frontend", "Next.js on Vercel", "blue"],
        ["Data layer", "Supabase planned behind gates", "blue"],
        ["Writes", "Blocked until approved runtime", "green"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["🌐", "Public surface", "A clean product showroom for clients."],
          ["📦", "Evidence layer", "A structured pack of sources, assumptions, and review notes."],
          ["🧑‍⚖️", "Approval gate", "Human authority controls serious output usage."],
          ["🧭", "Runtime gates", "Future live actions require explicit safety gates."],
      ] as any} />
      <ClarityPanel title="Architecture promise">
        <p>The system must be explainable to a CFO, a developer, and an auditor without changing its core story.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
