import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Reveal from "@/components/Reveal";
import BookCTA from "@/components/BookCTA";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Bir Billing Camping & Paragliding",
  description:
    "Frequently asked questions about camping and paragliding in Bir Billing at Bir Camps. Prices, safety, packing, weather, bookings and more.",
  keywords: ["Bir Billing FAQ", "Bir Billing camping FAQ", "is Bir Billing safe", "what to pack for Bir Billing", "Bir Billing for beginners"],
  alternates: { canonical: "/faq" },
  openGraph: { images: [{ url: "/photos/Bir-Camp.webp" }] },
};

const FAQS = [
  {
    q: "How much does camping in Bir Billing cost?",
    a: "Camps at Bir Camps start at ₹850 per person for a Dome Camp and go up to ₹2,000 per person for a Swiss Luxury Camp with complimentary meals and a private bonfire. Bell, Swiss, Safari and Dormitory options sit in between.",
  },
  {
    q: "How much is paragliding in Bir Billing?",
    a: "Classic tandem paragliding (15–20 minutes) is ₹3,000 and Prime paragliding (40–50 minutes) is ₹4,500. Both fly with certified tandem pilots from the Billing take-off at 8,000 ft.",
  },
  {
    q: "Is paragliding in Bir Billing safe for beginners?",
    a: "Yes. Every first flight is a tandem — you're clipped in with a certified pilot who controls the wing. No experience is needed. Thousands of first-timers fly here every season.",
  },
  {
    q: "What is the best time to visit Bir Billing?",
    a: "The best months for camping and paragliding are March to June and September to November, when the skies are clear and the weather is mild. October is the single best month for flying.",
  },
  {
    q: "How do I reach Bir Billing from Delhi?",
    a: "The easiest way is an overnight Volvo bus from ISBT Kashmere Gate (₹800–₹1,500, arrives 6–9 AM). You can also fly to Dharamshala (Gaggal Airport) and take a 2-hour taxi, or take a train to Pathankot and then a bus.",
  },
  {
    q: "How far is Bir Billing from Dharamshala?",
    a: "About 70 km — roughly 2 to 2.5 hours by taxi or local bus through the Kangra valley.",
  },
  {
    q: "Where exactly is Bir Camps located?",
    a: "Bir Camps is in Gunehr village, about 2 km from Bir bus stop, in Baijnath tehsil, Kangra district, Himachal Pradesh 176077. We're surrounded by mountains with the river a five-minute walk away.",
  },
  {
    q: "Do I need to book in advance?",
    a: "We recommend booking at least a week ahead for weekends and during peak season (March–May, September–November). Weekdays are usually easier. Just WhatsApp us your dates.",
  },
  {
    q: "Is WiFi available at the camp?",
    a: "Yes, free WiFi is available at the camp. Network coverage from most Indian carriers also works in Bir, though signal can be patchy on mountain roads.",
  },
  {
    q: "What should I pack for camping in Bir Billing?",
    a: "Layers and a light jacket (evenings get cool), comfortable walking shoes, sunscreen, sunglasses, a torch for night walks, and a power bank. In winter (Dec–Feb), carry thermals, a warm jacket and wool socks.",
  },
  {
    q: "Is Bir Billing safe for solo travellers and women?",
    a: "Yes. Bir is a peaceful, well-visited village with a welcoming local community. We host solo travellers and women regularly. The camp has 24/7 staff on-site.",
  },
  {
    q: "Can families with children stay at Bir Camps?",
    a: "Absolutely. Families love the Swiss Luxury Camp and the Open Cottage for extra comfort. The riverside, café and bonfire are great for kids. Paragliding is available for children above a certain weight — ask us for details.",
  },
  {
    q: "Are meals included?",
    a: "The Swiss Luxury Camp and Bell Camp include dinner, bonfire and breakfast. For other camps, our Himalayan café serves meals throughout the day at affordable prices.",
  },
  {
    q: "Can I do paragliding and camping together?",
    a: "Yes — that's what most guests do. Book a camp for the night and a paragliding flight for the morning. We'll coordinate the timing and get you to the Billing take-off.",
  },
  {
    q: "What is glamping and do you offer it?",
    a: "Glamping is luxury camping — real beds, clean sheets and proper washrooms, but still outdoors under canvas. Our Swiss Luxury Camp, Bell Camp and Open Cottage all qualify as glamping. Starts from ₹1,600 per person.",
  },
  {
    q: "Is there parking at the camp?",
    a: "Yes, free parking is available at Bir Camps for cars and motorbikes.",
  },
  {
    q: "Can I rent a scooty or bike from the camp?",
    a: "Yes. We arrange scooty and motorbike rentals for guests — perfect for exploring Billing, Rajgundha, Barot and the village cafés. Helmets included.",
  },
  {
    q: "What is there to do in Bir Billing besides paragliding?",
    a: "Bonfire nights, riverside walks, the Rajgundha valley trek, waterfall walks at Gunehar and Bangoru, Tibetan monastery visits, café hopping, stargazing, and nature walks through the pine forests.",
  },
  {
    q: "Does it rain a lot in Bir Billing?",
    a: "The monsoon runs from mid-July to mid-September, when it rains frequently. Outside monsoon, rain is occasional. Spring and autumn are the driest and clearest seasons.",
  },
  {
    q: "How do I book?",
    a: `The fastest way is WhatsApp — message us at ${SITE.phone} with your dates, group size and preferred camp. We usually reply within minutes. You can also call or use the contact form on our website.`,
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd} />
      <PageHead
        index="Got Questions?"
        crumb="FAQ"
        path="/faq"
        title={<>Frequently asked <em>questions.</em></>}
        lead="Everything you need to know about camping, paragliding and visiting Bir Billing — answered in one place."
      />

      <section className="wrap wrap--tight">
        {FAQS.map((f, i) => (
          <Reveal key={i} delay={(i % 4) * 0.05}>
            <details className="faq-item">
              <summary className="faq-q">{f.q}</summary>
              <p className="faq-a">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </section>

      <BookCTA title="Still have questions?" text="WhatsApp us anytime — we're happy to help you plan your trip." />
    </>
  );
}
