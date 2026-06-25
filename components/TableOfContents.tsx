"use client";

import { useEffect, useState } from "react";

type Heading = { id: string; text: string; level: number };

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const article = document.querySelector(".prose");
    if (!article) return;

    const els = article.querySelectorAll("h2, h3");
    const items: Heading[] = [];
    els.forEach((el) => {
      if (!el.id) {
        el.id = el.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") || "";
      }
      items.push({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H3" ? 3 : 2,
      });
    });
    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="toc" aria-label="Table of contents">
      <span className="toc__title">On this page</span>
      <ul>
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "toc__sub" : ""}>
            <a
              href={`#${h.id}`}
              className={active === h.id ? "toc__active" : ""}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
