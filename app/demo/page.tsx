import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";

export const metadata = {
  title: "AndyAI Finance Engine — Demo",
  description: "A public product story for governed financial modeling.",
};

export default function DemoPage() {
  return (
    <PrestigePage
      active="/demo"
      badge="Demo Surface"
      title="A product that explains"
      accent="its own safeguards."
      lead="The demo layer shows what the engine does, what it refuses to do, and where the human remains in control."
      right={<EvidenceConsole rows={[
        ["Demo mode", "public", "blue"],
        ["Live writes", "blocked", "green"],
        ["Secrets", "not exposed", "green"],
        ["Client-ready", "next", "gold"],
      ]} />}
    >
      <FeatureGrid items={[
        ["🎬", "Guided story", "The public demo can explain the engine before a sales call."],
        ["🛡️", "Safety first", "The strongest claim is not speed; it is controlled execution."],
        ["📊", "Finance logic", "The product is built around business evidence, not generic chatbot output."],
        ["🗣️", "Talk layer ready", "Future voice/talk features can explain the proof surface like a human guide."],
      ]} />
    </PrestigePage>
  );
}
