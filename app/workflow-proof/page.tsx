const workflow = [
  ["01", "Client Upload", "Financial PDFs, spreadsheets, notes, messy assumptions, and supporting documents enter a controlled workflow."],
  ["02", "Model Assumptions Extraction", "The system prepares a structured assumptions ledger so humans can see what the model believes before accepting output."],
  ["03", "Risk / Missing Data Detection", "Weak inputs, missing context, and risky assumptions are surfaced before the workflow moves forward."],
  ["04", "Human Approval Gate", "The finance owner reviews the assumptions and risk notes. Output is not treated as final without approval."],
  ["05", "Model Preview + Evidence Pack", "The workflow produces a reviewable financial model preview with traceable evidence and handoff notes."],
  ["06", "Client-Ready Report / Pilot Request", "The result becomes a pilot-ready package: understandable, controlled, and ready for a business conversation."],
];

const modules = [
  "Agent Workflow Map",
  "Assumptions Ledger Demo",
  "Risk / Missing Data Detection",
  "Human Approval Screen",
  "Evidence Pack Preview",
  "Pilot Request CTA",
];

export default function WorkflowProofPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Financial Agent Workflow Proof</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
          Finance AI must preserve assumptions, expose risks, require approval, and leave evidence behind.
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          AndyAI Finance Engine is positioned as a controlled finance workflow,
          not an autonomous magic box. It makes financial AI understandable to
          founders, finance leads, analysts, and operators.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {workflow.map(([step, title, body]) => (
            <article key={step} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-bold text-cyan-300">{step}</p>
              <h2 className="mt-2 text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-300">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <h2 className="text-2xl font-bold">Finance Agent Era Formula</h2>
          <p className="mt-4 text-lg text-slate-200">
            Financial Data + AI Agent Workflow + Human Approval + Evidence Memory = Trustworthy Finance Automation
          </p>
          <p className="mt-4 text-slate-300">
            Finansijski podaci + AI agentski tok rada + ljudsko odobrenje + dokazna memorija = finansijska automatizacija kojoj se može verovati.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {modules.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
              <p className="font-semibold text-slate-100">{item}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">Public proof module for finance users who need clarity before trust.</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/pilot-request" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950">Request Pilot</a>
          <a href="/demo-gallery" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">View Demo Gallery</a>
        </div>
      </section>
    </main>
  );
}
