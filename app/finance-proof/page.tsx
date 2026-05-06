import { getFinanceOnlineProofStatus } from "../../src/runtime/finance-online-proof-status";

export const metadata = {
  title: "AndyAI Finance Engine — Read-Only Proof",
  description: "Governed financial modeling. Read-only proof. Human approval above automation.",
};

const shell: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 20% 8%, rgba(56,189,248,0.18), transparent 30%), linear-gradient(135deg, #06111f 0%, #0f172a 60%, #111827 100%)",
  color: "#f8fafc",
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  padding: "34px 20px 72px",
};

const wrap: React.CSSProperties = {
  width: "min(1080px, 100%)",
  margin: "0 auto",
};

const panel: React.CSSProperties = {
  border: "1px solid rgba(148,163,184,0.22)",
  background: "rgba(15,23,42,0.72)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
  backdropFilter: "blur(18px)",
  borderRadius: "28px",
};

function EvidenceRow({ label, value, tone = "safe" }: { label: string; value: string; tone?: "safe" | "neutral" | "gold" }) {
  const color = tone === "safe" ? "#86efac" : tone === "gold" ? "#fde68a" : "#bfdbfe";
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: "18px", padding: "18px 0", borderBottom: "1px solid rgba(148,163,184,0.14)" }}>
      <span style={{ color: "#94a3b8" }}>{label}</span>
      <strong style={{ color }}>{value}</strong>
    </div>
  );
}

export default function FinanceProofPage() {
  const status = getFinanceOnlineProofStatus();

  return (
    <main style={shell}>
      <section style={wrap}>
        <a href="/" style={{ color: "#bae6fd", textDecoration: "none", fontWeight: 800 }}>← AndyAI Finance Engine</a>

        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(340px, 0.72fr)", gap: "28px", alignItems: "start", marginTop: "38px" }}>
          <div style={{ ...panel, padding: "34px" }}>
            <p style={{ margin: 0, color: "#93c5fd", letterSpacing: "0.14em", textTransform: "uppercase", fontSize: "12px", fontWeight: 800 }}>Verified Public Proof</p>
            <h1 style={{ margin: "16px 0 18px", fontSize: "clamp(42px, 6vw, 74px)", lineHeight: 0.96, letterSpacing: "-0.06em" }}>
              Read-only proof.
              <br />
              <span style={{ color: "#facc15" }}>Human authority intact.</span>
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: "19px", lineHeight: 1.65, maxWidth: "760px" }}>
              This page proves the online surface is present while keeping sensitive runtime paths locked. No billing, no checkout, no webhooks, no paid runtime, no database writes.
            </p>

            <blockquote style={{ margin: "30px 0 0", padding: "22px", borderLeft: "4px solid #38bdf8", background: "rgba(2,6,23,0.54)", borderRadius: "18px", color: "#e0f2fe", fontSize: "18px", lineHeight: 1.55 }}>
              {status.canonicalLine}
            </blockquote>
          </div>

          <aside style={{ ...panel, padding: "28px" }}>
            <p style={{ marginTop: 0, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: "12px", fontWeight: 800 }}>Evidence Console</p>
            <EvidenceRow label="Domain" value={status.domain} tone="neutral" />
            <EvidenceRow label="Mode" value="online_proof_read_only" tone="neutral" />
            <EvidenceRow label="Verified tables" value={String(status.verifiedTableCount)} tone="gold" />
            <EvidenceRow label="Mutation" value="blocked" />
            <EvidenceRow label="Production runtime" value="blocked" />
            <EvidenceRow label="Billing" value="blocked" />
            <EvidenceRow label="Checkout" value="blocked" />
            <EvidenceRow label="Webhooks" value="blocked" />
            <EvidenceRow label="Paid runtime" value="blocked" />
          </aside>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "18px", marginTop: "28px" }}>
          {[
            ["01", "Proof route", "/finance-proof is public and static."],
            ["02", "Status API", "/api/finance/read-only/status returns local proof JSON."],
            ["03", "Safety boundary", "The online surface can show status but cannot mutate data."],
          ].map(([num, title, body]) => (
            <article key={num} style={{ ...panel, padding: "24px" }}>
              <div style={{ color: "#facc15", fontWeight: 900 }}>{num}</div>
              <h3 style={{ margin: "12px 0 8px", fontSize: "22px" }}>{title}</h3>
              <p style={{ margin: 0, color: "#cbd5e1", lineHeight: 1.6 }}>{body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
