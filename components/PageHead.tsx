import Link from "next/link";
import Ridges from "./Ridges";

export default function PageHead({
  index,
  title,
  lead,
  crumb,
}: {
  index: string;
  title: React.ReactNode;
  lead?: string;
  crumb?: string;
}) {
  return (
    <header className="pagehead">
      <Ridges />
      <div className="pagehead__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          {crumb ? <span style={{ color: "var(--ink-soft)" }}>{crumb}</span> : null}
        </nav>
        <span className="section-index light" style={{ marginTop: "1rem", display: "inline-block" }}>{index}</span>
        <h1>{title}</h1>
        {lead ? <p className="pagehead__lead">{lead}</p> : null}
      </div>
    </header>
  );
}
