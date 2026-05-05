import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { WorkflowSteps } from "../components/WorkflowSteps";

export default function WorkflowPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Governed finance workflow</span>
        <h1>From raw business input to decision-ready financial truth.</h1>
        <p className="lead">
          The engine is designed around speed, verification, audit trails, and human approval.
          This is not blind AI automation. It is governed financial modeling.
        </p>
      </section>
      <section className="panel wide">
        <WorkflowSteps />
      </section>
      <section className="twoCol">
        <div className="card">
          <h2>Speed Layer</h2>
          <p>AI accelerates extraction, summary generation, scenario creation, and export preparation.</p>
        </div>
        <div className="card">
          <h2>Trust Layer</h2>
          <p>Verification, audit trail, and human approval prevent a pretty model from becoming a false decision.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
