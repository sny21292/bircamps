import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link href="/" className="footer__brand">
          <span className="nav__mark">▲</span> Bir Camps
        </Link>
        <p className="footer__tag">Riverside camping &amp; paragliding in the Himalayas.</p>
      </div>
      <div className="footer__cols">
        <div>
          <h4>Explore</h4>
          <Link href="/stay">Stay</Link>
          <Link href="/fly">Paragliding</Link>
          <Link href="/rentals">Rentals</Link>
          <Link href="/experiences">Experiences</Link>
          <Link href="/blog">Journal</Link>
        </div>
        <div>
          <h4>Reach us</h4>
          <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.instagram} target="_blank" rel="noopener">@bircamps</a>
          <Link href="/contact">Contact &amp; directions</Link>
        </div>
        <div>
          <h4>Good to know</h4>
          <Link href="/cancellation-policy">Cancellation policy</Link>
          <Link href="/dos-and-donts">Do&apos;s &amp; Don&apos;ts</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
          <p style={{ marginTop: "0.6rem" }}>Gunehr Village, Bir<br />Himachal Pradesh 176077</p>
        </div>
      </div>
      <div className="footer__base">
        <span>© {new Date().getFullYear()} Bir Camps. All rights reserved.</span>
        <span>Made with the mountains in mind.</span>
      </div>
    </footer>
  );
}
