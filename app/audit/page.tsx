import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const audit = [
  ["info", "Input loaded", "Business input payload accepted."],
  ["warning", "Assumption check", "Growth rate should be reviewed by a human."],
  ["info", "Scenario generated", "Base, conservative, and optimistic cases prepared."]
];

export default function AuditPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Audit Trail</span>
        <h1>Financial output must leave evidence.</h1>
        <p className="lead">Audit events make assumptions, warnings, and model decisions visible before approval.</p>
      </section>
      <section className="panel">
        {audit.map(([severity, title, message]) => (
          <div className="step" key={title}>
            <div className="num">{severity === "warning" ? "!" : "i"}</div>
            <div><h3>{title}</h3><p>{message}</p></div>
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
}
