const sections = [
  {
    title: "Product proof layer",
    body: "Public proof pages, demo gallery, workflow proof, pilot request pages, and visible product explanations are now present."
  },
  {
    title: "Engine schema layer",
    body: "Workflow schema, assumptions, evidence, approval, risk rules, model preview, and export package contracts are documented."
  },
  {
    title: "Engine midpoint layer",
    body: "Input normalization, task classification, agent roles, review checklist, evidence linking, audit trail, and governed output are now mapped."
  },
  {
    title: "Next road",
    body: "v181-v200 should complete pilot operations, readiness gates, role access prep, evaluation criteria, and production gap mapping."
  }
];

export default function EngineStatusPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          AndyAI Finance Engine - v180.2.0
        </p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Engine Status Report / Canon Lock
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          This page locks the engine midpoint after v161-v180 and prepares the
          next v181-v200 production readiness road.
        </p>
        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-xl font-bold text-slate-50">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{section.body}</p>
            </article>
          ))}
        </section>
        <section className="mt-12 rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-bold">Canon formula</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Input normalization + task classification + agent roles + review checklist
            + evidence links + audit trail + blocked output rules + human approval
            = governed finance output.
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/governed-output-lock" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">Governed Output Lock</a>
          <a href="/build-audit" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">Build Audit</a>
          <a href="/engine-roadmap" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">Engine Roadmap</a>
        </div>
      </section>
    </main>
  );
}
