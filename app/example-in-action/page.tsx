const stages = [
  {
    step: "01",
    title: "User brings messy finance material",
    short: "PDF, Excel, notes, assumptions, and unclear context.",
    detail:
      "The workflow starts where finance work usually starts: scattered files, half-finished spreadsheets, old assumptions, investor notes, and questions that need structure before they need automation.",
  },
  {
    step: "02",
    title: "Engine proposes the workflow",
    short: "The system separates input, assumptions, risks, approvals, and output.",
    detail:
      "Instead of jumping straight to an answer, AndyAI Finance Engine maps what must happen: what goes in, what needs extraction, what is uncertain, what must be reviewed, and what output is expected.",
  },
  {
    step: "03",
    title: "Agent prepares proof objects",
    short: "Model preview, assumptions ledger, risk notes, and evidence pack.",
    detail:
      "The finance agent prepares visible artifacts. A useful finance engine must show its work: assumptions, missing data, warnings, review points, and the evidence behind the proposed result.",
  },
  {
    step: "04",
    title: "Human approval gate",
    short: "A finance owner reviews before anything becomes final.",
    detail:
      "The human does not disappear. The approval gate keeps authority visible: approve, request changes, reject, or mark the output as not ready.",
  },
  {
    step: "05",
    title: "Output is saved with evidence",
    short: "A client-ready result is paired with traceable proof.",
    detail:
      "The final output is not just a generated answer. It is a reviewed package with assumptions, approvals, and evidence that can support a serious pilot conversation.",
  },
];

const visualBlocks = [
  "Finance Workflow: User → Agent → Proof → Approval → Output",
  "Human Approval Gate",
  "Financial Agent vs Excel",
  "Trust Ledger / Evidence Flow",
  "Pilot Customer Journey",
];

export default function ExampleInActionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
          AndyAI Finance Engine · v132.0.0
        </p>
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Example in Action: from messy finance inputs to reviewed, evidence-backed output.
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          This page is the bridge between engine and user. It shows the product
          in one practical sequence: user input → workflow proposal → proof
          objects → human approval → saved output.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
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
            Review Workflow Proof
          </a>
          <a
            href="/demo-gallery"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200"
          >
            View Demo Gallery
          </a>
        </div>

        <section className="mt-14 grid gap-5">
          {stages.map((stage) => (
            <article
              key={stage.step}
              className="grid gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 md:grid-cols-[120px_1fr]"
            >
              <div>
                <p className="text-4xl font-black text-emerald-300">{stage.step}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Step
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-50">{stage.title}</h2>
                <p className="mt-2 font-semibold text-cyan-200">{stage.short}</p>
                <p className="mt-4 max-w-4xl leading-7 text-slate-300">{stage.detail}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-14 rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Required Visual Blocks
          </p>
          <h2 className="mt-3 text-3xl font-bold">The first five visuals this product must explain.</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {visualBlocks.map((item, index) => (
              <div key={item} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-xs font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm font-bold leading-6">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-4xl leading-7 text-slate-300">
            These are not decorative images. They are product understanding
            tools. Each visual must help an ordinary user understand what the
            engine does and why human approval remains central.
          </p>
        </section>

        <section className="mt-14 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <h2 className="text-2xl font-bold">Excel lesson</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-300">
            Excel became powerful because the basic idea was simple: cells,
            formulas, tables, charts, results. AndyAI Finance Engine must be
            just as understandable: input, assumptions, model preview, risk
            warning, human approval, evidence pack, output.
          </p>
        </section>
      </section>
    </main>
  );
}
