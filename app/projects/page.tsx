import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const projects = [
  ["SaaS Pricing Pack", "Draft", "Subscription pricing and churn sensitivity."],
  ["Investor Model Pack", "Review", "Investor summary and assumptions."],
  ["Agency Proposal Pack", "Approved", "Client proposal calculator and margin logic."]
];

export default function ProjectsPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Projects</span>
        <h1>Every financial model belongs to a traceable project.</h1>
        <p className="lead">Projects become the SaaS workspace for business inputs, model runs, audits, approvals, and exports.</p>
      </section>
      <section className="grid">
        {projects.map(([name, status, text]) => (
          <article className="card" key={name}>
            <span className="badge">{status}</span>
            <h2>{name}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
