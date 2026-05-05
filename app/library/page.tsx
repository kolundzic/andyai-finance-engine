import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const solutions = [
  ["SaaS Pricing Simulator", "Pricing tiers, MRR, ARR, churn, and profit logic."],
  ["Investor Model Pack", "Investor-ready summary, assumptions, and key metrics."],
  ["Agency Proposal Calculator", "Scoped fees, timelines, margin, and profitability."],
  ["Business Plan Forecast", "3–5 year forecast structure for founders and small businesses."],
  ["Cost Governance Report", "Cost drivers, margin leaks, and improvement opportunities."],
  ["Scenario Engine", "Conservative, base, and optimistic outcomes compared clearly."]
];

export default function LibraryPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Finance Solutions Library</span>
        <h1>Ready-made demos and key-in-hand know-how.</h1>
        <p className="lead">
          The future product library will package practical financial workflows for real business decisions.
        </p>
      </section>
      <section className="grid">
        {solutions.map(([title, text]) => (
          <article className="card" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>
      <Footer />
    </main>
  );
}
