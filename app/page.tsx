import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  FileSpreadsheet,
  Library,
  ShieldCheck,
  UserCheck
} from "lucide-react";

const steps = [
  {
    title: "Documents & Business Inputs",
    text: "Upload business briefs, SaaS assumptions, pricing notes, reports, and supporting data."
  },
  {
    title: "AI Extraction",
    text: "Extract revenue drivers, cost assumptions, growth rates, pricing tiers, and model inputs."
  },
  {
    title: "Financial Model",
    text: "Generate a structured model with summary, pricing, scenarios, and export-ready output."
  },
  {
    title: "Verification & Audit Trail",
    text: "Track source assumptions, calculations, warnings, and decision evidence."
  },
  {
    title: "Human Approval",
    text: "Keep the human in charge before any financial result becomes decision material."
  },
  {
    title: "Export Pack",
    text: "Produce a decision-ready Markdown/PDF/Excel-oriented package for review and sharing."
  }
];

const cards = [
  {
    icon: FileSpreadsheet,
    title: "SaaS Pricing Simulator",
    text: "Model pricing tiers, MRR, ARR, churn sensitivity, and profit logic."
  },
  {
    icon: BarChart3,
    title: "Business Plan Forecast",
    text: "Turn assumptions into a clear business forecast and investor-facing summary."
  },
  {
    icon: ShieldCheck,
    title: "Cost Governance",
    text: "Expose margin pressure, cost drivers, risk areas, and governance checkpoints."
  },
  {
    icon: BrainCircuit,
    title: "Scenario Engine",
    text: "Compare conservative, base, and optimistic cases without losing the audit trail."
  },
  {
    icon: UserCheck,
    title: "Human Approval Gate",
    text: "Fast AI output, but final responsibility remains with a human reviewer."
  },
  {
    icon: Library,
    title: "Solutions Library",
    text: "Ready-made finance demos and key-in-hand know-how for real business decisions."
  }
];

export default function Home() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="brand">
          <div className="logo">A</div>
          <div>
            <div>AndyAI Finance Engine</div>
            <small>Business Truth Factory</small>
          </div>
        </div>
        <div className="badge">
          <BadgeCheck size={18} />
          v2.0.1 Vercel Rescue Layer
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="badge">AI-assisted financial modeling with human truth verification</div>
          <h1>Finance models that can be checked, trusted, and used.</h1>
          <p className="lead">
            AndyAI Finance Engine turns business inputs into structured financial outputs with
            pricing logic, scenario views, audit trails, export packs, and a human approval gate.
          </p>
          <div className="ctaRow">
            <a className="button primary" href="https://github.com/kolundzic/andyai-finance-engine">
              View GitHub Proof <ArrowRight size={18} />
            </a>
            <a className="button" href="#library">
              Explore Solutions Library
            </a>
          </div>
        </div>

        <div className="panel">
          <div className="flow">
            {steps.map((step, index) => (
              <div className="step" key={step.title}>
                <div className="num">{index + 1}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="truth">
            AI can build the model fast. But the human must verify that the model tells the truth.
          </div>
        </div>
      </section>

      <section id="library" className="grid">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <article className="card" key={card.title}>
              <div className="cardIcon">
                <Icon size={25} />
              </div>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          );
        })}
      </section>

      <footer className="footer">
        <strong>We know how to help you best.</strong>
        <span>v2.0 working core → v3.0 public showcase → v4.0 Supabase SaaS foundation</span>
      </footer>
    </main>
  );
}
