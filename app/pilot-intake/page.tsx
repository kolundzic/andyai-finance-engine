import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";
import { StaticIntakeConsole } from "../../src/intake/static-intake-console";

export const metadata = {
  title: "AndyAI Finance Engine — Pilot Intake",
  description: "Static pilot intake prototype for governed finance-model readiness.",
};

export default function PilotIntakePage() {
  return (
    <PrestigePage
      active="/pilot-intake"
      badge="Pilot Intake Prototype"
      title="Collect the right context"
      accent="before modeling starts."
      lead="This is a static intake prototype. It demonstrates what a future client pilot intake could collect without submitting, storing, or sending data."
      right={<EvidenceConsole rows={[
        ["Live submit", "disabled", "green"],
        ["Network call", "disabled", "green"],
        ["Database write", "blocked", "green"],
        ["Pilot readiness", "structured", "gold"],
      ]} />}
    >
      <StaticIntakeConsole />
      <div style={{ marginTop: "28px" }}>
        <FeatureGrid items={[
          ["🧾", "Context first", "The intake focuses on business context before any model is drafted."],
          ["📊", "Goal clarity", "The pilot needs to know what financial output matters most."],
          ["🔒", "No live submit", "The current route does not submit or store any client data."],
          ["✅", "Approval boundary", "Human review remains part of the pilot from the start."],
        ]} />
      </div>
    </PrestigePage>
  );
}
