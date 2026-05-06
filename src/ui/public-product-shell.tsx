
import type { ReactNode } from "react";

const publicNav = [
  ["Home", "/"],
  ["Proof", "/proof"],
  ["Pilot", "/pilot"],
  ["Pricing", "/pricing"],
  ["Trust", "/trust"],
  ["Roadmap", "/roadmap"],
  ["Talk", "/talk"],
];

type EvidenceRow = [string, string, "green" | "blue" | "amber"];

function toneColor(tone: EvidenceRow[2]) {
  if (tone === "green") return "#86efac";
  if (tone === "amber") return "#fde68a";
  return "#93c5fd";
}

export function PublicProductPage({
  active,
  eyebrow,
  title,
  lead,
  children,
  right,
}: {
  active: string;
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh", background: "radial-gradient(circle at top left, rgba(250,204,21,0.18), transparent 32%), linear-gradient(135deg, #020617 0%, #0f172a 48%, #111827 100%)", color: "#f8fafc", fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <nav style={{ maxWidth: 1180, margin: "0 auto", padding: "22px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
        <a href="/" style={{ color: "#f8fafc", textDecoration: "none", fontWeight: 950, letterSpacing: "-0.04em", fontSize: 21 }}>AndyAI Finance</a>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {publicNav.map(([label, href]) => (
            <a key={href} href={href} style={{ color: active === href ? "#facc15" : "#cbd5e1", textDecoration: "none", border: active === href ? "1px solid rgba(250,204,21,0.55)" : "1px solid rgba(148,163,184,0.18)", borderRadius: 999, padding: "9px 13px", background: active === href ? "rgba(250,204,21,0.12)" : "rgba(15,23,42,0.45)", fontWeight: 800, fontSize: 13 }}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "62px 20px 38px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 28, alignItems: "center" }}>
        <div>
          <p style={{ color: "#facc15", fontWeight: 950, letterSpacing: "0.15em", textTransform: "uppercase", fontSize: 12 }}>{eyebrow}</p>
          <h1 style={{ fontSize: "clamp(42px, 7vw, 82px)", lineHeight: 0.9, margin: "14px 0 22px", letterSpacing: "-0.08em", maxWidth: 880 }}>{title}</h1>
          <p style={{ color: "#cbd5e1", lineHeight: 1.8, fontSize: 19, maxWidth: 760 }}>{lead}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a href="/pilot" style={{ color: "#020617", background: "#facc15", borderRadius: 999, padding: "13px 18px", textDecoration: "none", fontWeight: 950 }}>Start pilot preview</a>
            <a href="/proof" style={{ color: "#f8fafc", background: "rgba(15,23,42,0.85)", border: "1px solid rgba(148,163,184,0.32)", borderRadius: 999, padding: "13px 18px", textDecoration: "none", fontWeight: 900 }}>See proof</a>
          </div>
        </div>
        <div>{right ?? <TrustSignal />}</div>
      </section>

      <section style={{ maxWidth: 1180, margin: "0 auto", padding: "24px 20px 80px" }}>
        {children}
      </section>
    </main>
  );
}

export function TrustSignal({
  rows = [
    ["Human approval", "Required before serious output is used", "green"],
    ["Financial execution", "Not automatic from public demo pages", "green"],
    ["Client data", "No live submit in this public surface", "green"],
    ["Proof surface", "Read-only and audit-oriented by design", "blue"],
  ] as EvidenceRow[],
}: {
  rows?: EvidenceRow[];
}) {
  return (
    <aside style={{ border: "1px solid rgba(250,204,21,0.28)", background: "rgba(2,6,23,0.72)", borderRadius: 28, padding: 22, boxShadow: "0 30px 100px rgba(0,0,0,0.35)" }}>
      <p style={{ marginTop: 0, color: "#facc15", fontWeight: 950, letterSpacing: "0.14em", textTransform: "uppercase", fontSize: 12 }}>Trust signal</p>
      <h2 style={{ margin: "0 0 18px", fontSize: 28, letterSpacing: "-0.05em" }}>Safe by design, useful by workflow.</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {rows.map(([name, value, tone]) => (
          <div key={name} style={{ display: "grid", gap: 4, border: "1px solid rgba(148,163,184,0.18)", background: "rgba(15,23,42,0.7)", borderRadius: 16, padding: 14 }}>
            <strong style={{ color: toneColor(tone), fontSize: 14 }}>✓ {name}</strong>
            <span style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.55 }}>{value}</span>
          </div>
        ))}
      </div>
      <p style={{ color: "#94a3b8", marginBottom: 0, lineHeight: 1.6, fontSize: 13 }}>Developer safety boundaries are intentionally enforced behind the public explanation layer.</p>
    </aside>
  );
}

export function SectionGrid({ items }: { items: Array<[string, string, string]> }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
      {items.map(([icon, heading, text]) => (
        <article key={heading} style={{ border: "1px solid rgba(148,163,184,0.18)", background: "rgba(15,23,42,0.62)", borderRadius: 24, padding: 20 }}>
          <div style={{ fontSize: 28 }}>{icon}</div>
          <h3 style={{ margin: "12px 0 8px", fontSize: 21, letterSpacing: "-0.04em" }}>{heading}</h3>
          <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>{text}</p>
        </article>
      ))}
    </div>
  );
}

export function ClarityPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: 22, border: "1px solid rgba(148,163,184,0.2)", background: "rgba(2,6,23,0.5)", borderRadius: 28, padding: 24 }}>
      <h2 style={{ marginTop: 0, letterSpacing: "-0.05em", fontSize: 30 }}>{title}</h2>
      <div style={{ color: "#dbeafe", lineHeight: 1.8, fontSize: 16 }}>{children}</div>
    </section>
  );
}
