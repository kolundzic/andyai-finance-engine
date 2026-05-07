const page = {
  version: "167.0.0",
  title: "Audit Trail Contract Master",
  description: "Defines audit trail records: who changed what, when, why, and with which evidence."
};

const blocks = [
  {
    title: "Purpose",
    body: "Defines audit trail records: who changed what, when, why, and with which evidence."
  },
  {
    title: "Engine layer",
    body: "This page defines one engine layer between raw finance input and governed client-ready output."
  },
  {
    title: "Human control",
    body: "The system must keep review, approval, evidence, and blocked-output logic visible."
  },
  {
    title: "Practical value",
    body: "This turns the repo from a product shell into a structured finance automation engine."
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
          <h2 className="text-2xl font-bold">Engine midpoint formula</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Normalized Input + Task Classification + Agent Roles + Review Checklist + Evidence Links + Audit Trail = Governed Finance Output
          </p>
        </section>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/engine-roadmap" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">Engine Roadmap</a>
          <a href="/build-audit" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">Build Audit</a>
          <a href="/" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">Back to Homepage</a>
        </div>
      </section>
    </main>
  );
}
