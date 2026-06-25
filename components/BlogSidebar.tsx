import Link from "next/link";
import { SITE, whatsapp } from "@/lib/site";
import { POSTS } from "@/lib/posts";

export default function BlogSidebar() {
  // Show 3 latest posts as suggestions
  const latest = [...POSTS]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <aside className="blog-sidebar">
      <div className="sidebar-card">
        <h4>Book your stay</h4>
        <p>Camps from ₹850/person. Meals, bonfires and valley views included.</p>
        <a
          href={whatsapp("Hi Bir Camps, I'd like to book a stay.")}
          target="_blank"
          rel="noopener"
          className="btn btn--solid"
          style={{ width: "100%", justifyContent: "center", marginBottom: "0.6rem" }}
        >
          Book on WhatsApp
        </a>
        <Link href="/stay" className="btn btn--ghost light" style={{ width: "100%", justifyContent: "center" }}>
          View all camps →
        </Link>
      </div>

      <div className="sidebar-card">
        <h4>Quick info</h4>
        <div className="sidebar-info">
          <div><span>Phone</span><b>{SITE.phone}</b></div>
          <div><span>Season</span><b>Mar–Jun · Sep–Nov</b></div>
          <div><span>Location</span><b>Gunehr, Bir Billing</b></div>
          <div><span>From</span><b>₹850/person</b></div>
        </div>
      </div>

      <div className="sidebar-card">
        <h4>Popular guides</h4>
        <ul className="sidebar-posts">
          {latest.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
