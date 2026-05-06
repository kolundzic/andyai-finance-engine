import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — ROI Explanation",
  description: "Static ROI explanation for governed financial workflows.",
};

export default function RoiPage() {
  return (
    <PrestigePage
      active="/roi"
      badge="ROI Explanation"
      title="Value is not only speed."
      accent="It is trust."
      lead="This static page explains how governed financial workflows can reduce review friction, expose assumptions, and improve decision confidence."
      right={<EvidenceConsole rows={[
        ["Calculator", "not active", "green"],
        ["Financial advice", "not provided", "green"],
        ["Value logic", "explained", "blue"],
        ["Client pilot", "recommended", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["⏱️", "Time saved", "Less manual structuring of business inputs and model assumptions."],
        ["🔎", "Review clarity", "Risks and missing assumptions become easier to see."],
        ["🧾", "Evidence pack", "Outputs can carry supporting proof and approval context."],
        ["🤝", "Client trust", "The client sees how the model was prepared, not only the final number."],
      ]} />
    </PrestigePage>
  );
}
