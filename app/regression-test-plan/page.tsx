const page = {
  version: "193.0.0",
  title: "Regression Test Plan Master",
  description: "Defines how future changes are checked so that existing routes, docs, schemas, and workflows do not break."
};

const blocks = [
  {
    title: "Purpose",
    body: "Defines how future changes are checked so that existing routes, docs, schemas, and workflows do not break."
  },
  {
    title: "Production readiness layer",
    body: "This page defines one readiness layer between engine architecture and real pilot operation."
  },
  {
    title: "Human control",
    body: "Pilot operations must preserve review, role boundaries, quality gates, and visible next actions."
  },
  {
    title: "Practical value",
    body: "This makes the Finance Engine easier to explain, test, sell, pilot, and later implement as a real backend product."
  }
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          AndyAI Finance Engine - v{page.version}
        </p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          {page.title}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          {page.description}
        </p>
        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-xl font-bold text-slate-50">{block.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{block.body}</p>
            </article>
          ))}
        </section>
        <section className="mt-12 rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-bold">Production readiness formula</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Pilot Operations + Access Boundaries + Quality Gates + Evaluation Criteria + Production Gap Map = Finance Engine Completion
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/engine-status" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">Engine Status</a>
          <a href="/governed-output-lock" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">Governed Output</a>
          <a href="/" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">Back to Homepage</a>
        </div>
      </section>
    </main>
  );
}
