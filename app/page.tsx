import {
  CanonQuote,
  Chip,
  EvidenceConsole,
  FeatureGrid,
  MetricCard,
  PrestigeNav,
  StatusStrip,
  proofRows,
} from "../src/ui/finance-prestige-system";
import { getFinanceOnlineProofStatus } from "../src/runtime/finance-online-proof-status";

export const metadata = {
  title: "AndyAI Finance Engine — Governed Financial Modeling",
  description: "Governed financial modeling. Read-only proof. Human approval above automation.",
};

export default function HomePage() {
  const status = getFinanceOnlineProofStatus();

  return (
    <main style={{
      minHeight: "100vh",
      background:
        "radial-gradient(circle at 16% 8%, rgba(56,189,248,0.20), transparent 32%), radial-gradient(circle at 86% 10%, rgba(234,179,8,0.15), transparent 30%), linear-gradient(135deg, #06111f 0%, #0b1324 44%, #111827 100%)",
      color: "#f8fafc",
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      <PrestigeNav active="/" />
      <section style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(340px, 0.9fr)", gap: "32px", alignItems: "center", padding: "56px 0 36px" }}>
        <div>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "24px" }}>
            <Chip>Read-only proof</Chip>
            <Chip tone="gold">Human approval above automation</Chip>
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
            <a href="/finance-proof" style={{ background: "#f8fafc", color: "#0f172a", padding: "14px 20px", borderRadius: "16px", textDecoration: "none", fontWeight: 900 }}>View Proof Surface</a>
            <a href="/api/finance/read-only/status" style={{ border: "1px solid rgba(255,255,255,0.22)", color: "#f8fafc", padding: "14px 20px", borderRadius: "16px", textDecoration: "none", fontWeight: 900 }}>Read Runtime JSON</a>
          </div>
        </div>
        <aside style={{ border: "1px solid rgba(148,163,184,0.22)", background: "rgba(15,23,42,0.72)", boxShadow: "0 24px 80px rgba(0,0,0,0.28)", backdropFilter: "blur(18px)", borderRadius: "28px", padding: "26px", position: "relative", overflow: "hidden" }}>
          <p style={{ color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "12px", marginTop: 0 }}>Runtime Console</p>
          <h2 style={{ margin: "0 0 18px", fontSize: "30px", letterSpacing: "-0.04em" }}>Online proof status</h2>
          <StatusStrip items={[["Mode", "Read-only"], ["Tables", String(status.verifiedTableCount), "gold"], ["Billing", "Blocked"], ["Mutation", "Blocked"]]} />
          <MetricCard label="Domain" value={status.domain} tone="blue" />
        </aside>
      </section>
      <section style={{ width: "min(1180px, calc(100% - 40px))", margin: "0 auto", padding: "30px 0 72px" }}>
        <FeatureGrid items={[
          ["🛡️", "Read-Only Proof Surface", "The public layer shows status, routes, and locked boundaries without exposing secrets or writing data."],
          ["🧭", "Runtime Safety Boundary", "Execution remains gated. Mutation, checkout, billing, webhooks, and paid runtime are blocked by design."],
          ["🧪", "Supabase Lab Verified", "The lab schema exists as controlled infrastructure. Public proof does not require DB URL or service role exposure."],
          ["📊", "Financial Modeling Governance", "Built for governed document-to-model workflows where auditability matters as much as speed."],
        ]} />
      </section>
    </main>
  );
}
