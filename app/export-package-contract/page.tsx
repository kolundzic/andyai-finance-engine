const page = {
  version: "159.0.0",
  title: "Export Package Contract Master",
  description: "Defines export package contract: PDF, JSON, Markdown memo, evidence appendix, client handoff."
};

const schemaBlocks = [
  {
    title: "Input",
    body: "What the user gives the system: files, notes, numbers, assumptions, documents, and goals."
  },
  {
    title: "Workflow",
    body: "How the engine separates tasks, agent steps, review points, approval, and output."
  },
  {
    title: "Governance",
    body: "Where risk, missing data, human approval, and evidence memory protect the result."
  },
  {
    title: "Output",
    body: "What may become client-ready only after review, approval, and evidence attachment."
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
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-400">
          This page is part of the v156-v160 no-verify rescue road.
          Build audit is deferred to v160.1.0.
        </p>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {schemaBlocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <h2 className="text-xl font-bold text-slate-50">{block.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{block.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-bold">Engine principle</h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Input + Schema + Assumptions + Risk Rules + Human Approval + Evidence Pack + Audit Trail = Trustworthy Finance Automation
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/engine-roadmap" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">Engine Roadmap</a>
          <a href="/market-pilot-readiness" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">Market Readiness</a>
          <a href="/" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">Back to Homepage</a>
        </div>
      </section>
    </main>
  );
}
