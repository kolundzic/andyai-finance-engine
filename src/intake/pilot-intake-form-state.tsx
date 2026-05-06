"use client";

import { useMemo, useState } from "react";

const options = [
  { id: "business-context", label: "Business context", weight: 25 },
  { id: "financial-goal", label: "Financial goal", weight: 25 },
  { id: "source-materials", label: "Source materials", weight: 25 },
  { id: "approval-owner", label: "Approval owner", weight: 25 },
];

export function PilotIntakeFormState() {
  const [selected, setSelected] = useState<string[]>(["business-context"]);

  const score = useMemo(
    () => options.filter((option) => selected.includes(option.id)).reduce((sum, option) => sum + option.weight, 0),
    [selected]
  );

  return (
    <section style={{ border: "1px solid rgba(148,163,184,0.22)", background: "rgba(15,23,42,0.72)", borderRadius: "24px", padding: "24px" }}>
      <p style={{ marginTop: 0, color: "#facc15", fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px" }}>Local state only — no submit</p>
      <h2 style={{ fontSize: "32px", margin: "0 0 18px" }}>Pilot readiness preview: {score}%</h2>
      <div style={{ display: "grid", gap: "12px" }}>
        {options.map((option) => {
          const checked = selected.includes(option.id);
          return (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                setSelected((current) =>
                  current.includes(option.id)
                    ? current.filter((id) => id !== option.id)
                    : [...current, option.id]
                )
              }
              style={{
                textAlign: "left",
                border: checked ? "1px solid rgba(250,204,21,0.75)" : "1px solid rgba(148,163,184,0.22)",
                background: checked ? "rgba(250,204,21,0.14)" : "rgba(2,6,23,0.38)",
                color: checked ? "#fde68a" : "#e2e8f0",
                borderRadius: "16px",
                padding: "14px",
                cursor: "pointer",
                fontWeight: 800,
              }}
            >
              {checked ? "✓ " : "+ "} {option.label}
            </button>
          );
        })}
      </div>
      <p style={{ color: "#cbd5e1", lineHeight: 1.7, marginBottom: 0, marginTop: "20px" }}>
        This is a browser-local preview. It does not submit, store, send, or write anything.
      </p>
    </section>
  );
}
