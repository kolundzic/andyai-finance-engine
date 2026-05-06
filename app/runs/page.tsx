import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Runs",
  description: "Model runs should be traceable.",
};

export default function RunsPage() {
  return (
    <PrestigePage
      active="/runs"
      badge="Run History"
      title="Every model run should be"
      accent="traceable."
      lead="A finance engine needs a memory of inputs, assumptions, warnings, output state, and approval decisions for every run."
      right={<EvidenceConsole rows={[
        ["Run creation", "planned", "blue"],
        ["Input payload", "tracked", "green"],
        ["Model output", "reviewed", "gold"],
        ["Export package", "planned", "blue"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🏁", "Run lifecycle", "Each workflow can move from input to draft output, review, approval, and export."],
        ["🧮", "Model evidence", "Numbers should not appear alone; they need source context and reasoning trace."],
        ["🔎", "Review surface", "The operator should see warnings and assumptions before accepting output."],
        ["📤", "Export readiness", "Future exports can carry metadata proving how the result was produced."],
      ]} />
    </PrestigePage>
  );
}
