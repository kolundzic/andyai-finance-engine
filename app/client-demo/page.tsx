import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Client Demo",
  description: "A guided client explanation for governed financial modeling.",
};

export default function ClientDemoPage() {
  return (
    <PrestigePage
      active="/demo"
      badge="Client Demo Narrator"
      title="From business idea"
      accent="to reviewable model."
      lead="This page explains the product to a potential client: what it does, what it proves, what remains blocked, and why approval matters."
      right={<EvidenceConsole rows={[
        ["Audience", "client", "blue"],
        ["Demo mode", "static", "green"],
        ["Provider", "not connected", "green"],
        ["Writes", "blocked", "green"],
        ["Pilot-ready", "next", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["01", "Business input", "The client brings plans, assumptions, costs, revenue logic, or source documents."],
        ["02", "Structured model draft", "The engine helps organize a reviewable financial model workflow."],
        ["03", "Evidence and warnings", "Assumptions, weak inputs, and risks are surfaced before trust is granted."],
        ["04", "Human approval", "The final authority remains human before any serious decision or output."],
      ]} />
    </PrestigePage>
  );
}
