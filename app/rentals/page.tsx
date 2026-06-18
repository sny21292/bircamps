import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { RENTALS } from "@/lib/data";
import { whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scooty & Bike Rentals in Bir Billing",
  description:
    "Rent a scooty or motorbike in Bir Billing to explore Billing, Rajgundha, Barot and the village cafés. Helmets included, easy daily rates — arrange it at Bir Camps.",
  alternates: { canonical: "/rentals" },
};

export default function RentalsPage() {
  return (
    <>
      <PageHead
        index="On Two Wheels"
        crumb="Rentals"
        title={<>Explore the valley <em>your way.</em></>}
        lead="The best of Bir Billing is spread across mountain roads and hidden hamlets. Grab a scooty for café-hopping or a motorbike for the long ride to Rajgundha and Barot — helmets included."
      />

      <section className="wrap">
        <div className="cards" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {RENTALS.map((r, i) => (
            <Reveal as="article" className="card" key={r.slug} delay={i * 0.1}>
              <div className="card__media" style={{ position: "relative" }}>
                <Image src={r.image} alt={`${r.name} in Bir Billing`} fill sizes="(max-width: 760px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
              <div className="card__body">
                <div className="card__top"><h3>{r.name}</h3></div>
                <p>{r.blurb}</p>
                <div className="card__foot">
                  <span className="card__price" style={{ fontSize: "1.2rem" }}>On request</span>
                  <span className="card__meals">{r.note}</span>
                </div>
                <a href={whatsapp(`Hi Bir Camps, I'd like to rent a ${r.name}.`)} target="_blank" rel="noopener" className="btn btn--ghost light" style={{ marginTop: "1.2rem", width: "100%", justifyContent: "center" }}>Enquire on WhatsApp</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <BookCTA title="Need wheels for your trip?" text="Tell us the dates and we'll have a scooty or bike ready when you arrive." message="Hi Bir Camps, I'd like to rent a vehicle in Bir Billing." />
    </>
  );
}
