export const metadata = {
  title: "AndyAI Finance Engine — A founder needs a funding model by Friday.",
  description: "A concrete story explains the product faster than abstract platform language.",
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
        <p style={{color:"#facc15",fontWeight:950,letterSpacing:"0.16em",textTransform:"uppercase",fontSize:12}}>CLIENT STORY</p>
        <h1 style={{fontSize:"clamp(44px,8vw,88px)",lineHeight:0.9,letterSpacing:"-0.08em",margin:"12px 0 22px",maxWidth:980}}>A founder needs a funding model by Friday.</h1>
        <p style={{color:"#cbd5e1",fontSize:20,lineHeight:1.8,maxWidth:860}}>A concrete story explains the product faster than abstract platform language.</p>
      </section>
      <section style={{maxWidth:1180,margin:"0 auto",padding:"20px 20px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:16}}>
        <section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#93c5fd",marginTop:0}}>Situation</h2><p style={{color:"#dbeafe",lineHeight:1.7}}>The founder has a business plan, monthly sales CSV, a balance sheet, and rough hiring assumptions. The spreadsheet is messy and nobody trusts the numbers.</p></section>
<section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#facc15",marginTop:0}}>AndyAI workflow</h2><p style={{color:"#dbeafe",lineHeight:1.7}}>The system creates a model preview, highlights assumptions, produces evidence notes, flags risks, and prepares an approval-ready output pack.</p></section>
<section style={{border:"1px solid rgba(148,163,184,0.25)",background:"rgba(15,23,42,0.75)",borderRadius:24,padding:20}}><h2 style={{color:"#86efac",marginTop:0}}>Result</h2><p style={{color:"#dbeafe",lineHeight:1.7}}>The founder and advisor can discuss the model with visible assumptions instead of arguing over hidden spreadsheet logic.</p></section>
      </section>
    </main>
  );
}
