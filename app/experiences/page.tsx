import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import { EXPERIENCES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiences & Activities in Bir Billing",
  description:
    "Bonfire nights, riverside walks, the Himalayan café, paragliding, the Rajgundha valley trek, waterfalls and Tibetan monasteries — all the things to do around Bir Camps in Bir Billing.",
  alternates: { canonical: "/experiences" },
};

const ACTIVITIES = [
  { icon: "❋", title: "Paragliding", text: "Tandem flights from the highest take-off in India, minutes from camp." },
  { icon: "⛰", title: "Rajgundha valley trek", text: "A half-day walk or ride to one of the valley's most beautiful hamlets." },
  { icon: "≈", title: "Waterfall walks", text: "Cold, clear falls at Gunehar and Bangoru — an easy walk from the river." },
  { icon: "☼", title: "Bonfire & music", text: "Evenings around the fire with chai, food and the occasional guitar." },
  { icon: "卍", title: "Tibetan monasteries", text: "Visit the colourful monasteries and the Tibetan colony in Bir." },
  { icon: "✦", title: "Stargazing", text: "Clear mountain skies far from city light — bring a flask and look up." },
  { icon: "❀", title: "Village & café trails", text: "Wander Bir's famous cafés, art spaces and quiet village lanes." },
  { icon: "✺", title: "Nature walks", text: "Birdsong, pine forest and the river — slow mornings, the mountain way." },
];

export default function ExperiencesPage() {
  return (
    <>
      <PageHead
        index="The Days"
        crumb="Experiences"
        title={<>More than a place <em>to sleep.</em></>}
        lead="A night with us is only the start. From bonfires and river walks to paragliding, treks and monastery visits, here's what fills the days around Bir Camps."
      />

      {/* on-camp experiences (bento) */}
      <section className="exp" style={{ paddingTop: "clamp(3rem,7vh,5rem)" }}>
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

      {/* activities grid */}
      <section className="wrap" style={{ paddingTop: 0 }}>
        <Reveal as="span" className="section-index">Out & about</Reveal>
        <Reveal delay={0.1}><h2 className="display" style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", margin: "0.6rem 0 2rem" }}>Things to do in Bir Billing</h2></Reveal>
        <div className="acts">
          {ACTIVITIES.map((a, i) => (
            <Reveal as="div" className="act" key={a.title} delay={(i % 3) * 0.08}>
              <span className="act__icon" aria-hidden="true">{a.icon}</span>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <BookCTA title="Make a weekend of it" text="We'll help you line up flights, treks and rides around your stay." message="Hi Bir Camps, I'd like help planning activities for my stay." />
    </>
  );
}
