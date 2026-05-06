export const metadata = { title: "AndyAI Finance Engine — Before and After", description: "AndyAI Finance Engine public proof layer" };

export default function Page() {
  return (
    <main style={{minHeight:"100vh",background:"linear-gradient(135deg,#020617 0%,#0f172a 50%,#111827 100%)",color:"#f8fafc",fontFamily:"Inter,ui-sans-serif,system-ui"}}>
      <nav style={{maxWidth:1180,margin:"0 auto",padding:"22px 20px",display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
        <a href="/" style={{color:"#fff",textDecoration:"none",fontWeight:950,fontSize:21}}>AndyAI Finance</a>
        <div style={{display:"flex",gap:8,flexWrap:"wrap"}}><a href="/" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Home</a><a href="/value-demo" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Demo</a><a href="/demo-gallery" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Gallery</a><a href="/pilot" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Pilot</a><a href="/model-preview" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Example Output</a><a href="/approval-flow" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Approval</a><a href="/use-cases" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Use Cases</a><a href="/trust-center" style={{color:"#cbd5e1",textDecoration:"none",border:"1px solid rgba(148,163,184,0.22)",borderRadius:999,padding:"8px 11px",fontWeight:850,fontSize:12}}>Trust</a></div>
      </nav>
      
    <section style={{maxWidth:1180,margin:"0 auto",padding:"72px 20px 28px"}}>
      <p style={{color:"#facc15",fontWeight:950,letterSpacing:"0.16em",textTransform:"uppercase",fontSize:12}}>Before / After</p>
      <h1 style={{fontSize:"clamp(42px,8vw,86px)",lineHeight:0.92,letterSpacing:"-0.08em",margin:"12px 0 18px",maxWidth:1000}}>Show the transformation, not just the promise.</h1>
      <p style={{color:"#cbd5e1",fontSize:20,lineHeight:1.8,maxWidth:920}}>The strongest proof for a new visitor is seeing the contrast between raw finance chaos and the cleaned, structured review layer.</p>
    </section>
    <section style={{maxWidth:1180,margin:"0 auto",padding:"20px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:16}}><section style={{border:"1px solid rgba(148,163,184,0.18)",background:"rgba(15,23,42,0.72)",borderRadius:24,padding:20,display:"grid",gap:14}}>
      <div style={{position:"relative",overflow:"hidden",borderRadius:18,border:"1px solid rgba(148,163,184,0.14)",background:"#0b1120"}}>
        <img src="/demo/from-chaos-to-clarity-in-finance.png" alt="Transformation story" style={{display:"block",width:"100%",height:"auto"}} />
      </div>
      <div>
        <h3 style={{margin:"0 0 8px",fontSize:24,letterSpacing:"-0.04em"}}>Transformation story</h3>
        <p style={{margin:0,color:"#cbd5e1",lineHeight:1.75,fontSize:16}}>A concept visual that communicates the journey from disorder to structured financial clarity.</p>
      </div>
    </section>
<section style={{border:"1px solid rgba(148,163,184,0.22)",background:"rgba(15,23,42,0.72)",borderRadius:24,padding:20}}>
      <h3 style={{marginTop:0,marginBottom:10,fontSize:24,letterSpacing:"-0.04em"}}>Before</h3>
      <p style={{margin:0,color:"#cbd5e1",lineHeight:1.75,fontSize:16}}>Scattered notes. Spreadsheet sprawl. Missing assumptions. Version confusion. Risk buried in the noise.</p>
    </section>
<section style={{border:"1px solid rgba(148,163,184,0.22)",background:"rgba(15,23,42,0.72)",borderRadius:24,padding:20}}>
      <h3 style={{marginTop:0,marginBottom:10,fontSize:24,letterSpacing:"-0.04em"}}>After</h3>
      <p style={{margin:0,color:"#cbd5e1",lineHeight:1.75,fontSize:16}}>A reviewable dashboard, a clearer summary, explicit assumptions, and a format ready for human decision-making.</p>
    </section></section><section style={{maxWidth:1180,margin:"0 auto",padding:"20px 20px 90px"}}><div style={{border:"1px solid rgba(250,204,21,0.30)",background:"linear-gradient(135deg,rgba(250,204,21,0.10),rgba(15,23,42,0.82))",borderRadius:28,padding:26,display:"grid",gap:12}}><p style={{margin:0,color:"#facc15",fontWeight:950,letterSpacing:"0.14em",textTransform:"uppercase",fontSize:12}}>Pilot CTA</p><h2 style={{margin:0,fontSize:"clamp(28px,5vw,46px)",letterSpacing:"-0.05em"}}>Request a pilot run — no payment, no automation, human review included.</h2><p style={{margin:0,color:"#dbeafe",lineHeight:1.75,fontSize:18,maxWidth:860}}>Use the screenshots as proof of the output shape, then move to the pilot request page when you want your own finance files transformed into a reviewable model pack.</p><div style={{display:"flex",gap:12,flexWrap:"wrap"}}><a href="/pilot" style={{background:"#facc15",color:"#020617",padding:"14px 18px",borderRadius:999,textDecoration:"none",fontWeight:950}}>Request pilot</a><a href="/demo-gallery" style={{background:"rgba(15,23,42,0.85)",color:"#f8fafc",padding:"14px 18px",borderRadius:999,border:"1px solid rgba(148,163,184,0.30)",textDecoration:"none",fontWeight:900}}>Browse gallery</a></div></div></section>
    </main>
  );
}
