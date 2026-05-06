import { getFinanceOnlineProofStatus } from "../src/runtime/finance-online-proof-status";

const shell: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 16% 8%, rgba(56,189,248,0.22), transparent 32%), radial-gradient(circle at 86% 10%, rgba(234,179,8,0.18), transparent 30%), linear-gradient(135deg, #06111f 0%, #0b1324 44%, #111827 100%)",
  color: "#f8fafc",
  fontFamily:
    "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

const wrap: React.CSSProperties = {
  width: "min(1180px, calc(100% - 40px))",
  margin: "0 auto",
};

const card: React.CSSProperties = {
  border: "1px solid rgba(148,163,184,0.22)",
  background: "rgba(15,23,42,0.72)",
  boxShadow: "0 24px 80px rgba(0,0,0,0.28)",
  backdropFilter: "blur(18px)",
  borderRadius: "28px",
};

const chip: React.CSSProperties = {
  border: "1px solid rgba(125,211,252,0.28)",
  background: "rgba(14,165,233,0.12)",
  color: "#bae6fd",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "0.04em",
};

const goldChip: React.CSSProperties = {
  border: "1px solid rgba(250,204,21,0.28)",
  background: "rgba(250,204,21,0.10)",
  color: "#fde68a",
  borderRadius: "999px",
  padding: "8px 12px",
  fontSize: "13px",
  fontWeight: 700,
};

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        ...card,
        borderRadius: "20px",
        padding: "18px",
        minHeight: "88px",
      }}
    >
      <div style={{ color: "#94a3b8", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.12em" }}>{label}</div>
      <div style={{ marginTop: "10px", color: "#f8fafc", fontSize: "22px", fontWeight: 800 }}>{value}</div>
    </div>
  );
}

function SectionCard({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <article style={{ ...card, padding: "24px", minHeight: "210px" }}>
      <div style={{ fontSize: "30px" }}>{icon}</div>
      <h3 style={{ fontSize: "22px", lineHeight: 1.2, margin: "18px 0 10px" }}>{title}</h3>
      <p style={{ color: "#cbd5e1", lineHeight: 1.65, margin: 0 }}>{body}</p>
    </article>
  );
}

export default function HomePage() {
  const status = getFinanceOnlineProofStatus();

  return (
    <main style={shell}>
      <nav style={{ ...wrap, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "38px", height: "38px", borderRadius: "14px", background: "linear-gradient(135deg,#38bdf8,#facc15)", boxShadow: "0 18px 40px rgba(56,189,248,0.25)" }} />
          <strong style={{ fontSize: "17px", letterSpacing: "-0.02em" }}>AndyAI Finance Engine</strong>
        </div>
        <div style={{ display: "flex", gap: "18px", color: "#cbd5e1", fontSize: "14px" }}>
          <a href="/finance-proof" style={{ color: "inherit", textDecoration: "none" }}>Proof</a>
          <a href="/api/finance/read-only/status" style={{ color: "inherit", textDecoration: "none" }}>Runtime</a>
          <a href="/supabase" style={{ color: "inherit", textDecoration: "none" }}>Supabase</a>
          <a href="/audit" style={{ color: "inherit", textDecoration: "none" }}>Audit</a>
        </div>
      </nav>

      <section style={{ ...wrap, display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(340px, 0.9fr)", gap: "32px", alignItems: "center", padding: "48px 0 36px" }}>
        <div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
            <span style={chip}>READ-ONLY PROOF</span>
            <span style={goldChip}>HUMAN APPROVAL ABOVE AUTOMATION</span>
          </div>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 86px)", lineHeight: 0.94, letterSpacing: "-0.07em", margin: 0 }}>
            Governed financial modeling.
            <br />
            <span style={{ color: "#7dd3fc" }}>Verified before execution.</span>
          </h1>
          <p style={{ maxWidth: "720px", color: "#cbd5e1", fontSize: "20px", lineHeight: 1.65, marginTop: "28px" }}>
            A finance runtime foundation for document-to-model workflows, audit trails, and controlled execution. Read-only proof is visible, but the hands remain locked until human approval.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "32px" }}>
            <a href="/finance-proof" style={{ background: "#f8fafc", color: "#0f172a", padding: "14px 20px", borderRadius: "16px", textDecoration: "none", fontWeight: 800 }}>View Proof Surface</a>
            <a href="/api/finance/read-only/status" style={{ border: "1px solid rgba(255,255,255,0.22)", color: "#f8fafc", padding: "14px 20px", borderRadius: "16px", textDecoration: "none", fontWeight: 800 }}>Read Runtime JSON</a>
          </div>
        </div>

        <aside style={{ ...card, padding: "26px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: "-80px -90px auto auto", width: "220px", height: "220px", borderRadius: "50%", background: "rgba(56,189,248,0.18)" }} />
          <p style={{ color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "12px", marginTop: 0 }}>Runtime Console</p>
          <h2 style={{ margin: "0 0 18px", fontSize: "30px", letterSpacing: "-0.04em" }}>Online proof status</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            <StatusPill label="Mode" value="Read-only" />
            <StatusPill label="Tables" value={String(status.verifiedTableCount)} />
            <StatusPill label="Billing" value="Blocked" />
            <StatusPill label="Mutation" value="Blocked" />
          </div>
          <div style={{ marginTop: "18px", padding: "18px", borderRadius: "20px", background: "rgba(2,6,23,0.56)", border: "1px solid rgba(148,163,184,0.16)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", color: "#cbd5e1", fontSize: "14px" }}>
              <span>Domain</span>
              <strong style={{ color: "#f8fafc" }}>{status.domain}</strong>
            </div>
            <div style={{ marginTop: "14px", height: "8px", borderRadius: "999px", background: "linear-gradient(90deg,#38bdf8,#22c55e,#facc15)" }} />
          </div>
        </aside>
      </section>

      <section style={{ ...wrap, display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "18px", padding: "30px 0 72px" }}>
        <SectionCard icon="🛡️" title="Read-Only Proof Surface" body="The public layer shows status, routes, and locked boundaries without exposing secrets or writing data." />
        <SectionCard icon="🧭" title="Runtime Safety Boundary" body="Execution remains gated. Mutation, checkout, billing, webhooks, and paid runtime are blocked by design." />
        <SectionCard icon="🧪" title="Supabase Lab Verified" body="The lab schema exists as controlled infrastructure. Public proof does not require DB URL or service role exposure." />
        <SectionCard icon="📊" title="Financial Modeling Governance" body="Built for governed document-to-model workflows where auditability matters as much as speed." />
      </section>
    </main>
  );
}
