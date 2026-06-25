import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bir Camps collects, uses and protects your personal information when you book a stay or get in touch.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHead index="Good to know" crumb="Privacy policy" path="/privacy-policy" title={<>Privacy policy</>} />
      <article className="prose">
        <p className="lead">We keep this simple: we only collect what we need to take your booking and look after you, and we never sell your data.</p>

        <h2>What we collect</h2>
        <p>When you enquire or book, we may collect your name, phone number, email and the details of your stay. If you message us on WhatsApp, that conversation is handled under WhatsApp&apos;s own privacy terms.</p>

        <h2>How we use it</h2>
        <ul>
          <li>To confirm and manage your booking.</li>
          <li>To contact you about your stay, flight or rental.</li>
          <li>To answer your questions and improve our service.</li>
        </ul>

        <h2>What we don&apos;t do</h2>
        <p>We don&apos;t sell, rent or trade your personal information. We only share details with the partners directly involved in your booking (for example, a paragliding pilot) and only as needed to deliver the service.</p>

        <h2>Cookies</h2>
        <p>This website uses minimal cookies needed to function and, where enabled, basic analytics to understand how the site is used. You can control cookies through your browser settings.</p>

        <h2>Your choices</h2>
        <p>You can ask us to update or delete the personal information we hold about you at any time.</p>

        <h2>Contact</h2>
        <p>Questions about your data? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <strong>{SITE.phone}</strong>.</p>
      </article>
    </>
  );
}
