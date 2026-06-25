export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  readTime: string;
  image: string;
  tag: string;
};

// Index for the Journal. Full articles live as MDX at app/blog/<slug>/page.mdx —
// add a new folder with a page.mdx (and an entry here) to publish a new post.
export const POSTS: PostMeta[] = [
  {
    slug: "bir-billing-paragliding",
    title: "Paragliding in Bir Billing: a First-Timer's Guide",
    excerpt:
      "Bir Billing holds the highest paragliding take-off in India. Here's how a tandem flight works, what it costs, the best season, and how to prepare.",
    date: "2024-09-06",
    readTime: "6 min read",
    image: "/photos/Bir-Billing-Paragliding.webp",
    tag: "Paragliding",
  },
  {
    slug: "bir-billing-camping",
    title: "Camping in Bir Billing: a Complete Guide",
    excerpt:
      "From tent types to bonfire nights and what to pack — a practical guide to camping in Bir Billing and making the most of the valley.",
    date: "2024-09-06",
    readTime: "7 min read",
    image: "/photos/Bir-Billing-Camping.webp",
    tag: "Camping",
  },
  {
    slug: "bir-billing-camping-packages",
    title: "Bir Billing Camping Packages: Plan a Weekend",
    excerpt:
      "Two days, one night, and a sky full of paragliders. Here's how we'd plan a weekend camping package in Bir Billing.",
    date: "2024-09-06",
    readTime: "5 min read",
    image: "/photos/Bir-Billing-Camping-Packages.webp",
    tag: "Packages",
  },
  {
    slug: "discover-the-ultimate-camping-experience-in-bir-billing",
    title: "The Ultimate Camping Experience in Bir Billing",
    excerpt:
      "Why Bir Billing has become one of India's most loved camping destinations — and what makes a night at the riverside camp special.",
    date: "2024-09-06",
    readTime: "5 min read",
    image: "/photos/Discover-the-Ultimate-Camping-Experience-in-Bir-Billing.webp",
    tag: "Camping",
  },
  {
    slug: "rajgundha-valley-in-bir-billing",
    title: "Rajgundha Valley Trek from Bir Billing",
    excerpt:
      "A hidden hamlet ringed by mountains, reached on foot or by bike. Here's how to plan the Rajgundha valley trek from Bir.",
    date: "2024-09-06",
    readTime: "6 min read",
    image: "/photos/Rajgundha-Valley-in-Bir-Billing.jpg",
    tag: "Trekking",
  },
  {
    slug: "waterfall-in-bir-billing",
    title: "Waterfalls in Bir Billing: Gunehar & Bangoru",
    excerpt:
      "A short walk from camp leads to cold, clear waterfalls. Here's how to find the Gunehar and Bangoru falls and when to go.",
    date: "2024-09-22",
    readTime: "5 min read",
    image: "/photos/Bir-Billing-waterfall.jpg",
    tag: "Nature",
  },
  {
    slug: "how-to-reach-bir-billing",
    title: "How to Reach Bir Billing from Delhi & Chandigarh",
    excerpt:
      "Complete guide on how to reach Bir Billing by bus, taxi and flight from Delhi, Chandigarh and Manali. Routes, timings and tips.",
    date: "2026-06-24",
    readTime: "6 min read",
    image: "/photos/camping-in-bir-billing.webp",
    tag: "Travel",
  },
  {
    slug: "best-time-to-visit-bir-billing",
    title: "Best Time to Visit Bir Billing — Season Guide",
    excerpt:
      "Month-by-month guide to the best time to visit Bir Billing for camping, paragliding and trekking. Weather and what to expect.",
    date: "2026-06-24",
    readTime: "5 min read",
    image: "/photos/Tent-Camping-in-Bir-Billing.webp",
    tag: "Guide",
  },
  {
    slug: "glamping-in-bir-billing",
    title: "Glamping in Bir Billing — Luxury Camping",
    excerpt:
      "Experience glamping in Bir Billing — Swiss luxury tents, bell tents and a wooden cottage with valley views, bonfires and riverside walks.",
    date: "2026-06-24",
    readTime: "5 min read",
    image: "/photos/Swiss-Luxury-Camp.webp",
    tag: "Glamping",
  },
];

export function postBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
