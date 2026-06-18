import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ui.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Glider from "@/components/Glider";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Bir Camps — Camping & Paragliding in Bir Billing, Himachal Pradesh",
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
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%230d1210'/%3E%3Ctext x='16' y='23' font-size='18' text-anchor='middle' fill='%23e6a15a'%3E%E2%96%B2%3C/text%3E%3C/svg%3E",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
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
