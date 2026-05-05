import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ApprovalPage() {
  return (
    <main className="page">
      <Header />
      <section className="sectionHero">
        <span className="badge">Human Approval Gate</span>
        <h1>AI output becomes business decision material only after human review.</h1>
        <p className="lead">
          Approval records are not decorative. They are the boundary between generated output and accountable decision-making.
        </p>
      </section>
      <section className="panel">
        <div className="truth">Decision options: approved · rejected · needs revision</div>
        <p>
          v4.0 establishes the approval data model. Later versions will connect this page to live Supabase records and authenticated reviewers.
        </p>
      </section>
      <Footer />
    </main>
  );
}
