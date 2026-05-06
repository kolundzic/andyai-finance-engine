export const metadata = {
  title: "AndyAI Finance Engine — Request a pilot run.",
  description: "No payment, no automation, human review included.",
};

export default function Page() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(135deg,#020617 0%,#0f172a 50%,#111827 100%)",color:"#f8fafc",fontFamily:"Inter,ui-sans-serif,system-ui"}}>
      <nav style={{maxWidth:1180,margin:"0 auto",padding:"22px 20px",display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:950,fontSize:21}}>AndyAI Finance</a>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><a href="/" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Home</a><a href="/value-demo" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Demo</a><a href="/pilot" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Pilot</a><a href="/model-preview" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Example Output</a><a href="/approval-flow" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Approval</a><a href="/use-cases" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Use Cases</a><a href="/trust-center" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Trust</a></div>
      </nav>
      <section style={{maxWidth:1180,margin:"0 auto",padding:"70px 20px 34px"}}>
        <p style={{color:"#facc15",fontWeight:950,letterSpacing:"0.16em",textTransform:"uppercase",fontSize:12}}>REQUEST PILOT</p>
        <h1 style={{fontSize:"clamp(44px,8vw,88px)",lineHeight:0.9,letterSpacing:"-0.08em",margin:"12px 0 22px",maxWidth:1000}}>Request a pilot run.</h1>
        <p style={{color:"#cbd5e1",fontSize:20,lineHeight:1.8,maxWidth:900}}>No payment, no automation, human review included.</p>
      </section>
      <section style={{maxWidth:1180,margin:"0 auto",padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}><section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#93c5fd",marginTop:0,letterSpacing:"-0.04em"}}>1. What do you have?</h2><p style={{color:"#dbeafe",lineHeight:1.75,fontSize:16}}>PDF, CSV, spreadsheet, balance sheet, founder notes, business plan, or a rough financial scenario.</p></section>
<section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#facc15",marginTop:0,letterSpacing:"-0.04em"}}>2. What do you need?</h2><p style={{color:"#dbeafe",lineHeight:1.75,fontSize:16}}>Runway model, investor pack, loan preparation, proposal support, or a reviewable finance brief.</p></section>
<section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#86efac",marginTop:0,letterSpacing:"-0.04em"}}>3. What happens next?</h2><p style={{color:"#dbeafe",lineHeight:1.75,fontSize:16}}>We prepare a pilot model pack. No live execution. No database writes. You review before anything moves.</p></section>
<section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#fca5a5",marginTop:0,letterSpacing:"-0.04em"}}>Safety guarantee</h2><p style={{color:"#dbeafe",lineHeight:1.75,fontSize:16}}>No payment. No checkout. No automatic financial action. Human review is included by design.</p></section></section><section style={{maxWidth:900,margin:"0 auto",padding:"20px"}}><div style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.78)",borderRadius:28,padding:24}}><h2 style={{color:"#facc15",marginTop:0}}>Pilot request form blueprint</h2><p style={{color:"#dbeafe",lineHeight:1.75}}>For this static safety phase, this page defines the fields without submitting data: file type, goal, and email/contact path. Live submit remains blocked until the runtime gate is intentionally opened.</p><ul style={{color:"#dbeafe",lineHeight:1.8}}><li>File type: PDF / CSV / spreadsheet / notes</li><li>Goal: runway / investor pack / loan prep / proposal</li><li>Contact: email or booked call</li></ul></div></section>
      
    </main>
  );
}
