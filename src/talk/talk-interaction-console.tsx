"use client";

import { useMemo, useState } from "react";
import { talkCards, talkSafetyRows } from "./static-talk-console";

const panelStyle = {
  border: "1px solid rgba(148,163,184,0.22)",
  background: "rgba(15,23,42,0.72)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
  borderRadius: "24px",
} as const;

export function TalkInteractionConsole() {
  const [selectedId, setSelectedId] = useState(talkCards[0]?.id ?? "what-is-it");

  const selected = useMemo(
    () => talkCards.find((card) => card.id === selectedId) ?? talkCards[0],
    [selectedId]
  );

  return (
    <section style={{ display: "grid", gridTemplateColumns: "minmax(260px, 0.74fr) minmax(0, 1.26fr)", gap: "18px" }}>
      <aside style={{ ...panelStyle, padding: "20px" }}>
        <p style={{ marginTop: 0, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", fontWeight: 900 }}>
          Local state selector
        </p>
        <div style={{ display: "grid", gap: "10px" }}>
          {talkCards.map((card) => {
            const active = card.id === selectedId;
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelectedId(card.id)}
                style={{
                  textAlign: "left",
                  border: active ? "1px solid rgba(250,204,21,0.75)" : "1px solid rgba(148,163,184,0.22)",
                  background: active ? "rgba(250,204,21,0.14)" : "rgba(2,6,23,0.38)",
                  color: active ? "#fde68a" : "#e2e8f0",
                  borderRadius: "16px",
                  padding: "14px",
                  cursor: "pointer",
                  fontWeight: 800,
                }}
              >
                {card.title}
              </button>
            );
          })}
        </div>
      </aside>

      <article style={{ ...panelStyle, padding: "24px" }}>
        <p style={{ marginTop: 0, color: "#facc15", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", fontWeight: 900 }}>
          Simulated answer — no provider call
        </p>
        <h2 style={{ margin: "10px 0 12px", fontSize: "34px", letterSpacing: "-0.04em" }}>{selected.title}</h2>
        <p style={{ color: "#bae6fd", fontWeight: 800 }}>{selected.prompt}</p>
        <p style={{ color: "#cbd5e1", lineHeight: 1.72, fontSize: "18px" }}>{selected.response}</p>

        <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
          {talkSafetyRows.map(([label, value]) => (
            <div key={label} style={{ border: "1px solid rgba(134,239,172,0.26)", background: "rgba(22,163,74,0.10)", borderRadius: "16px", padding: "12px" }}>
              <div style={{ color: "#94a3b8", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.10em" }}>{label}</div>
              <strong style={{ color: "#86efac", display: "block", marginTop: "6px" }}>{value}</strong>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
