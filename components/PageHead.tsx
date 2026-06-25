import Link from "next/link";
import Ridges from "./Ridges";
import JsonLd from "./JsonLd";
import { SITE } from "@/lib/site";

export default function PageHead({
  index,
  title,
  lead,
  crumb,
  path,
}: {
  index: string;
  title: React.ReactNode;
  lead?: string;
  crumb?: string;
  path?: string;
}) {
  const breadcrumbLd = crumb
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
          { "@type": "ListItem", position: 2, name: crumb, item: path ? `${SITE.domain}${path}` : undefined },
        ],
      }
    : null;

  return (
    <header className="pagehead">
      <Ridges />
      {breadcrumbLd && <JsonLd data={breadcrumbLd} />}
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
