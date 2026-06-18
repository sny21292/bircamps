import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { CAMPS, CAMP_TONE, campBySlug } from "@/lib/data";
import { SITE, whatsapp } from "@/lib/site";

export function generateStaticParams() {
  return CAMPS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const camp = campBySlug(slug);
  if (!camp) return {};
  const priceTxt = camp.price ? `₹${camp.price.toLocaleString("en-IN")} per person` : "Price on request";
  return {
    title: `${camp.name} — ${priceTxt}`,
    description: `${camp.blurb} ${priceTxt}. Riverside camping in Bir Billing, Himachal Pradesh — book on WhatsApp.`,
    alternates: { canonical: `/stay/${camp.slug}` },
    openGraph: { title: `${camp.name} · Bir Camps`, description: camp.blurb, images: [{ url: camp.image }] },
  };
}

export default async function CampDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const camp = campBySlug(slug);
  if (!camp) notFound();

  const priceTxt = camp.price ? `₹${camp.price.toLocaleString("en-IN")}` : "On request";
  const others = CAMPS.filter((c) => c.slug !== camp.slug).slice(0, 3);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${camp.name} — Bir Camps`,
    description: camp.description,
    image: `${SITE.domain}${camp.image}`,
    brand: { "@type": "Brand", name: "Bir Camps" },
    ...(camp.price
      ? { offers: { "@type": "Offer", price: String(camp.price), priceCurrency: "INR", availability: "https://schema.org/InStock", url: `${SITE.domain}/stay/${camp.slug}` } }
      : {}),
  };

  return (
    <>
      <JsonLd data={productLd} />
      <PageHead index="The Stay" crumb={camp.name} title={<>{camp.name}</>} />

      <section className="wrap" style={{ paddingTop: "clamp(2.5rem,6vh,4rem)" }}>
        <Link href="/stay" className="backlink">← All stays</Link>
        <div className="detail">
          <Reveal className="detail__media">
            <Image src={camp.image} alt={`${camp.name} at Bir Camps, Bir Billing`} fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} priority />
          </Reveal>
          <Reveal delay={0.1} className="detail__body">
            <h2>{camp.name}</h2>
            <div className="detail__price">
              <b>{priceTxt}</b>
              <span>{camp.price ? "per person" : camp.priceNote}</span>
            </div>
            <p>{camp.description}</p>
            <ul className="detail__feat">{camp.features.map((f) => <li key={f}>{f}</li>)}</ul>
            {camp.sleeps ? (
              <div className="specs">
                <div><span>Sleeps</span><b>{camp.sleeps}</b></div>
                <div><span>Includes</span><b>{camp.priceNote}</b></div>
              </div>
            ) : null}
            <div className="detail__cta">
              <a href={whatsapp(`Hi Bir Camps, I'd like to book the ${camp.name}.`)} target="_blank" rel="noopener" className="btn btn--solid">Book on WhatsApp</a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn btn--ghost light">Call {SITE.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap" style={{ paddingTop: 0 }}>
        <h2 className="display" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", marginBottom: "1.8rem" }}>Other ways to stay</h2>
        <div className="cards">
          {others.map((c, i) => (
            <Reveal as="article" className="card" key={c.slug} delay={(i % 3) * 0.1}>
              <Link href={`/stay/${c.slug}`} className="card-link" style={{ display: "contents" }}>
                <div className="card__media" data-tone={CAMP_TONE[c.slug]} />
                <div className="card__body">
                  <div className="card__top"><h3>{c.name}</h3>{c.tag ? <span className="card__tag">{c.tag}</span> : null}</div>
                  <p>{c.blurb}</p>
                  <div className="card__foot">
                    <span className="card__price">{c.price ? <>₹{c.price.toLocaleString("en-IN")}<small>/person</small></> : "On request"}</span>
                    <span className="card__meals">{c.priceNote}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
