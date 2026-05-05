import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export function Header() {
  return (
    <header className="nav">
      <Link className="brand" href="/">
        <div className="logo">A</div>
        <div>
          <div>AndyAI Finance Engine</div>
          <small>Business Truth Factory</small>
        </div>
      </Link>
      <nav className="navLinks">
        <Link href="/workflow">Workflow</Link>
        <Link href="/demo">Demo</Link>
        <Link href="/library">Library</Link>
        <Link href="/proof">Proof</Link>
      </nav>
      <div className="badge">
        <BadgeCheck size={18} />
        v3.0 Public Showcase
      </div>
    </header>
  );
}
