const fields = [
  "Name and role",
  "Work email",
  "Company / project context",
  "Financial workflow to test",
  "Source materials available",
  "Approval / review owner",
];

export default function PilotRequestPage() {
  const subject = encodeURIComponent("AndyAI Finance Engine — Pilot Request");
  const body = encodeURIComponent([
    "Name:",
    "Role:",
    "Company:",
    "Work email:",
    "Finance workflow to test:",
    "Available materials:",
    "Approval owner:",
    "Preferred next step:",
  ].join("\n"));

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Live pilot request</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Request an early finance workflow pilot.
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          Start a controlled AndyAI Finance Engine pilot: messy financial inputs,
          model preview, assumptions ledger, approval gate, and evidence pack.
          The goal is not autonomous finance decisions. The goal is reviewable,
          human-approved finance automation.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:kolundzic@gmail.com?subject=${subject}&body=${body}`} className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">
            Request Early Access
          </a>
          <a href="/workflow-proof" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">
            See Workflow Proof
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {fields.map((field) => (
            <div key={field} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold text-emerald-300">{field}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Captured for pilot scoping and human review, not for automatic final decisions.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <h2 className="text-2xl font-bold">What stays controlled</h2>
          <p className="mt-3 max-w-4xl text-slate-300">
            The pilot must preserve assumptions, expose risk, require approval,
            and leave evidence behind. That is the trust layer.
          </p>
        </div>
      </section>
    </main>
  );
}
