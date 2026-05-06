import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Lead Capture Mock",
  description: "Static lead capture concept for future pilots.",
};

export default function LeadPage() {
  return (
    <PrestigePage
      active="/pilot"
      badge="Lead Capture Mock"
      title="Start with a controlled"
      accent="finance pilot."
      lead="This is a static lead-capture mock. It explains what information a future pilot request would collect. No form submission is active."
      right={<EvidenceConsole rows={[
        ["Form submit", "disabled", "green"],
        ["Network call", "disabled", "green"],
        ["Database write", "blocked", "green"],
        ["Pilot CTA", "visible", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🏢", "Company context", "Business type, model need, and current planning stage."],
        ["📊", "Financial goal", "Projection, budget, pricing, investor, or operating model."],
        ["🧾", "Input readiness", "Documents, assumptions, and existing spreadsheets."],
        ["✅", "Pilot boundary", "Readiness review before production automation."],
      ]} />
    </PrestigePage>
  );
}
