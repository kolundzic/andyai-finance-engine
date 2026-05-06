import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Library",
  description: "Templates, proof packs, and finance knowledge assets.",
};

export default function LibraryPage() {
  return (
    <PrestigePage
      active="/library"
      badge="Library"
      title="Finance templates need"
      accent="proof memory."
      lead="The library will hold reusable model patterns, client explanation templates, proof packs, and governance documents."
      right={<EvidenceConsole rows={[
        ["Templates", "planned", "blue"],
        ["Docs", "growing", "green"],
        ["Proof packs", "planned", "gold"],
        ["Client explainers", "next", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["📚", "Model templates", "Reusable SaaS, agency, service, and project finance model structures."],
        ["🧾", "Proof packs", "Standard evidence packages for investor, client, and internal review."],
        ["🧠", "Knowledge assets", "Glossaries, tutorials, and guides for non-technical users."],
        ["🏷️", "Offer assets", "Client-facing language for productized finance-engine services."],
      ]} />
    </PrestigePage>
  );
}
