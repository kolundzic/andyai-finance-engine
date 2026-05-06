import type { CSSProperties, ReactNode } from "react";

type Tone = "cyan" | "gold" | "green" | "blue" | "slate";

const colors = {
  cyan: "#7dd3fc",
  gold: "#facc15",
  green: "#86efac",
  blue: "#bfdbfe",
  slate: "#cbd5e1",
};

const shell: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 16% 8%, rgba(56,189,248,0.20), transparent 32%), radial-gradient(circle at 86% 10%, rgba(234,179,8,0.15), transparent 30%), linear-gradient(135deg, #06111f 0%, #0b1324 44%, #111827 100%)",
  color: "#f8fafc",
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const wrap: CSSProperties = {
  width: "min(1180px, calc(100% - 40px))",
  margin: "0 auto",
};

const glass: CSSProperties = {
  border: "1px solid rgba(148,163,184,0.22)",
  background: "rgba(15,23,42,0.72)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
  backdropFilter: "blur(18px)",
  borderRadius: "28px",
};

export const navItems = [
  ["Home", "/"],
  ["Proof", "/finance-proof"],
  ["Talk", "/talk"],
  ["Talk UI", "/talk-interaction"],
  ["Routes", "/routes"],
  ["Supabase", "/supabase"],
  ["Audit", "/audit"],
  ["Approval", "/approval"],
  ["Runs", "/runs"],
  ["Projects", "/projects"],
] as const;

export function PrestigeNav({ active }: { active?: string }) {
  return (
    <nav style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 0" }}>
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", color: "#f8fafc", textDecoration: "none" }}>
        <div style={{ width: "38px", height: "38px", borderRadius: "14px", background: "linear-gradient(135deg,#38bdf8,#facc15)", boxShadow: "0 18px 40px rgba(56,189,248,0.25)" }} />
        <strong style={{ fontSize: "17px", letterSpacing: "-0.02em" }}>AndyAI Finance Engine</strong>
      </a>
      <div style={{ display: "flex", gap: "16px", color: "#cbd5e1", fontSize: "14px", flexWrap: "wrap", justifyContent: "flex-end" }}>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} style={{ color: active === href ? "#facc15" : "inherit", textDecoration: "none", fontWeight: active === href ? 800 : 600 }}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export function Chip({ children, tone = "cyan" }: { children: ReactNode; tone?: Tone }) {
  const color = colors[tone];
  return (
    <span style={{
      border: `1px solid ${color}55`,
      background: `${color}1a`,
      color,
      borderRadius: "999px",
      padding: "8px 12px",
      fontSize: "13px",
      fontWeight: 800,
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
    }}>
      {children}
    </span>
  );
}

export function PrestigePage({
  active,
  badge,
  title,
  accent,
  lead,
  right,
  children,
}: {
  active?: string;
  badge: string;
  title: string;
  accent?: string;
  lead: string;
  right?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <main style={shell}>
      <PrestigeNav active={active} />
      <section style={{ ...wrap, display: "grid", gridTemplateColumns: right ? "minmax(0, 1fr) minmax(340px, 0.78fr)" : "minmax(0, 1fr)", gap: "32px", alignItems: "center", padding: "54px 0 34px" }}>
        <div>
          <Chip tone="cyan">{badge}</Chip>
          <h1 style={{ fontSize: "clamp(46px, 7vw, 82px)", lineHeight: 0.96, letterSpacing: "-0.07em", margin: "28px 0 0" }}>
            {title}
            {accent ? (
              <>
                <br />
                <span style={{ color: "#7dd3fc" }}>{accent}</span>
              </>
            ) : null}
          </h1>
          <p style={{ maxWidth: "760px", color: "#cbd5e1", fontSize: "20px", lineHeight: 1.65, marginTop: "28px" }}>{lead}</p>
        </div>
        {right ? <aside style={{ ...glass, padding: "28px" }}>{right}</aside> : null}
      </section>
      <section style={{ ...wrap, padding: "24px 0 82px" }}>{children}</section>
    </main>
  );
}

export function MetricCard({ label, value, tone = "blue" }: { label: string; value: string; tone?: Tone }) {
  return (
    <div style={{ ...glass, borderRadius: "20px", padding: "18px", minHeight: "90px" }}>
      <div style={{ color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em" }}>{label}</div>
      <div style={{ marginTop: "10px", color: colors[tone], fontSize: "23px", fontWeight: 900 }}>{value}</div>
    </div>
  );
}

export function EvidenceConsole({
  rows,
}: {
  rows: Array<[string, string, Tone?]>;
}) {
  return (
    <div>
      <p style={{ marginTop: 0, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", fontWeight: 900 }}>Evidence Console</p>
      {rows.map(([label, value, tone = "blue"]) => (
        <div key={label} style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "16px 0", borderBottom: "1px solid rgba(148,163,184,0.14)" }}>
          <span style={{ color: "#94a3b8" }}>{label}</span>
          <strong style={{ color: colors[tone], textAlign: "right" }}>{value}</strong>
        </div>
      ))}
    </div>
  );
}

export function FeatureGrid({ items }: { items: Array<[string, string, string]> }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "18px" }}>
      {items.map(([icon, title, body]) => (
        <article key={title} style={{ ...glass, padding: "24px", minHeight: "210px" }}>
          <div style={{ fontSize: "30px" }}>{icon}</div>
          <h3 style={{ fontSize: "23px", lineHeight: 1.15, margin: "18px 0 10px" }}>{title}</h3>
          <p style={{ color: "#cbd5e1", lineHeight: 1.65, margin: 0 }}>{body}</p>
        </article>
      ))}
    </div>
  );
}

export function StatusStrip({ items }: { items: Array<[string, string, Tone?]> }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "14px", marginBottom: "22px" }}>
      {items.map(([label, value, tone = "green"]) => (
        <MetricCard key={label} label={label} value={value} tone={tone} />
      ))}
    </div>
  );
}

export const proofRows: Array<[string, string, Tone?]> = [
  ["Domain", "finance.andyai.ai", "blue"],
  ["Mode", "online_proof_read_only", "blue"],
  ["Verified tables", "10", "gold"],
  ["Mutation", "blocked", "green"],
  ["Production runtime", "blocked", "green"],
  ["Billing", "blocked", "green"],
  ["Checkout", "blocked", "green"],
  ["Webhooks", "blocked", "green"],
  ["Paid runtime", "blocked", "green"],
];

export function CanonQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote style={{ margin: "26px 0 0", padding: "22px", borderLeft: "4px solid #38bdf8", background: "rgba(2,6,23,0.54)", borderRadius: "18px", color: "#e0f2fe", fontSize: "18px", lineHeight: 1.55 }}>
      {children}
    </blockquote>
  );
}
