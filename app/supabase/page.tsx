import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getSupabaseStatus } from "../../lib/supabaseClient";

export default function SupabasePage() {
  const status = getSupabaseStatus();

  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Supabase SaaS Foundation</span>
        <h1>Durable memory and proof layer for finance workflows.</h1>
        <p className="lead">
          Supabase stores projects, business inputs, model runs, audit events,
          approval decisions, and export package metadata.
        </p>
      </section>

      <section className="panel">
        <h2>Connection Status</h2>
        <div className={status.configured ? "statusGood" : "statusWarn"}>
          {status.configured ? "🟢 Configured" : "🟡 Not configured yet"}
        </div>
        <p>{status.message}</p>
      </section>

      <section className="grid">
        <article className="card"><h2>Projects</h2><p>Top-level business or client finance workspaces.</p></article>
        <article className="card"><h2>Model Runs</h2><p>Each generated model is stored as a traceable run.</p></article>
        <article className="card"><h2>Audit Events</h2><p>Every important assumption and check can leave evidence.</p></article>
        <article className="card"><h2>Human Approval</h2><p>No output becomes decision material without human review.</p></article>
        <article className="card"><h2>Exports</h2><p>Markdown, PDF, Excel, and memo packages become trackable artifacts.</p></article>
        <article className="card"><h2>RLS</h2><p>Row-level security keeps SaaS data isolated by ownership.</p></article>
      </section>
      <Footer />
    </main>
  );
}
