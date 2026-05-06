import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Partner Pilot Kit",
  description: "Defines a partner pilot kit for agencies and collaborators.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/partner-pilot"
      badge="v72.0.0"
      title="Partner Pilot Kit"
      accent="controlled future gate."
      lead="Defines a partner pilot kit for agencies and collaborators."
      right={<EvidenceConsole rows={[
        ["Route", "/partner-pilot", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines a partner pilot kit for agencies and collaborators."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Partner delivery becomes structured."],
      ] as any} />
    </PrestigePage>
  );
}
