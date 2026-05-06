const page = {
  "version": "144.0.0",
  "title": "Email / CRM Handoff Master",
  "titleSr": "Master email / CRM handoff sistema",
  "purposeEn": "Define how pilot requests move to email follow-up or CRM.",
  "purposeSr": "Definiše kako pilot zahtevi prelaze u email follow-up ili CRM.",
  "route": "email-crm-handoff"
};

const stages = [
  {
    "label": "What this page proves",
    "en": "Define how pilot requests move to email follow-up or CRM.",
    "sr": "Definiše kako pilot zahtevi prelaze u email follow-up ili CRM."
  },
  {
    "label": "Why it matters",
    "en": "The user must understand the workflow before trusting the engine.",
    "sr": "Korisnik mora razumeti workflow pre nego što veruje engine-u."
  },
  {
    "label": "Human control",
    "en": "Approval remains visible before output becomes final.",
    "sr": "Odobrenje ostaje vidljivo pre nego što izlaz postane finalan."
  },
  {
    "label": "Evidence",
    "en": "The workflow preserves proof, assumptions, and next actions.",
    "sr": "Workflow čuva dokaz, pretpostavke i sledeće akcije."
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
        <p className="mt-4 max-w-5xl text-2xl font-semibold text-cyan-200">
          {page.titleSr}
        </p>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
          {page.purposeEn}
        </p>
        <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-400">
          {page.purposeSr}
        </p>

        <section className="mt-12 grid gap-4 md:grid-cols-2">
          {stages.map((stage) => (
            <article key={stage.label} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">{stage.label}</p>
              <p className="mt-4 leading-7 text-slate-200">{stage.en}</p>
              <p className="mt-3 leading-7 text-slate-400">{stage.sr}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-amber-300/30 bg-amber-300/10 p-6">
          <h2 className="text-2xl font-bold">No blind finance autopilot</h2>
          <p className="mt-3 max-w-4xl leading-7 text-slate-300">
            This route is part of the v133-v150 clarity road. The goal is to make
            the finance workflow visible, reviewable, and useful before deeper automation.
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/pilot-request" className="rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-slate-950">Request Pilot</a>
          <a href="/example-in-action" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-bold text-slate-100">Example in Action</a>
          <a href="/" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-bold text-slate-200">Back to Homepage</a>
        </div>
      </section>
    </main>
  );
}
