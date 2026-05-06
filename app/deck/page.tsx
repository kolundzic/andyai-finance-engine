import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Investor and Client Deck Surface",
  description: "Adds a static deck surface for investor and client explanation.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/deck"
      badge="v30.0.0"
      title="Investor and Client Deck Surface"
      accent="safe public surface."
      lead="Adds a static deck surface for investor and client explanation."
      right={<EvidenceConsole rows={[
        ["Route", "/deck", "blue"],
        ["Mode", "static preview", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Adds a static deck surface for investor and client explanation."],
        ["🛡️", "Boundary", "This route is a static public surface with no live submit, no network call, and no database write."],
        ["✅", "Human approval", "The system may structure and preview, but the human remains the authority gate."],
        ["📦", "Next asset", "Deck story becomes product surface."],
      ] as any} />
    </PrestigePage>
  );
}
