import { getFinanceOnlineProofStatus } from "../../src/runtime/finance-online-proof-status";

export const metadata = {
  title: "AndyAI Finance Engine — Read-Only Proof",
  description: "Governed financial modeling. Read-only proof. Human approval above automation.",
};

export default function FinanceProofPage() {
  const status = getFinanceOnlineProofStatus();

  return (
    <main style={{ maxWidth: "920px", margin: "0 auto", padding: "48px 24px", fontFamily: "system-ui, sans-serif" }}>
      <p style={{ fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7 }}>AndyAI Finance Engine</p>
      <h1 style={{ fontSize: "44px", lineHeight: 1.05, margin: "12px 0" }}>Governed financial modeling. Read-only proof.</h1>
      <p style={{ fontSize: "20px", lineHeight: 1.55, opacity: 0.82 }}>Human approval above automation.</p>

      <section style={{ marginTop: "36px", display: "grid", gap: "14px" }}>
        {[
          ["Domain", status.domain],
          ["Mode", status.mode],
          ["Verified tables", String(status.verifiedTableCount)],
          ["Mutation", status.mutationAllowed ? "allowed" : "blocked"],
          ["Production runtime", status.productionRuntimeAllowed ? "allowed" : "blocked"],
          ["Billing / checkout / webhooks", status.billingAllowed || status.checkoutAllowed || status.webhooksAllowed ? "active" : "blocked"],
        ].map(([label, value]) => (
          <div key={label} style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "18px 20px" }}>
            <strong>{label}</strong>
            <div style={{ marginTop: "6px", opacity: 0.75 }}>{value}</div>
          </div>
        ))}
      </section>

      <blockquote style={{ marginTop: "40px", padding: "24px", borderLeft: "4px solid #111827", background: "#f9fafb" }}>
        {status.canonicalLine}
      </blockquote>
    </main>
  );
}
