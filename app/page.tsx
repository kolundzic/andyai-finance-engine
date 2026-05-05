import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, BrainCircuit, FileSpreadsheet, Library, ShieldCheck, UserCheck } from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WorkflowSteps } from "./components/WorkflowSteps";

const cards = [
  { icon: FileSpreadsheet, title: "SaaS Pricing Simulator", text: "Model pricing tiers, MRR, ARR, churn sensitivity, and profit logic." },
  { icon: BarChart3, title: "Business Plan Forecast", text: "Turn assumptions into a clear business forecast and investor-facing summary." },
  { icon: ShieldCheck, title: "Cost Governance", text: "Expose margin pressure, cost drivers, risk areas, and governance checkpoints." },
  { icon: BrainCircuit, title: "Scenario Engine", text: "Compare conservative, base, and optimistic cases without losing the audit trail." },
  { icon: UserCheck, title: "Human Approval Gate", text: "Fast AI output, but final responsibility remains with a human reviewer." },
  { icon: Library, title: "Solutions Library", text: "Ready-made finance demos and key-in-hand know-how for real business decisions." }
];

export default function Home() {
  return (
    <main className="page">
      <Header />
      <section className="hero">
        <div>
          <div className="badge"><BadgeCheck size={18} /> Public finance engine showcase</div>
          <h1>Finance models that can be checked, trusted, and used.</h1>
          <p className="lead">
            AndyAI Finance Engine turns business inputs into structured financial outputs with pricing logic,
            scenario views, audit trails, export packs, and a human approval gate.
          </p>
          <div className="ctaRow">
            <Link className="button primary" href="/demo">View Working Demo <ArrowRight size={18} /></Link>
            <Link className="button" href="/library">Explore Solutions Library</Link>
          </div>
        </div>
        <div className="panel">
          <WorkflowSteps />
          <div className="truth">AI can build the model fast. But the human must verify that the model tells the truth.</div>
        </div>
      </section>

      <section id="library" className="grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="card" key={card.title}>
              <div className="cardIcon"><Icon size={25} /></div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          );
        })}
      </section>
      <Footer />
    </main>
  );
}
