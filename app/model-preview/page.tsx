export const metadata = { title: "AndyAI Finance Engine — Example Output", description: "AndyAI Finance Engine public proof layer" };

export default function Page() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(135deg,#020617 0%,#0f172a 50%,#111827 100%)",color:"#f8fafc",fontFamily:"Inter,ui-sans-serif,system-ui"}}>
      <nav style={{maxWidth:1180,margin:"0 auto",padding:"22px 20px",display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:950,fontSize:21}}>AndyAI Finance</a>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><a href="/" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Home</a><a href="/value-demo" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Demo</a><a href="/demo-gallery" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Gallery</a><a href="/pilot" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Pilot</a><a href="/model-preview" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Example Output</a><a href="/approval-flow" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Approval</a><a href="/use-cases" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Use Cases</a><a href="/trust-center" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Trust</a></div>
      </nav>
      
    <section style={{maxWidth:1180,margin:"0 auto",padding:"72px 20px 28px"}}>
      <p style={{color:"#facc15",fontWeight:950,letterSpacing:"0.16em",textTransform:"uppercase",fontSize:12}}>Example output</p>
      <h1 style={{fontSize:"clamp(42px,8vw,86px)",lineHeight:0.92,letterSpacing:"-0.08em",margin:"12px 0 18px",maxWidth:1000}}>Preview the shape of a governed financial model.</h1>
      <p style={{color:"#cbd5e1",fontSize:20,lineHeight:1.8,maxWidth:920}}>These screenshots are mockups of the output surface: summary cards, charts, structured metrics, and audit-friendly presentation.</p>
    </section>
    <section style={{maxWidth:1180,margin:"0 auto",padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}><section style={{border:"1px solid rgba(148,163,184,0.18)",background:"rgba(15,23,42,0.72)",borderRadius:24,padding:20,display:"grid",gap:14}}>
      <div style={{position:"relative",overflow:"hidden",borderRadius:18,border:"1px solid rgba(148,163,184,0.14)",background:"#0b1120"}}>
        <img src="/demo/sleek-finance-model-dashboard-summary.png" alt="Summary dashboard" style={{display:"block",width:"100%",height:"auto"}} />
      </div>
      <div>
        <h3 style={{margin:"0 0 8px",fontSize:24,letterSpacing:"-0.04em"}}>Summary dashboard</h3>
        <p style={{margin:0,color:"#cbd5e1",lineHeight:1.75,fontSize:16}}>Useful for the first review pass: high-level metrics, status, and core story.</p>
      </div>
    </section>
<section style={{border:"1px solid rgba(148,163,184,0.18)",background:"rgba(15,23,42,0.72)",borderRadius:24,padding:20,display:"grid",gap:14}}>
      <div style={{position:"relative",overflow:"hidden",borderRadius:18,border:"1px solid rgba(148,163,184,0.14)",background:"#0b1120"}}>
        <img src="/demo/sleek-finance-dashboard-with-detailed-metrics.png" alt="Detailed dashboard" style={{display:"block",width:"100%",height:"auto"}} />
      </div>
      <div>
        <h3 style={{margin:"0 0 8px",fontSize:24,letterSpacing:"-0.04em"}}>Detailed dashboard</h3>
        <p style={{margin:0,color:"#cbd5e1",lineHeight:1.75,fontSize:16}}>A deeper metrics layer for analysis, scenario checking, and model review.</p>
      </div>
    </section>
<section style={{border:"1px solid rgba(148,163,184,0.18)",background:"rgba(15,23,42,0.72)",borderRadius:24,padding:20,display:"grid",gap:14}}>
      <div style={{position:"relative",overflow:"hidden",borderRadius:18,border:"1px solid rgba(148,163,184,0.14)",background:"#0b1120"}}>
        <img src="/demo/modern-financial-dashboard-ui-design.png" alt="UI output mockup" style={{display:"block",width:"100%",height:"auto"}} />
      </div>
      <div>
        <h3 style={{margin:"0 0 8px",fontSize:24,letterSpacing:"-0.04em"}}>UI output mockup</h3>
        <p style={{margin:0,color:"#cbd5e1",lineHeight:1.75,fontSize:16}}>A polished public-facing mockup that explains the destination of the workflow.</p>
      </div>
    </section></section><section style={{maxWidth:1180,margin:"0 auto",padding:"20px 20px 90px"}}><div style={{border:"1px solid rgba(250,204,21,0.30)",background:"linear-gradient(135deg,rgba(250,204,21,0.10),rgba(15,23,42,0.82))",borderRadius:28,padding:26,display:"grid",gap:12}}><p style={{margin:0,color:"#facc15",fontWeight:950,letterSpacing:"0.14em",textTransform:"uppercase",fontSize:12}}>Pilot CTA</p><h2 style={{margin:0,fontSize:"clamp(28px,5vw,46px)",letterSpacing:"-0.05em"}}>Request a pilot run — no payment, no automation, human review included.</h2><p style={{margin:0,color:"#dbeafe",lineHeight:1.75,fontSize:18,maxWidth:860}}>Use the screenshots as proof of the output shape, then move to the pilot request page when you want your own finance files transformed into a reviewable model pack.</p><div style={{display:"flex",gap:12,flexWrap:"wrap"}}><a href="/pilot" style={{background:"#facc15",color:"#020617",padding:"14px 18px",borderRadius:999,textDecoration:"none",fontWeight:950}}>Request pilot</a><a href="/demo-gallery" style={{background:"rgba(15,23,42,0.85)",color:"#f8fafc",padding:"14px 18px",borderRadius:999,border:"1px solid rgba(148,163,184,0.30)",textDecoration:"none",fontWeight:900}}>Browse gallery</a></div></div></section>
    
<section className="mt-10 rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6">
  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Financial agent workflow proof</p>
  <h2 className="mt-3 text-2xl font-bold text-slate-50">
    Finance AI needs more than answers. It needs assumptions, approval, and evidence.
  </h2>
  <p className="mt-3 text-slate-300">
    See how the workflow moves from client upload to assumptions ledger, risk detection,
    human approval, model preview, and evidence pack.
  </p>
  <div className="mt-5 flex flex-wrap gap-3">
    <a href="/workflow-proof" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950">See Workflow Proof</a>
    <a href="/pilot-request" className="rounded-full border border-slate-600 px-5 py-3 text-sm font-bold text-slate-100">Request Pilot</a>
  </div>
</section>

</main>
  );
}
