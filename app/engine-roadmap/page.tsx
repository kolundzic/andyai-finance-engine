const roadmap = [
  {
    version: "151.0.0",
    title: "Engine Completion Roadmap Master",
    description: "Open the v151-v200 engine completion road."
  },
  {
    version: "152.0.0",
    title: "Finance Workflow Schema Master",
    description: "Define input, task, agent step, review, approval, and output schema."
  },
  {
    version: "153.0.0",
    title: "Assumptions Ledger Data Model Master",
    description: "Define assumptions, sources, confidence, risk, and review status."
  },
  {
    version: "154.0.0",
    title: "Evidence Pack Data Model Master",
    description: "Define proof package and links to output."
  },
  {
    version: "155.0.0",
    title: "Human Approval State Machine Master",
    description: "Define approval states and transitions."
  },
  {
    version: "160.0.0",
    title: "Engine Architecture Lock Master",
    description: "Lock first engine architecture baseline."
  },
  {
    version: "170.0.0",
    title: "Engine Midpoint Lock Master",
    description: "Lock the first midpoint of the completion road."
  },
  {
    version: "180.0.0",
    title: "Governed Output Lock Master",
    description: "Lock reviewed and evidence-backed output rules."
  },
  {
    version: "190.0.0",
    title: "Pilot Operations Lock Master",
    description: "Lock the pilot operations layer."
  },
  {
    version: "200.0.0",
    title: "Finance Engine Completion Lock Master",
    description: "Lock the engine completion phase and open slow UI, visual, and animation refinement."
  }
];

export default function EngineRoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          AndyAI Finance Engine - v151.0.0
        </p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Engine Completion Roadmap
        </h1>
        <p className="mt-4 max-w-5xl text-2xl font-semibold text-cyan-200">
          Od izloga proizvoda do završene finansijske mašine.
        </p>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          Up to v150, the product gained proof, visual clarity and pilot readiness.
          From v151 to v200, the work becomes engine completion: schemas, data
          contracts, approvals, evidence, audit trail, dashboard state, and export-ready output.
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-400">
          Do v150 smo napravili izlog, dokaz i pilot-ready strukturu. Od v151 do v200
          završavamo mašinu ispod haube.
        </p>

        <section className="mt-12 rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-bold">Finance Engine Formula</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Input + Workflow Schema + Assumptions + Risk Rules + Human Approval +
            Evidence Pack + Audit Trail = Trustworthy Finance Automation
          </p>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {roadmap.map((item) => (
            <article key={item.version} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                v{item.version}
              </p>
              <h2 className="mt-3 text-xl font-bold text-slate-50">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <h2 className="text-2xl font-bold">No blind finance autopilot</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-300">
            The roadmap exists to prevent fog. Every future engine layer must make
            the financial workflow more visible, reviewable, and evidence-backed.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/market-pilot-readiness" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">
            Market Readiness
          </a>
          <a href="/example-in-action" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">
            Example in Action
          </a>
          <a href="/" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">
            Back to Homepage
          </a>
        </div>
      </section>
    </main>
  );
}
