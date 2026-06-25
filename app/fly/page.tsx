import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import BookCTA from "@/components/BookCTA";
import { FLIGHTS } from "@/lib/data";
import { SITE, whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paragliding in Bir Billing — Tandem Flights",
  description:
    "Tandem paragliding in Bir Billing from the highest take-off in India (8,000 ft). Certified pilots, no experience needed. Book your flight at Bir Camps.",
  keywords: ["paragliding in Bir Billing", "tandem paragliding India", "best paragliding site India", "Billing take off", "Bir Billing paragliding", "paragliding near Dharamshala"],
  alternates: { canonical: "/fly" },
  openGraph: { images: [{ url: "/photos/paragliding-bir-billing.webp" }] },
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Tandem Paragliding in Bir Billing",
  description: "Certified tandem paragliding from the Billing take-off (8,000 ft) — the highest paragliding site in India.",
  image: `${SITE.domain}/photos/paragliding-bir-billing.webp`,
  brand: { "@type": "Brand", name: "Bir Camps" },
  offers: FLIGHTS.map((f) => ({ "@type": "Offer", name: f.name, price: String(f.price), priceCurrency: "INR", availability: "https://schema.org/InStock" })),
};

export default function FlyPage() {
  return (
    <>
      <JsonLd data={productLd} />
      <PageHead
        index="The Sky"
        crumb="Paragliding"
        path="/fly"
        title={<>Billing is where the world comes <em>to fly.</em></>}
        lead="Bir Billing holds the highest paragliding take-off in India and one of the best in the world. Strap in with a certified pilot — no experience needed — and let the Dhauladhar thermals carry you over green ridgelines and the village below."
      />

      <section className="wrap">
        <div className="detail" style={{ marginBottom: "3rem" }}>
          <Reveal className="detail__media">
            <Image src="/photos/paragliding-bir-billing.webp" alt="Tandem paragliding over Bir Billing, Himachal Pradesh" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} priority />
          </Reveal>
          <Reveal delay={0.1} className="detail__body">
            <h2>Two ways to ride the thermals</h2>
            <p>Every flight is a tandem with a certified pilot, so all you need to bring is a sense of adventure. We&apos;ll get you to the Billing take-off, kit you out, and the rest is sky. Flights run best from March to June and September to November.</p>
            <div className="specs">
              <div><span>Take-off</span><b>Billing · 8,000 ft</b></div>
              <div><span>Landing</span><b>Bir village</b></div>
              <div><span>Experience</span><b>None required</b></div>
              <div><span>Season</span><b>Mar–Jun · Sep–Nov</b></div>
            </div>
          </Reveal>
        </div>

        <div className="flygrid">
          {FLIGHTS.map((f, i) => (
            <Reveal as="article" className={`flycard${f.feature ? " flycard--feature" : ""}`} key={f.slug} delay={i * 0.12}>
              {f.feature ? <span className="flycard__ribbon">The long ride</span> : null}
              <div className="flycard__head"><h3>{f.name}</h3><span className="flycard__price">₹{f.price.toLocaleString("en-IN")}</span></div>
              <p style={{ color: "var(--ink-soft)", marginBottom: "1.2rem", fontSize: "0.95rem" }}>{f.blurb}</p>
              <ul>
                <li><span>Airtime</span><b>{f.airtime}</b></li>
                <li><span>Take-off</span><b>{f.takeoff}</b></li>
                <li><span>Pilot</span><b>{f.pilot}</b></li>
                <li><span>Best for</span><b>{f.bestFor}</b></li>
              </ul>
              <a href={whatsapp(`I'd like to book the ${f.name} paragliding flight in Bir Billing.`)} target="_blank" rel="noopener" className={`btn ${f.feature ? "btn--solid" : "btn--ghost light"}`}>Reserve a flight</a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <Reveal><p style={{ color: "var(--ink-soft)", fontSize: "1.02rem" }}>New to paragliding? Read our <Link href="/blog/bir-billing-paragliding" style={{ color: "var(--amber)" }}>first-timer&apos;s guide</Link>. Planning your dates? Check the <Link href="/blog/best-time-to-visit-bir-billing" style={{ color: "var(--amber)" }}>best time to visit Bir Billing</Link>.</p></Reveal>
      </section>

      <BookCTA title="Book your flight" text="Message us your dates and number of flyers — we'll confirm pilots and timing." message="Hi Bir Camps, I'd like to book paragliding in Bir Billing." />
    </>
  );
}
