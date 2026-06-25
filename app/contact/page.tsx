import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions — Bir Camps, Bir Billing",
  description:
    "Call or WhatsApp +91 89888 56055 to book Bir Camps. Gunehr village, 2 km from Bir bus stop, Himachal Pradesh 176077. Directions and check-in info.",
  keywords: ["Bir Camps contact", "how to reach Bir Billing", "Bir Camps directions", "Bir Billing location", "book camping Bir Billing", "Gunehr village Bir"],
  alternates: { canonical: "/contact" },
  openGraph: { images: [{ url: "/photos/Bir-Camp.webp" }] },
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        index="The Way Here"
        crumb="Contact"
        path="/contact"
        title={<>Come up <em>the mountain.</em></>}
        lead="The fastest way to book is a quick WhatsApp. Send your dates and we'll take it from there."
      />

      <section className="wrap">
        <div className="contact-grid">
          <Reveal>
            <p className="visit__addr" style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
              Bunhla Marhola, Gunehr Village<br />P.O. Bir, Teh. Baijnath<br />Distt. Kangra, Bir — 176077<br />Himachal Pradesh, India
            </p>
            <p className="visit__hint" style={{ margin: "0.8rem 0 1.6rem" }}>Two kilometres from Bir bus stop. We&apos;ll help you find the turn. See our <Link href="/blog/how-to-reach-bir-billing" style={{ color: "var(--amber)" }}>complete guide on how to reach Bir Billing</Link>.</p>

            <div className="visit__contacts" style={{ margin: "0 0 1.6rem" }}>
              <a href={`tel:${SITE.phoneRaw}`} className="visit__contact"><span>Call / WhatsApp</span><b>{SITE.phone}</b></a>
              <a href={`mailto:${SITE.email}`} className="visit__contact"><span>Email</span><b>{SITE.email}</b></a>
            </div>

            <div className="specs" style={{ maxWidth: 460 }}>
              <div><span>Best season</span><b>Mar–Jun · Sep–Nov</b></div>
              <div><span>Check-in</span><b>From 12:00 noon</b></div>
              <div><span>Reach us by</span><b>Road · Bir bus stop</b></div>
              <div><span>Instagram</span><b>@bircamps</b></div>
            </div>

            <a href={SITE.maps} target="_blank" rel="noopener" className="btn btn--ghost light" style={{ marginTop: "1.6rem" }}>Open in Google Maps →</a>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="display" style={{ fontSize: "clamp(1.5rem,3.5vw,2rem)", marginBottom: "1.4rem" }}>Send an enquiry</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
