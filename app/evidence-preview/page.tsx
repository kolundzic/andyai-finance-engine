import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";
import { evidencePreviewItems } from "../../src/intake/evidence-preview";

export const metadata = {
  title: "AndyAI Finance Engine — Evidence Pack Preview",
  description: "Static evidence pack preview.",
};

export default function EvidencePreviewPage() {
  return (
    <PrestigePage
      active="/client-portal"
      badge="Evidence Pack Preview"
      title="Proof should travel"
      accent="with the model."
      lead="This static page previews the evidence sections that should accompany a governed finance-model pilot."
      right={<EvidenceConsole rows={[
        ["Export runtime", "not active", "green"],
        ["Evidence sections", String(evidencePreviewItems.length), "gold"],
        ["Human review", "required", "gold"],
        ["Client data", "not stored", "green"],
      ]} />}
    >
      <FeatureGrid items={evidencePreviewItems.map((item) => ["🧾", item.label, item.meaning])} />
    </PrestigePage>
  );
}
