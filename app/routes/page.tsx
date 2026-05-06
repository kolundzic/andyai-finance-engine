import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Route Elevator",
  description: "Public route map for the finance engine product surface.",
};

export default function RoutesPage() {
  return (
    <PrestigePage
      active="/routes"
      badge="Route Elevator"
      title="Every floor has"
      accent="a clear purpose."
      lead="This route map shows how the product surface is organized: proof, infrastructure, audit, approval, runs, projects, workflow, demo, library, and talk."
      right={<EvidenceConsole rows={[
        ["Home", "/", "blue"],
        ["Proof", "/finance-proof", "blue"],
        ["Talk", "/talk", "gold"],
        ["Runtime JSON", "/api/finance/read-only/status", "green"],
        ["Mutation", "blocked", "green"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🏠", "Home", "Product story, proof promise, and runtime console."],
        ["🧾", "Proof", "Human-readable proof surface and evidence console."],
        ["🧪", "Supabase", "Infrastructure proof for the finance lab schema."],
        ["🗣️", "Talk", "Explain-only guide layer. No provider connected yet."],
        ["✅", "Approval", "Human authority gate above automation."],
        ["📚", "Library", "Templates, guides, and future proof packs."],
      ]} />
    </PrestigePage>
  );
}
