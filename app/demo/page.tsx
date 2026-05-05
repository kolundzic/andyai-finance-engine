import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const sample = [
  ["MRR", "$12,500"],
  ["ARR", "$150,000"],
  ["Base scenario", "Healthy early SaaS traction"],
  ["Audit status", "Human review required"],
  ["Export", "Markdown-ready decision pack"]
];

export default function DemoPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Working core demo</span>
        <h1>A local engine output, presented for the public web.</h1>
        <p className="lead">
          v2.0 proved the engine can generate pricing output, scenario output, audit trail,
          summary output, and a Markdown export pack.
        </p>
      </section>
      <section className="panel">
        <h2>Demo Export Pack Preview</h2>
        <div className="metricGrid">
          {sample.map(([label, value]) => (
            <div className="metric" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <div className="truth">This demo is a public preview. Production finance models must be reviewed by a qualified human.</div>
      </section>
      <Footer />
    </main>
  );
}
