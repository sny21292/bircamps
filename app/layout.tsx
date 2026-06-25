import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import "./ui.css";
import "./theme.css";
import "./gallery.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Glider from "@/components/Glider";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-d",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-b",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Bir Camps — Camping & Paragliding in Bir Billing",
    template: "%s · Bir Camps",
  },
  description: SITE.description,
  keywords: [
    "Bir Billing camping", "camping in Bir Billing", "paragliding in Bir Billing", "Bir Billing paragliding",
    "Bir camps", "riverside camping Himachal", "Swiss tent camping Bir", "bell tent Bir Billing",
    "luxury camping Himachal Pradesh", "tandem paragliding India", "best paragliding site India",
    "Billing take off", "Bir Billing tour packages", "adventure camping India", "bonfire camping Bir",
    "budget camping Bir Billing", "dome camp Bir", "dormitory Bir Billing", "Dhauladhar camping",
    "things to do in Bir Billing", "where to stay in Bir Billing", "weekend getaway Himachal",
    "Rajgundha valley trek", "waterfall in Bir Billing", "scooty on rent Bir", "bike rental Bir Billing",
  ],
  authors: [{ name: "Bir Camps" }],
  creator: "Bir Camps",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } as Metadata["robots"],
  openGraph: {
    type: "website",
    siteName: "Bir Camps",
    locale: "en_IN",
    url: SITE.domain,
    title: "Bir Camps — Riverside Camping & Paragliding in Bir Billing",
    description: SITE.description,
    images: [{ url: "/photos/paragliding-bir-billing.webp", width: 1200, height: 630, alt: "Paragliding over Bir Billing, Himachal Pradesh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bir Camps — Camping & Paragliding in Bir Billing",
    description: "Riverside camps, tandem paragliding and bonfire nights beneath the Dhauladhars.",
    images: ["/photos/paragliding-bir-billing.webp"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/logo-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1210",
};

const businessLd = {
  "@context": "https://schema.org",
  "@type": ["LodgingBusiness", "Campground", "TouristAttraction"],
  "@id": `${SITE.domain}/#business`,
  name: "Bir Camps",
  description: SITE.description,
  url: SITE.domain,
  telephone: SITE.phone.replace(/\s/g, ""),
  email: SITE.email,
  image: `${SITE.domain}/photos/paragliding-bir-billing.webp`,
  priceRange: "₹850 – ₹2,000",
  currenciesAccepted: "INR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bunhla Marhola, Gunehr Village, P.O. Bir, Teh. Baijnath",
    addressLocality: "Bir",
    addressRegion: "Himachal Pradesh",
    postalCode: "176077",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.lat, longitude: SITE.geo.lng },
  amenityFeature: [
    "Free WiFi", "Bonfire", "Cafeteria", "Heated water", "Parking", "Mountain & river view",
  ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "320" },
  sameAs: [SITE.instagram],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasMap: SITE.maps,
  areaServed: [
    { "@type": "Place", name: "Bir Billing, Himachal Pradesh" },
    { "@type": "Place", name: "Kangra Valley" },
  ],
  keywords: "camping in Bir Billing, paragliding in Bir Billing, glamping Himachal Pradesh, riverside camping near Dharamshala",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();",
          }}
        />
      </head>
      <body>
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <Nav />
        <Glider />
        <main>{children}</main>
        <Footer />
        <JsonLd data={businessLd} />
      </body>
    </html>
  );
}
