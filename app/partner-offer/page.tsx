import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Partner Agency Offer Layer",
  description: "Adds partner and agency offer layer for future distribution.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/partner-offer"
      badge="v39.0.0"
      title="Partner Agency Offer Layer"
      accent="safe public surface."
      lead="Adds partner and agency offer layer for future distribution."
      right={<EvidenceConsole rows={[
        ["Route", "/partner-offer", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds partner and agency offer layer for future distribution."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Partner route becomes visible."],
      ] as any} />
    </PrestigePage>
  );
}
