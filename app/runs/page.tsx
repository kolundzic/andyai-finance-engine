import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const runs = [
  ["RUN-001", "Pricing output generated", "v2.0.0", "Human review required"],
  ["RUN-002", "Scenario comparison generated", "v2.0.0", "Needs revision"],
  ["RUN-003", "Export pack generated", "v2.0.0", "Approved"]
];

export default function RunsPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Model Runs</span>
        <h1>Each run is evidence, not noise.</h1>
        <p className="lead">A model run should preserve inputs, outputs, warnings, audit events, and approval status.</p>
      </section>
      <section className="panel">
        <div className="metricGrid">
          {runs.map(([id, label, version, status]) => (
            <div className="metric" key={id}>
              <span>{id} · {version}</span>
              <strong>{label}</strong>
              <p>{status}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
