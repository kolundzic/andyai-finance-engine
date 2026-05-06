import { FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";
import { TalkInteractionConsole } from "../../src/talk/talk-interaction-console";

export const metadata = {
  title: "AndyAI Finance Engine — Talk Interaction State Prototype",
  description: "Local-state talk UI prototype with no provider, no microphone, no recording, and no writes.",
};

export default function TalkInteractionPage() {
  return (
    <PrestigePage
      active="/talk-interaction"
      badge="Talk Interaction State"
      title="The talk layer can feel alive"
      accent="without becoming dangerous."
      lead="This prototype adds local UI state: the user can choose explanation cards and see simulated answers. Nothing is recorded, sent, fetched, written, or executed."
    >
      <TalkInteractionConsole />
      <div style={{ marginTop: "28px" }}>
        <FeatureGrid items={[
          ["🧠", "Local state only", "The selected explanation card changes in the browser UI only."],
          ["🚫", "No provider calls", "There are no external AI calls, provider keys, or hidden network requests."],
          ["🎙️", "No microphone", "The prototype does not request microphone access or record audio."],
          ["🛡️", "No writes", "The talk interaction does not write to Supabase or any database."],
        ]} />
      </div>
    </PrestigePage>
  );
}
