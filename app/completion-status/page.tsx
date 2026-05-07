const sections = [
  {
    title: "Completion road",
    body: "v151-v200 is complete: roadmap, schema, architecture, midpoint, pilot operations, production readiness, and completion lock."
  },
  {
    title: "What is complete",
    body: "The repo now has a build-verified product proof surface, engine architecture body, governed output layer, and production readiness map."
  },
  {
    title: "What is not complete",
    body: "Real database persistence, auth, RBAC, upload parsing, runtime calculation, billing, monitoring, and full SaaS operations still need implementation."
  },
  {
    title: "Next phase",
    body: "After v200, work should become slower, clearer, and more practical: page-by-page UI, Supabase, runtime contracts, evidence pack, approval workflow, and partner demo."
  }
];

export default function CompletionStatusPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          AndyAI Finance Engine - v200.2.0
        </p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Finance Engine Completion Status / Canon Lock
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          This page locks the v151-v200 engine completion road and opens the next slower implementation phase.
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
            Financial input + workflow schema + assumptions ledger + evidence pack + human approval + audit trail + pilot operations + production readiness gap map = finance automation that can be explained, reviewed, tested, and trusted.
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/finance-engine-completion-lock" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">Completion Lock</a>
          <a href="/engine-status" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">Engine Status</a>
          <a href="/production-readiness-gap-map" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">Gap Map</a>
        </div>
      </section>
    </main>
  );
}
