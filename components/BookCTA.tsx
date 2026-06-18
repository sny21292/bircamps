import { whatsapp } from "@/lib/site";

export default function BookCTA({
  title = "Ready when you are.",
  text = "Tell us your dates and how many of you are coming — we'll sort the rest over WhatsApp.",
  message = "Hi Bir Camps, I'd like to check availability.",
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="wrap" style={{ paddingTop: 0 }}>
      <div className="cta-box" style={{ maxWidth: "var(--maxw)" }}>
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={whatsapp(message)} target="_blank" rel="noopener" className="btn btn--solid">
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}
