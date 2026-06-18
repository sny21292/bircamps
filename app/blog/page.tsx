import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "The Journal — Guides to Bir Billing",
  description:
    "Guides and stories from Bir Billing: paragliding tips, camping advice, the Rajgundha valley trek, waterfalls and how to plan the perfect Himalayan weekend.",
  alternates: { canonical: "/blog" },
};

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogIndex() {
  const [feat, ...rest] = POSTS;
  return (
    <>
      <PageHead
        index="The Journal"
        crumb="Journal"
        title={<>Notes from <em>the valley.</em></>}
        lead="Practical guides and quiet stories from Bir Billing — written to help you plan a better trip and see more of the mountains."
      />

      <section className="wrap">
        <div className="bloglist">
          <Reveal as="article" className="feat">
            <Link href={`/blog/${feat.slug}`} className="postcard feat">
              <div className="postcard__media">
                <Image src={feat.image} alt={feat.title} fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} priority />
              </div>
              <div className="postcard__body">
                <div className="postcard__meta"><span className="tag">{feat.tag}</span><span>{fmt(feat.date)}</span><span>{feat.readTime}</span></div>
                <h3>{feat.title}</h3>
                <p>{feat.excerpt}</p>
                <span className="postcard__more">Read the guide →</span>
              </div>
            </Link>
          </Reveal>

          {rest.map((p, i) => (
            <Reveal as="article" key={p.slug} delay={(i % 2) * 0.1}>
              <Link href={`/blog/${p.slug}`} className="postcard">
                <div className="postcard__media">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="postcard__body">
                  <div className="postcard__meta"><span className="tag">{p.tag}</span><span>{fmt(p.date)}</span><span>{p.readTime}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="postcard__more">Read more →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
