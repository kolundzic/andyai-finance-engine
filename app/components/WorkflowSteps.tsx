const steps = [
  ["1", "Documents & Business Inputs", "Business briefs, SaaS assumptions, pricing notes, reports, and supporting data."],
  ["2", "AI Extraction", "Revenue drivers, cost assumptions, growth rates, pricing tiers, and model inputs."],
  ["3", "Financial Model", "Structured model with summary, pricing, scenarios, and export-ready output."],
  ["4", "Verification & Audit Trail", "Source assumptions, calculations, warnings, and decision evidence remain visible."],
  ["5", "Human Approval", "The human stays in charge before results become decision material."],
  ["6", "Export Pack", "Decision-ready Markdown/PDF/Excel-oriented output for review and sharing."]
];

export function WorkflowSteps() {
  return (
    <div className="flow">
      {steps.map(([num, title, text]) => (
        <div className="step" key={title}>
          <div className="num">{num}</div>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
