export const metadata = {
  title: "AndyAI Finance Engine — Practical Financial Model Workflow",
  description: "A practical governed workflow: sample input to model preview, evidence pack, approval gate, and output package.",
};

const nav = [
  ["Home", "/"],
  ["Value Demo", "/value-demo"],
  ["Sample Input", "/sample-input"],
  ["Model Preview", "/model-preview"],
  ["Evidence", "/evidence-pack"],
  ["Approval", "/approval-flow"],
  ["Use Cases", "/use-cases"],
];

export default function Page() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(135deg,#020617 0%,#0f172a 50%,#111827 100%)",color:"#f8fafc",fontFamily:"Inter,ui-sans-serif,system-ui"}}>
      <nav style={{maxWidth:1180,margin:"0 auto",padding:"22px 20px",display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:950,fontSize:21}}>AndyAI Finance</a>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
          {nav.map(([label, href]) => <a key={href} href={href} style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.2)",borderRadius:999,padding:"8px 11px",fontWeight:800,fontSize:12}}>{label}</a>)}
        </div>
      </nav>
      <section style={{maxWidth:1180,margin:"0 auto",padding:"70px 20px 34px"}}>
        <p style={{color:"#facc15",fontWeight:950,letterSpacing:"0.16em",textTransform:"uppercase",fontSize:12}}>Practical value proof</p>
        <h1 style={{fontSize:"clamp(44px,8vw,88px)",lineHeight:0.9,letterSpacing:"-0.08em",margin:"12px 0 22px",maxWidth:980}}>From messy finance files to a reviewable model pack.</h1>
        <p style={{color:"#cbd5e1",fontSize:20,lineHeight:1.8,maxWidth:860}}>AndyAI Finance Engine helps teams turn a business plan, balance sheet, CSV, or spreadsheet into a structured model preview with assumptions, evidence, risks, and a human approval checkpoint.</p>
        <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:28}}>
          <a href="/value-demo" style={{background:"#facc15",color:"#020617",padding:"14px 18px",borderRadius:999,textDecoration:"none",fontWeight:950}}>See the workflow</a>
          <a href="/sample-input" style={{background:"rgba(15,23,42,0.85)",color:"#f8fafc",padding:"14px 18px",border:"1px solid rgba(148,163,184,0.3)",borderRadius:999,textDecoration:"none",fontWeight:900}}>View sample input</a>
        </div>
      </section>
      <section style={{maxWidth:1180,margin:"0 auto",padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
        <section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#93c5fd",marginTop:0}}>What goes in</h2><p style={{color:"#dbeafe",lineHeight:1.7}}>Business plan PDF, monthly CSV, balance sheet, assumptions, or founder notes.</p></section>
        <section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#86efac",marginTop:0}}>What comes out</h2><p style={{color:"#dbeafe",lineHeight:1.7}}>Model preview, assumptions ledger, evidence pack, risk notes, and approval-ready output pack.</p></section>
        <section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#fca5a5",marginTop:0}}>What stays blocked</h2><p style={{color:"#dbeafe",lineHeight:1.7}}>No hidden payment, no database writes, no live provider calls, no automatic financial execution.</p></section>
      </section>
    </main>
  );
}
