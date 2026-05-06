"use client";

import { useMemo, useState } from "react";

export const intakeSteps = [
  {
    id: "business-context",
    title: "Business context",
    question: "What business model, market, and current planning stage should the pilot understand?",
    preview: "Company type, offer, target customer, current spreadsheet/documents, and decision deadline.",
  },
  {
    id: "financial-goal",
    title: "Financial goal",
    question: "What financial model output matters most?",
    preview: "Revenue plan, pricing model, cost plan, runway model, investor memo, or operating forecast.",
  },
  {
    id: "input-readiness",
    title: "Input readiness",
    question: "What source materials already exist?",
    preview: "Business plan, CSV/spreadsheet, assumptions, invoices, pricing tables, or founder notes.",
  },
  {
    id: "approval-boundary",
    title: "Approval boundary",
    question: "Who approves assumptions before a result becomes client-ready?",
    preview: "Human owner, reviewer, finance lead, founder, or client-side approver.",
  },
];

const panelStyle = {
  border: "1px solid rgba(148,163,184,0.22)",
  background: "rgba(15,23,42,0.72)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
  borderRadius: "24px",
} as const;

export function StaticIntakeConsole() {
  const [selectedId, setSelectedId] = useState(intakeSteps[0].id);
  const selected = useMemo(
    () => intakeSteps.find((step) => step.id === selectedId) ?? intakeSteps[0],
    [selectedId]
  );

  return (
    <section style={{ display: "grid", gridTemplateColumns: "minmax(260px, 0.74fr) minmax(0, 1.26fr)", gap: "18px" }}>
      <aside style={{ ...panelStyle, padding: "20px" }}>
        <p style={{ marginTop: 0, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", fontWeight: 900 }}>
          Intake steps — local state only
        </p>
        <div style={{ display: "grid", gap: "10px" }}>
          {intakeSteps.map((step) => {
            const active = step.id === selectedId;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setSelectedId(step.id)}
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
                {step.title}
              </button>
            );
          })}
        </div>
      </aside>

      <article style={{ ...panelStyle, padding: "24px" }}>
        <p style={{ marginTop: 0, color: "#facc15", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", fontWeight: 900 }}>
          Static preview — no submit
        </p>
        <h2 style={{ margin: "10px 0 12px", fontSize: "34px", letterSpacing: "-0.04em" }}>{selected.title}</h2>
        <p style={{ color: "#bae6fd", fontWeight: 800 }}>{selected.question}</p>
        <p style={{ color: "#cbd5e1", lineHeight: 1.72, fontSize: "18px" }}>{selected.preview}</p>
      </article>
    </section>
  );
}
