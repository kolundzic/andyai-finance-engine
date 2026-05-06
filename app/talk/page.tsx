import { EvidenceConsole, FeatureGrid, PrestigePage } from "../../src/ui/finance-prestige-system";
import { talkCards, talkSafetyRows } from "../../src/talk/static-talk-console";

export const metadata = {
  title: "AndyAI Finance Engine — Talk UI Prototype",
  description: "A static, no-provider talk console for product explanation.",
};

export default function TalkPage() {
  return (
    <PrestigePage
      active="/talk"
      badge="Talk UI Prototype"
      title="A guide that explains"
      accent="without executing."
      lead="This is a staged talk console. It looks like a guided conversation, but it is static, safe, no-provider, no-microphone, no-recording, and no-write."
      right={<EvidenceConsole rows={talkSafetyRows as any} />}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "18px", marginBottom: "28px" }}>
        {talkCards.map((card) => (
          <article
            key={card.id}
            style={{
              border: "1px solid rgba(148,163,184,0.22)",
              background: "rgba(15,23,42,0.72)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
              borderRadius: "24px",
              padding: "22px",
            }}
          >
            <p style={{ color: "#facc15", marginTop: 0, fontWeight: 900, letterSpacing: "0.05em", textTransform: "uppercase", fontSize: "12px" }}>{card.prompt}</p>
            <h3 style={{ fontSize: "23px", margin: "12px 0" }}>{card.title}</h3>
            <p style={{ color: "#cbd5e1", lineHeight: 1.65, marginBottom: 0 }}>{card.response}</p>
          </article>
        ))}
      </div>

      <FeatureGrid items={[
        ["🗣️", "Static talk simulation", "The console demonstrates guided explanation before any live provider is connected."],
        ["🛡️", "No-provider boundary", "No API keys, microphone, recording, network calls, or DB writes are activated."],
        ["🤝", "Client-ready story", "The product can explain value, proof, and safety in business language."],
        ["🧭", "Next step", "Future versions can add UI interaction before any real voice runtime."],
      ]} />
    </PrestigePage>
  );
}
