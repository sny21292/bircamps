import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { CAMPS, CAMP_TONE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stay — Camps & Cottages in Bir Billing",
  description:
    "Seven ways to stay in Bir Billing: Swiss Luxury, Bell, Safari, Dome and Dormitory tents plus the Open Cottage. Riverside camping from ₹850/person.",
  keywords: ["where to stay in Bir Billing", "camping in Bir Billing", "Swiss tent camping Bir", "bell tent Bir Billing", "budget camping Bir Billing", "riverside camping Himachal", "Bir Billing camp booking"],
  alternates: { canonical: "/stay" },
  openGraph: { images: [{ url: "/photos/Bir-Camp.webp" }] },
};

export default function StayPage() {
  const feature = CAMPS.find((c) => c.feature)!;
  const rest = CAMPS.filter((c) => !c.feature);

  return (
    <>
      <PageHead
        index="The Stay"
        crumb="Stay"
        path="/stay"
        title={<>Seven ways to spend <em>the night.</em></>}
        lead="From a snug dome under the pines to an open wooden cottage and a luxury Swiss tent with the valley at your feet — every stay comes with the same uninterrupted view."
      />

      <section className="wrap" style={{ paddingTop: "clamp(3rem,7vh,5rem)" }}>
        <Reveal>
          <p style={{ maxWidth: "680px", marginBottom: "2.5rem", color: "var(--ink-soft)", lineHeight: 1.7 }}>
            Looking for where to stay in Bir Billing? From budget camping starting at ₹850 to luxury Swiss tents and romantic bell tents, Bir Camps offers seven riverside camping options in Himachal Pradesh — each with Dhauladhar valley views, bonfire nights and the river a five-minute walk away. Whether you&apos;re planning a weekend getaway or a longer adventure camping trip near Dharamshala, there&apos;s a camp for you.
          </p>
        </Reveal>
        <div className="cards">
          <Reveal as="article" className="card card--feature">
            <Link href={`/stay/${feature.slug}`} className="card-link" style={{ display: "contents" }}>
              <div className="card__media card__media--feature" data-tone={CAMP_TONE[feature.slug]} />
              <div className="card__body">
                <div className="card__top">
                  <h3>{feature.name}</h3>
                  <span className="card__tag card__tag--new">{feature.tag}</span>
                </div>
                <p className="card__lead">{feature.blurb}</p>
                <ul className="card__feat">{feature.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}</ul>
                <div className="card__foot">
                  <span className="card__price">On request</span>
                  <span className="card__meals">{feature.priceNote}</span>
                </div>
              </div>
            </Link>
          </Reveal>

          {rest.map((c, i) => (
            <Reveal as="article" className="card" key={c.slug} delay={(i % 3) * 0.1}>
              <Link href={`/stay/${c.slug}`} className="card-link" style={{ display: "contents" }}>
                <div className="card__media" data-tone={CAMP_TONE[c.slug]} />
                <div className="card__body">
                  <div className="card__top">
                    <h3>{c.name}</h3>
                    {c.tag ? <span className="card__tag">{c.tag}</span> : null}
                  </div>
                  <p>{c.blurb}</p>
                  <div className="card__foot">
                    <span className="card__price">₹{c.price?.toLocaleString("en-IN")}<small>/person</small></span>
                    <span className="card__meals">{c.priceNote}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <Reveal><p style={{ color: "var(--ink-soft)", fontSize: "1.02rem" }}>First time camping? Read our <Link href="/blog/bir-billing-camping" style={{ color: "var(--amber)" }}>complete camping guide</Link>. Prefer luxury? See our <Link href="/blog/glamping-in-bir-billing" style={{ color: "var(--amber)" }}>glamping options</Link>.</p></Reveal>
      </section>

      <BookCTA title="Not sure which camp?" text="Tell us your dates and group size and we'll suggest the best fit — and hold it for you." />
    </>
  );
}
