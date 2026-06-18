import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { CAMPS, CAMP_TONE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Stay — Camps & Cottages in Bir Billing",
  description:
    "Seven ways to stay in Bir Billing: Swiss Luxury, Bell, Swiss, Safari, Dome and Dormitory tents plus the new Open Cottage. Riverside camping from ₹850 per person.",
  alternates: { canonical: "/stay" },
};

export default function StayPage() {
  const feature = CAMPS.find((c) => c.feature)!;
  const rest = CAMPS.filter((c) => !c.feature);

  return (
    <>
      <PageHead
        index="The Stay"
        crumb="Stay"
        title={<>Seven ways to spend <em>the night.</em></>}
        lead="From a snug dome under the pines to an open wooden cottage and a luxury Swiss tent with the valley at your feet — every stay comes with the same uninterrupted view."
      />

      <section className="wrap" style={{ paddingTop: "clamp(3rem,7vh,5rem)" }}>
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

      <BookCTA title="Not sure which camp?" text="Tell us your dates and group size and we'll suggest the best fit — and hold it for you." />
    </>
  );
}
