import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const proof = [
  ["v1.0.0", "Stable finance engine canon"],
  ["v2.0.0", "Working core stable"],
  ["v2.0.2", "Next.js web rescue committed and pushed"],
  ["v3.0.0", "Public showcase stable target"]
];

export default function ProofPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Proof, not hype</span>
        <h1>A repo that builds. A web app that shows. A workflow that leaves evidence.</h1>
        <p className="lead">
          AndyAI Finance Engine is built with commits, tags, verifiers, local builds, GitHub proof, and Vercel deployment.
        </p>
      </section>
      <section className="panel">
        <div className="metricGrid">
          {proof.map(([version, meaning]) => (
            <div className="metric" key={version}>
              <span>{version}</span>
              <strong>{meaning}</strong>
            </div>
          ))}
        </div>
        <a className="button primary" href="https://github.com/kolundzic/andyai-finance-engine">
          View GitHub Repository
        </a>
      </section>
      <Footer />
    </main>
  );
}
