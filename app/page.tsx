import Link from "next/link";
import Reveal from "@/components/Reveal";
import Ridges from "@/components/Ridges";
import Counter from "@/components/Counter";
import JsonLd from "@/components/JsonLd";
import { CAMPS, STATS, EXPERIENCES, GALLERY, FLIGHTS } from "@/lib/data";
import { SITE, whatsapp } from "@/lib/site";

const TONE: Record<string, string> = {
  "open-cottage": "cottage",
  "swiss-luxury-camp": "luxury",
  "bell-camp": "bell",
  "swiss-camp": "swiss",
  "safari-camp": "safari",
  "dormitory-camp": "dorm",
  "dome-camp": "dome",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does camping in Bir Billing cost at Bir Camps?",
      acceptedAnswer: { "@type": "Answer", text: "Camps start at ₹850 per person for a Dome Camp and go up to ₹2,000 per person for a Swiss Luxury Camp with complimentary meals and a private bonfire. Bell, Swiss, Safari and Dormitory options sit in between." },
    },
    {
      "@type": "Question",
      name: "How much is paragliding in Bir Billing?",
      acceptedAnswer: { "@type": "Answer", text: "Classic tandem paragliding (15–20 minutes) is ₹3,000 and Prime paragliding (40–50 minutes) is ₹4,500. Both fly with certified tandem pilots from the Billing take-off at 8,000 ft." },
    },
    {
      "@type": "Question",
      name: "Where is Bir Camps located?",
      acceptedAnswer: { "@type": "Answer", text: "Bir Camps is in Gunehr village, about 2 km from Bir bus stop, in Baijnath tehsil, Kangra district, Himachal Pradesh 176077 — surrounded by mountains with the river a five-minute walk away." },
    },
    {
      "@type": "Question",
      name: "What is the best time to visit Bir Billing?",
      acceptedAnswer: { "@type": "Answer", text: "The best seasons for camping and paragliding in Bir Billing are March to June and September to November, when the skies are clear and the weather is mild." },
    },
  ],
};

export default function Home() {
  const feature = CAMPS.find((c) => c.feature)!;
  const rest = CAMPS.filter((c) => !c.feature);

  return (
    <>
      <JsonLd data={faqLd} />

      {/* ---------- HERO ---------- */}
      <section className="hero" id="hero">
        <div className="hero__sky" aria-hidden="true">
          <div className="hero__stars" />
          <div className="hero__sun" />
        </div>
        <Ridges />
        <div className="mist mist--a" aria-hidden="true" />
        <div className="mist mist--b" aria-hidden="true" />

        <div className="hero__content">
          <Reveal as="span" className="eyebrow">Bir Billing · Himachal Pradesh · 2,400 m</Reveal>
          <h1 className="hero__title">
            <Reveal as="span" className="line" delay={0.1}>Sleep beneath</Reveal>
            <Reveal as="span" className="line" delay={0.22}>the <em>Dhauladhars.</em></Reveal>
          </h1>
          <Reveal delay={0.34}>
            <p className="hero__sub">Riverside camps, world-class paragliding and bonfire-lit nights in the foothills of the Indian Himalayas.</p>
          </Reveal>
          <Reveal delay={0.46}>
            <div className="hero__cta">
              <Link href="/stay" className="btn btn--solid">Find your camp</Link>
              <Link href="/fly" className="btn btn--ghost">Take to the sky →</Link>
            </div>
          </Reveal>
        </div>

        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero__scroll-line" />
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} style={{ display: "inline-flex", gap: "2rem", alignItems: "center" }}>
              <span>Riverside Camps</span><span className="dot">•</span>
              <span>Tandem Paragliding</span><span className="dot">•</span>
              <span>Bonfire Nights</span><span className="dot">•</span>
              <span>Himalayan Café</span><span className="dot">•</span>
              <span>Pine Forests</span><span className="dot">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* ---------- INTRO ---------- */}
      <section className="intro">
        <div className="intro__grid">
          <Reveal className="intro__lead">
            <span className="section-index">01 — The Place</span>
            <h2 className="display">A clearing where the river<br />meets the mountain.</h2>
          </Reveal>
          <Reveal delay={0.12} className="intro__body">
            <p>Tucked into Gunehr village, two kilometres from Bir, our camp sits in a quiet fold of the valley — lush green ridgelines on every side and the cold mountain river a five-minute walk away.</p>
            <p>By day it&apos;s paragliders threading the thermals overhead. By night it&apos;s a sky full of stars and a fire that everyone gathers around. This is the slow, generous side of the Himalayas — and you&apos;re invited.</p>
          </Reveal>
        </div>

        <Reveal className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <Counter to={s.num} suffix={s.unit} />
              <p>{s.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ---------- STAY ---------- */}
      <section className="stay" id="stay">
        <div className="stay__head">
          <Reveal as="span" className="section-index light">02 — The Stay</Reveal>
          <Reveal delay={0.1}><h2 className="display">Seven ways to spend<br />the night.</h2></Reveal>
          <Reveal delay={0.2}><p className="stay__intro">From a snug dome under the pines to an open wooden cottage and a luxury Swiss tent with the valley at your feet — every stay comes with the same uninterrupted view.</p></Reveal>
        </div>

        <div className="cards">
          {/* feature: the new open cottage */}
          <Reveal as="article" className="card card--feature">
            <Link href={`/stay/${feature.slug}`} className="card-link" style={{ display: "contents" }}>
              <div className="card__media card__media--feature" data-tone={TONE[feature.slug]} />
              <div className="card__body">
                <div className="card__top">
                  <h3>{feature.name}</h3>
                  <span className="card__tag card__tag--new">{feature.tag}</span>
                </div>
                <p className="card__lead">{feature.blurb}</p>
                <ul className="card__feat">
                  {feature.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}
                </ul>
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
                <div className="card__media" data-tone={TONE[c.slug]} />
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

      {/* ---------- FLY ---------- */}
      <section className="fly" id="fly">
        <div className="fly__bg" aria-hidden="true" />
        <div className="fly__inner">
          <Reveal className="fly__intro">
            <span className="section-index light">03 — The Sky</span>
            <h2 className="display">Billing is where<br />the world comes<br />to fly.</h2>
            <p>Bir Billing holds the highest paragliding take-off in India and one of the best in the world. Strap in with a certified pilot — no experience needed — and let the Dhauladhar thermals carry you over green ridgelines and the village below.</p>
          </Reveal>

          <div className="fly__cards">
            {FLIGHTS.map((f, i) => (
              <Reveal as="article" className={`flycard${f.feature ? " flycard--feature" : ""}`} key={f.slug} delay={i * 0.12}>
                {f.feature ? <span className="flycard__ribbon">The long ride</span> : null}
                <div className="flycard__head"><h3>{f.name}</h3><span className="flycard__price">₹{f.price.toLocaleString("en-IN")}</span></div>
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
        </div>
      </section>

      {/* ---------- EXPERIENCES ---------- */}
      <section className="exp" id="experiences">
        <div className="exp__head">
          <Reveal as="span" className="section-index">04 — The Days</Reveal>
          <Reveal delay={0.1}><h2 className="display">More than a place<br />to sleep.</h2></Reveal>
        </div>
        <div className="exp__grid">
          {EXPERIENCES.map((e, i) => (
            <Reveal
              as="div"
              key={e.key}
              delay={i * 0.1}
              data-tone={e.tone}
              className={`exp__item${e.span === "tall" ? " exp__item--tall" : ""}${e.span === "wide" ? " exp__item--wide" : ""}`}
            >
              <div className="exp__label"><h3>{e.title}</h3><p>{e.text}</p></div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="gallery" id="gallery">
        <div className="gallery__head">
          <Reveal as="span" className="section-index light">05 — The View</Reveal>
          <Reveal delay={0.1}><h2 className="display">A valley that<br />doesn&apos;t sit still.</h2></Reveal>
        </div>
        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <Reveal as="figure" key={g.tone} delay={(i % 3) * 0.1} className="gframe" data-tone={g.tone}>
              <figcaption>{g.caption}</figcaption>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="gallery__note">Photographs from <a href={SITE.instagram} target="_blank" rel="noopener">@bircamps</a></p></Reveal>
      </section>

      {/* ---------- QUOTES ---------- */}
      <section className="quotes">
        <div className="quotes__inner">
          <Reveal as="span" className="section-index">06 — The Guests</Reveal>
          <Reveal delay={0.1}>
            <figure className="quote">
              <blockquote>&ldquo;An exceptionally superb view and the kind of staff that makes you feel like family. A true WOW experience, far from the chaos of the city.&rdquo;</blockquote>
              <figcaption>— A guest, summer on the ridge</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="quotes__rating">
              <span className="stars">★★★★★</span>
              <p>Loved for cleanliness, hospitality and that view.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section className="visit" id="visit">
        <div className="visit__inner">
          <Reveal className="visit__left">
            <span className="section-index light">07 — The Way Here</span>
            <h2 className="display">Come up the mountain.</h2>
            <p className="visit__addr">Bunhla Marhola, Gunehr Village<br />P.O. Bir, Teh. Baijnath<br />Distt. Kangra, Bir — 176077<br />Himachal Pradesh, India</p>
            <p className="visit__hint">Two kilometres from Bir bus stop. We&apos;ll help you find the turn.</p>
            <div className="visit__contacts">
              <a href={`tel:${SITE.phoneRaw}`} className="visit__contact"><span>Call / WhatsApp</span><b>{SITE.phone}</b></a>
              <a href={`mailto:${SITE.email}`} className="visit__contact"><span>Email</span><b>{SITE.email}</b></a>
            </div>
            <div className="visit__cta">
              <a href={whatsapp("Hi Bir Camps, I'd like to check availability.")} target="_blank" rel="noopener" className="btn btn--solid">Book on WhatsApp</a>
              <a href={SITE.maps} target="_blank" rel="noopener" className="btn btn--ghost light">Open in Maps →</a>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="visit__right">
            <div className="visit__card">
              <div className="visit__map" aria-hidden="true"><div className="visit__pin">▲</div></div>
              <div className="visit__season">
                <div><span>Best season</span><b>Mar – Jun · Sep – Nov</b></div>
                <div><span>Check-in</span><b>From 12:00 noon</b></div>
                <div><span>Reach us by</span><b>Road · Bir bus stop</b></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
