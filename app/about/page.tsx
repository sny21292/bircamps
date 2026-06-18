import type { Metadata } from "next";
import Image from "next/image";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";

export const metadata: Metadata = {
  title: "About Bir Camps — Our Story",
  description:
    "Bir Camps is a family-run riverside camp in Gunehr village, Bir Billing. We've spent years sharing the quiet, generous side of the Himalayas with travellers from around the world.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHead
        index="The People"
        crumb="About"
        title={<>A camp built on <em>hospitality.</em></>}
        lead="We're a family-run camp in a quiet fold of the Bir valley. What started as a few tents by the river has grown into a place travellers from all over the world come back to — for the view, the fire, and the welcome."
      />

      <section className="wrap">
        <div className="detail" style={{ marginBottom: "3rem" }}>
          <Reveal className="detail__media">
            <Image src="/photos/DSC06362-1-scaled-1.jpg" alt="Bir Camps in the Bir Billing valley" fill sizes="(max-width: 900px) 100vw, 55vw" style={{ objectFit: "cover" }} priority />
          </Reveal>
          <Reveal delay={0.1} className="detail__body">
            <h2>The slow side of the Himalayas</h2>
            <p>Our camp sits in Gunehr village, two kilometres from Bir, surrounded by lush green mountains with a cold mountain river a five-minute walk away. We chose this spot for one reason: the view, and the quiet that comes with it.</p>
            <p>Over the years we&apos;ve added tents, a café and a new wooden cottage — but the heart of the place hasn&apos;t changed. It&apos;s still about clean, comfortable stays, honest food, a fire every night, and staff who treat guests like family.</p>
            <p>Whether you&apos;re here to fly, to trek, or simply to switch off, we&apos;ll make sure you leave with a story worth telling.</p>
          </Reveal>
        </div>

        <div className="acts">
          <Reveal as="div" className="act"><span className="act__icon">★</span><h3>Loved by guests</h3><p>Praised again and again for cleanliness, hospitality and that superb valley view.</p></Reveal>
          <Reveal as="div" className="act" delay={0.08}><span className="act__icon">▲</span><h3>Right by the action</h3><p>Minutes from the Billing take-off and the river, yet far from the noise.</p></Reveal>
          <Reveal as="div" className="act" delay={0.16}><span className="act__icon">☼</span><h3>Family-run</h3><p>A small team that actually cares whether you had a good time.</p></Reveal>
        </div>
      </section>

      <BookCTA title="Come stay with us" text="We'd love to host you. Message us anytime — we usually reply fast." />
    </>
  );
}
