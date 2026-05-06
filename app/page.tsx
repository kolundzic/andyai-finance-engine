const proofCards = [
  {
    title: "Model Preview",
    href: "/model-preview",
    body: "A reviewable financial model preview before anything is treated as final.",
  },
  {
    title: "Assumptions & Risk",
    href: "/workflow-proof",
    body: "Key assumptions, missing data, and review points are surfaced instead of hidden.",
  },
  {
    title: "Approval Flow",
    href: "/approval-flow",
    body: "Human approval remains explicit before finance output becomes client-ready.",
  },
  {
    title: "Evidence Pack",
    href: "/demo-gallery",
    body: "Screenshots, proof modules, and output examples show how the workflow is documented.",
  },
];

const workflow = [
  "Client Upload",
  "Assumptions Extraction",
  "Risk / Missing Data Detection",
  "Human Approval Gate",
  "Model Preview",
  "Evidence Pack",
];

const audiences = [
  {
    name: "Founders",
    body: "Runway, investor updates, and finance clarity without turning every question into spreadsheet chaos.",
  },
  {
    name: "Finance Leads",
    body: "Reviewable assumptions, approval gates, and evidence-backed output for controlled finance workflows.",
  },
  {
    name: "Analysts / FP&A",
    body: "A cleaner path from messy source materials to structured model previews and handoff notes.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              AndyAI Finance Engine
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              A practical finance workflow for model previews, approvals, and evidence-backed output.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Finance AI is no longer just experimental. The useful systems will
              not simply generate answers — they will preserve assumptions, expose
              risk, require human approval, and leave evidence behind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/pilot-request"
                className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950"
              >
                Request Early Access
              </a>
              <a
                href="/workflow-proof"
                className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100"
              >
                See Workflow Proof
              </a>
              <a
                href="/demo-gallery"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200"
              >
                View Demo Gallery
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-400/30 bg-slate-900 p-6 shadow-2xl shadow-emerald-950/30">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Example in action
            </p>
            <div className="mt-6 space-y-3">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-300 text-sm font-black text-slate-950">
                    {index + 1}
                  </span>
                  <span className="font-semibold text-slate-100">{step}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              The goal is not autonomous finance magic. The goal is visible,
              reviewable, evidence-backed financial work.
            </p>
          </div>
        </div>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Product proof
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What a user can understand immediately
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {proofCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 transition hover:border-cyan-300/60"
              >
                <h3 className="text-xl font-bold text-slate-50">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{card.body}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              What goes in
            </p>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Financial PDFs and notes</li>
              <li>Messy spreadsheets and model fragments</li>
              <li>Runway, investor update, or reporting context</li>
              <li>Human constraints, assumptions, and review rules</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              What comes out
            </p>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>Structured model preview for review</li>
              <li>Assumptions and risk notes exposed clearly</li>
              <li>Human approval path before final use</li>
              <li>Evidence-backed handoff for a pilot conversation</li>
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
            What stays blocked
          </p>
          <h2 className="mt-3 text-3xl font-bold">No blind financial autopilot.</h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            AndyAI Finance Engine is designed around review. It does not treat
            generated financial output as automatically final, does not hide
            assumptions, and does not remove human responsibility from finance
            decisions.
          </p>
        </section>

        <section className="mt-16">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Who it is for
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <div key={item.name} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-emerald-400/30 bg-emerald-400/10 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Start controlled
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
            Test the workflow on one real finance use case before scaling anything.
          </h2>
          <p className="mt-4 max-w-4xl leading-7 text-slate-300">
            A serious pilot starts with the source materials, the review owner,
            the decision boundary, and the evidence expected at the end.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/pilot-request"
              className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950"
            >
              Request Pilot
            </a>
            <a
              href="/workflow-proof"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100"
            >
              Review Workflow
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
