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
    title: "Paragliding in Bir Billing: everything a first-timer needs to know",
    excerpt:
      "Bir Billing holds the highest paragliding take-off in India. Here's how a tandem flight works, what it costs, the best season, and how to prepare.",
    date: "2024-09-06",
    readTime: "6 min read",
    image: "/photos/Bir-Billing-Paragliding.png",
    tag: "Paragliding",
  },
  {
    slug: "bir-billing-camping",
    title: "Camping in Bir Billing: a complete guide to a night under the Dhauladhars",
    excerpt:
      "From tent types to bonfire nights and what to pack — a practical guide to camping in Bir Billing and making the most of the valley.",
    date: "2024-09-06",
    readTime: "7 min read",
    image: "/photos/Bir-Billing-Camping.png",
    tag: "Camping",
  },
  {
    slug: "bir-billing-camping-packages",
    title: "Bir Billing camping packages: how to plan the perfect weekend",
    excerpt:
      "Two days, one night, and a sky full of paragliders. Here's how we'd plan a weekend camping package in Bir Billing.",
    date: "2024-09-06",
    readTime: "5 min read",
    image: "/photos/Bir-Billing-Camping-Packages.png",
    tag: "Packages",
  },
  {
    slug: "discover-the-ultimate-camping-experience-in-bir-billing",
    title: "Discover the ultimate camping experience in Bir Billing",
    excerpt:
      "Why Bir Billing has become one of India's most loved camping destinations — and what makes a night at the riverside camp special.",
    date: "2024-09-06",
    readTime: "5 min read",
    image: "/photos/Discover-the-Ultimate-Camping-Experience-in-Bir-Billing.png",
    tag: "Camping",
  },
  {
    slug: "rajgundha-valley-in-bir-billing",
    title: "Rajgundha Valley: the quiet trek every Bir visitor should do",
    excerpt:
      "A hidden hamlet ringed by mountains, reached on foot or by bike. Here's how to plan the Rajgundha valley trek from Bir.",
    date: "2024-09-06",
    readTime: "6 min read",
    image: "/photos/Rajgundha-Valley-in-Bir-Billing.jpg",
    tag: "Trekking",
  },
  {
    slug: "waterfall-in-bir-billing",
    title: "Waterfalls in Bir Billing: the Gunehar & Bangoru trail",
    excerpt:
      "A short walk from camp leads to cold, clear waterfalls. Here's how to find the Gunehar and Bangoru falls and when to go.",
    date: "2024-09-22",
    readTime: "5 min read",
    image: "/photos/Bir-Billing-waterfall.jpg",
    tag: "Nature",
  },
];

export function postBySlug(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
