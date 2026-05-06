import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Supabase Lab",
  description: "Durable memory and proof layer for finance workflows.",
};

export default function SupabasePage() {
  return (
    <PrestigePage
      active="/supabase"
      badge="Supabase Lab Verified"
      title="Durable memory and proof layer"
      accent="for finance workflows."
      lead="Supabase stores controlled project records, business inputs, model runs, audit events, approval decisions, and export package metadata."
      right={<EvidenceConsole rows={[
        ["Connection", "lab verified", "green"],
        ["Verified tables", "10", "gold"],
        ["Runtime mode", "read-only", "blue"],
        ["Service role", "not exposed", "green"],
        ["DB writes", "blocked", "green"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🧱", "Schema foundation", "The lab schema provides durable structure for finance workflows and future client projects."],
        ["🔐", "Runtime separation", "Public routes do not expose DB URL or service role credentials."],
        ["🧾", "Evidence memory", "Audit events and approval decisions are treated as first-class finance records."],
        ["🧪", "Lab before production", "The lab environment proves structure before any production write runtime is activated."],
      ]} />
    </PrestigePage>
  );
}
