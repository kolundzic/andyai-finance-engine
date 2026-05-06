import { ClarityPanel, PublicProductPage, SectionGrid, TrustSignal } from "../../src/ui/public-product-shell";

export const metadata = {
  title: "AndyAI Finance Engine — Internal routes are for builders, not the main client journey.",
  description: "The project can keep labs, proofs, runtime gates, and development surfaces without pushing all of them into the public navigation.",
};

export default function Page() {
  return (
    <PublicProductPage
      active="/internal-map"
      eyebrow="Internal route map"
      title="Internal routes are for builders, not the main client journey."
      lead="The project can keep labs, proofs, runtime gates, and development surfaces without pushing all of them into the public navigation."
      right={<TrustSignal rows={[
        ["Public nav", "Simple", "green"],
        ["Internal routes", "Documented but de-emphasized", "blue"],
        ["Client journey", "Home → Proof → Pilot", "green"],
      ] as any} />}
    >
      <SectionGrid items={[
          ["🏛️", "Showroom", "Home, Proof, Pilot, Pricing, Trust, Roadmap, Talk."],
          ["🧪", "Lab", "Runtime and development pages remain useful for proof and iteration."],
          ["🔐", "Future auth", "Sensitive dashboards can later move behind authentication."],
      ] as any} />
      <ClarityPanel title="Split principle">
        <p>A product can have many internal rooms, but a first-time visitor needs a clean front door.</p>
      </ClarityPanel>
    </PublicProductPage>
  );
}
