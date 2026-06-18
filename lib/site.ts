export const SITE = {
  name: "Bir Camps",
  domain: "https://bircamps.com",
  tagline: "Riverside camping & paragliding in Bir Billing, Himalayas",
  description:
    "Book riverside camping and tandem paragliding in Bir Billing, Himachal Pradesh. Swiss tents, bell tents, dome camps & dormitory from ₹850. Bonfire nights, Himalayan café & the highest paragliding take-off in India.",
  phone: "+91 89888 56055",
  phoneRaw: "918988856055",
  email: "bircamps@gmail.com",
  instagram: "https://www.instagram.com/bircamps/",
  address: {
    line1: "Bunhla Marhola, Gunehr Village",
    line2: "P.O. Bir, Teh. Baijnath, Distt. Kangra",
    city: "Bir",
    region: "Himachal Pradesh",
    postal: "176077",
    country: "India",
  },
  geo: { lat: 32.0419, lng: 76.7197 },
  maps: "https://maps.google.com/?q=Bir+Camps+Gunehr+Bir+Himachal+Pradesh",
};

export function whatsapp(message?: string) {
  const base = `https://wa.me/${SITE.phoneRaw}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV = [
  { label: "Stay", href: "/stay" },
  { label: "Fly", href: "/fly" },
  { label: "Rentals", href: "/rentals" },
  { label: "Experiences", href: "/experiences" },
  { label: "Journal", href: "/blog" },
  { label: "Visit", href: "/contact" },
];
