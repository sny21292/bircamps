export type Camp = {
  slug: string;
  name: string;
  price: number | null; // null = on request
  priceNote: string;
  tag?: string;
  image: string;
  blurb: string;
  description: string;
  features: string[];
  sleeps?: string;
  feature?: boolean; // full-width feature card (the new cottage)
};

export const CAMPS: Camp[] = [
  {
    slug: "open-cottage",
    name: "The Open Cottage",
    price: null,
    priceNote: "Ask us on WhatsApp",
    tag: "Newly opened",
    image: "", // owner will supply a new photo; placeholder shown until then

    blurb:
      "Our newest way to stay in Bir Billing — a solid wooden cabin that opens straight onto the valley, with a private deck where the mountains are the only thing between you and the sky.",
    description:
      "The Open Cottage is our newest and most distinctive stay at Bir Camps — a solid wooden cabin in Bir Billing built to open straight out onto the valley. Four real walls, a proper bed and a private deck mean you get the comfort of a room with the immediacy of the outdoors. Warm and snug in the evenings, flooded with light at dawn, it's made for travellers who want the Himalayas close but the night cosy.",
    features: ["Wooden cabin & private deck", "Open valley & mountain view", "Real bed · all-weather comfort", "Quiet corner of the camp"],
    feature: true,
  },
  {
    slug: "swiss-luxury-camp",
    name: "Swiss Luxury Camp",
    price: 2000,
    priceNote: "Meals & bonfire included",
    tag: "Signature",
    image: "/photos/Swiss-Luxury-Camp.webp",
    blurb: "Our finest tent — luxury camping in Bir Billing with plush bedding, an ensuite view and complimentary meals with a private bonfire.",
    description:
      "The Swiss Luxury Camp is the most indulgent way to spend a night in Bir Billing. Expect plush bedding, an ensuite setup and an uninterrupted view of the valley from your riverside tent in Himachal Pradesh. Complimentary meals and a private bonfire are part of the deal — all you have to do is settle in and watch the light change over the Dhauladhars.",
    features: ["Plush bedding", "Ensuite valley view", "Complimentary meals", "Private bonfire"],
    sleeps: "2 guests",
  },
  {
    slug: "bell-camp",
    name: "Bell Camp",
    price: 1600,
    priceNote: "Dinner · Bonfire · Breakfast",
    tag: "Popular",
    image: "/photos/Bell-Camp-Bir-Billing.webp",
    blurb: "A romantic canvas bell tent in Bir Billing with dinner, bonfire and breakfast laid on. Wake to the river.",
    description:
      "Our Bell Camp is a romantic canvas bell tent in Bir Billing that comes with dinner, a bonfire and breakfast included. It's the easy choice for couples and first-timers — comfortable, characterful and close to the riverside, so you wake to the sound of mountain water in the Himalayas.",
    features: ["Canvas bell tent", "Dinner included", "Evening bonfire", "Breakfast included"],
    sleeps: "2 guests",
  },
  {
    slug: "swiss-camp",
    name: "Swiss Camp",
    price: 1500,
    priceNote: "Extra bedding available",
    image: "/photos/Swiss-Camp.webp",
    blurb: "Spacious Swiss tent camping in Bir Billing with extra bedding on request — the easy-going classic of the valley.",
    description:
      "The Swiss Camp is our easy-going classic for camping in Bir Billing — spacious, breezy and comfortable, with extra bedding available on request. A dependable, roomy Swiss tent stay with the same Dhauladhar valley view that every camp here enjoys.",
    features: ["Spacious tent", "Extra bedding on request", "Valley view", "Near the café"],
    sleeps: "2–3 guests",
  },
  {
    slug: "safari-camp",
    name: "Safari Camp",
    price: 1200,
    priceNote: "Sleeps 2",
    image: "/photos/Camping-Bir.webp",
    blurb: "A cosy two-person tent in Bir Billing for travellers who like to keep it simple and close to the ground.",
    description:
      "The Safari Camp is a cosy two-person tent in Bir Billing for travellers who like to keep things simple and stay close to the ground. Light on the wallet, big on the view — a clean, comfortable base for a weekend getaway of paragliding and riverside walks in Himachal Pradesh.",
    features: ["Two-person tent", "Simple & comfortable", "Valley view", "Great value"],
    sleeps: "2 guests",
  },
  {
    slug: "dormitory-camp",
    name: "Dormitory",
    price: 1000,
    priceNote: "Shared space",
    image: "/photos/Dormitory-Camp-Bir-Billing.webp",
    blurb: "Shared dormitory sleeping in Bir Billing — made for groups, riders and friends made on the road.",
    description:
      "Our Dormitory in Bir Billing is shared sleeping under canvas, with eight beds available — made for groups, riders and the friends you make on the road. The most sociable way to camp in Bir and a favourite with biker groups passing through the Kangra valley, Himachal Pradesh.",
    features: ["8 beds available", "Made for groups", "Sociable & lively", "Shared washrooms"],
    sleeps: "Up to 8",
  },
  {
    slug: "dome-camp",
    name: "Dome Camp",
    price: 850,
    priceNote: "Shared washrooms",
    tag: "Best value",
    image: "/photos/Dome-Camp-Bir-Billing.webp",
    blurb: "Budget camping in Bir Billing — our most affordable dome camp under the pines, with clean shared washrooms close by.",
    description:
      "The Dome Camp is our most affordable way to camp in Bir Billing — a snug nest under the pines with clean shared washrooms close by. Compact and budget-friendly riverside camping in Himachal Pradesh — proof that you don't need to spend much to wake up in the Dhauladhars.",
    features: ["Most affordable", "Snug dome tent", "Under the pines", "Shared washrooms"],
    sleeps: "2 guests",
  },
];

export const CAMP_TONE: Record<string, string> = {
  "open-cottage": "cottage",
  "swiss-luxury-camp": "luxury",
  "bell-camp": "bell",
  "swiss-camp": "swiss",
  "safari-camp": "safari",
  "dormitory-camp": "dorm",
  "dome-camp": "dome",
};

export function campBySlug(slug: string) {
  return CAMPS.find((c) => c.slug === slug);
}

export const FLIGHTS = [
  {
    slug: "classic-paragliding",
    name: "Classic",
    price: 3000,
    airtime: "15–20 min",
    takeoff: "8,000 ft",
    pilot: "Certified tandem",
    bestFor: "First flight",
    image: "/photos/paragliding-bir-billing.webp",
    blurb: "Your first taste of the sky — a tandem flight from the Billing take-off with a certified pilot.",
  },
  {
    slug: "prime-paragliding",
    name: "Prime",
    price: 4500,
    airtime: "40–50 min",
    takeoff: "8,000 ft",
    pilot: "Senior tandem",
    bestFor: "Acro & views",
    image: "/photos/paragliding-bir-billing.webp",
    blurb: "The long ride — more airtime, more thermals and the option of some gentle acro with a senior pilot.",
    feature: true,
  },
];

export const RENTALS = [
  {
    slug: "scooty",
    name: "Scooty on Rent",
    image: "/photos/Scooty-for-rent.jpg",
    blurb: "Zip around Bir, Billing and the village on an easy automatic scooter. Perfect for cafés and viewpoints.",
    note: "Per day · helmet included",
  },
  {
    slug: "motorbike",
    name: "Motorbike on Rent",
    image: "/photos/Motorbike-For-Rent-Bir-Billing.jpg",
    blurb: "Take on the mountain roads to Rajgundha, Barot and beyond on a well-kept motorbike.",
    note: "Per day · helmet included",
  },
];

export const STATS = [
  { num: 2400, unit: "m", label: "Take-off altitude at Billing" },
  { num: 7, unit: "", label: "Distinct ways to stay" },
  { num: 5, unit: "min", label: "Walk to the riverbank" },
  { num: 1, unit: "st", label: "Paragliding site in India" },
];

export const EXPERIENCES = [
  { key: "bonfire", title: "Bonfire nights", text: "Crackling fire, mountain air and strangers who leave as friends.", tone: "bonfire", span: "tall" },
  { key: "river", title: "The river walk", text: "Five minutes to cold, clear glacier water.", tone: "river" },
  { key: "cafe", title: "Himalayan café", text: "Hot chai, comfort food, valley views.", tone: "cafe" },
  { key: "forest", title: "Pine-forest mornings", text: "Wake to birdsong, balconies and a horizon of green ridgelines. Wi-Fi, heated water and parking, all sorted.", tone: "forest", span: "wide" },
];

export const GALLERY = [
  { tone: "g1", caption: "Take-off at Billing" },
  { tone: "g2", caption: "Camp at dusk" },
  { tone: "g3", caption: "Waterfalls near camp" },
  { tone: "g4", caption: "Camp moments" },
  { tone: "g5", caption: "Rajgundha valley" },
  { tone: "g6", caption: "Over the Dhauladhars" },
];
