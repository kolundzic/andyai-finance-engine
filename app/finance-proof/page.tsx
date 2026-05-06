import { CanonQuote, EvidenceConsole, FeatureGrid, PrestigePage, proofRows } from "../../src/ui/finance-prestige-system";
import { getFinanceOnlineProofStatus } from "../../src/runtime/finance-online-proof-status";

export const metadata = {
  title: "AndyAI Finance Engine — Read-Only Proof",
  description: "Verified public proof. Human authority intact.",
};

export default function FinanceProofPage() {
  const status = getFinanceOnlineProofStatus();

  return (
    <PrestigePage
      active="/finance-proof"
      badge="Verified Public Proof"
      title="Read-only proof."
      accent="Human authority intact."
      lead="This page proves the online surface is present while keeping sensitive runtime paths locked. No billing, no checkout, no webhooks, no paid runtime, no database writes."
      right={<EvidenceConsole rows={proofRows} />}
    >
      <CanonQuote>{status.canonicalLine}</CanonQuote>
      <div style={{ marginTop: "28px" }}>
        <FeatureGrid items={[
          ["01", "Proof route", "/finance-proof is public, static, and designed for human review."],
          ["02", "Status API", "/api/finance/read-only/status returns local proof JSON."],
          ["03", "Safety boundary", "The online surface can show status but cannot mutate data."],
        ]} />
      </div>
    </PrestigePage>
  );
}
