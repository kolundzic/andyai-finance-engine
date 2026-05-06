import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Supabase Future Write Gate Spec",
  description: "Defines future Supabase write conditions while keeping writes blocked now.",
};

export default function Page() {
  return (
    <PrestigePage
      active="/supabase-write-gate"
      badge="v57.0.0"
      title="Supabase Future Write Gate Spec"
      accent="controlled future gate."
      lead="Defines future Supabase write conditions while keeping writes blocked now."
      right={<EvidenceConsole rows={[
        ["Route", "/supabase-write-gate", "blue"],
        ["Mode", "static gate design", "green"],
        ["Live submit", "disabled", "green"],
        ["Database writes", "blocked", "green"],
        ["Payment", "blocked", "green"],
      ] as any} />}
    >
      <FeatureGrid items={[
        ["🧭", "Purpose", "Defines future Supabase write conditions while keeping writes blocked now."],
        ["🛡️", "Boundary", "Planning and preview only. No submit, write, payment, provider call, or recording."],
        ["✅", "Human gate", "The future runtime must stay below human approval."],
        ["📦", "Lock", "Write gate is specified but locked."],
      ] as any} />
    </PrestigePage>
  );
}
