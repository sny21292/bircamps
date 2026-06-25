import type { Metadata } from "next";
import PageHead from "@/components/PageHead";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: "Bir Camps cancellation and refund policy for camping and paragliding bookings in Bir Billing.",
  alternates: { canonical: "/cancellation-policy" },
};

export default function CancellationPolicy() {
  return (
    <>
      <PageHead index="Good to know" crumb="Cancellation policy" path="/cancellation-policy" title={<>Cancellation policy</>} />
      <article className="prose">
        <p className="lead">We know plans change. Here&apos;s how cancellations and refunds work for stays and flights at Bir Camps.</p>

        <h2>Camping &amp; cottage bookings</h2>
        <ul>
          <li><strong>More than 7 days before check-in:</strong> full refund of any advance, minus payment-gateway charges.</li>
          <li><strong>3–7 days before check-in:</strong> 50% of the advance is refundable, or carry it forward as credit for a future stay within 6 months.</li>
          <li><strong>Less than 3 days / no-show:</strong> advance is non-refundable, but we&apos;ll always try to help you reschedule.</li>
        </ul>

        <h2>Paragliding</h2>
        <p>Paragliding is weather-dependent. If a flight is cancelled by us due to unsafe conditions, you may reschedule for any available day or receive a full refund of the flight amount. Cancellations by the guest within 24 hours of the slot are non-refundable.</p>

        <h2>Weather &amp; force majeure</h2>
        <p>In the case of heavy rain, road closures or other events beyond our control, we&apos;ll work with you to reschedule or offer credit. Safety always comes first.</p>

        <h2>How to cancel</h2>
        <p>Message or call us on WhatsApp at <strong>+91 89888 56055</strong> with your booking details. Refunds are processed to the original payment method within 7–10 working days.</p>

        <hr />
        <p style={{ fontSize: "0.9rem", color: "var(--ink-dim)" }}>This policy is a guideline — please confirm the exact terms with us at the time of booking.</p>
      </article>
    </>
  );
}
