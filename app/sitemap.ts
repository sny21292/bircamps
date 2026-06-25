import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { CAMPS } from "@/lib/data";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const now = new Date().toISOString();
  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "stay", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "fly", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "rentals", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "experiences", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "gallery", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "blog", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "cancellation-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "dos-and-donts", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${base}/${p.path}`.replace(/\/$/, "") || base,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const camps: MetadataRoute.Sitemap = CAMPS.map((c) => ({
    url: `${base}/stay/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...camps, ...posts];
}
