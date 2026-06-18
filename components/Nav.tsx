"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV, SITE, whatsapp } from "@/lib/site";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav__brand" aria-label="Bir Camps home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.svg" className="nav__logo" alt="" width={38} height={38} />
          <span className="nav__name">Bir&nbsp;Camps</span>
        </Link>
        <nav className="nav__links" aria-label="Primary">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="nav__actions">
          <ThemeToggle />
          <a href={whatsapp(`Hi Bir Camps, I'd like to book a stay.`)} target="_blank" rel="noopener" className="btn btn--nav">
            Book a stay
          </a>
          <button
            className={`nav__burger${open ? " open" : ""}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <ThemeToggle compact />
        <a href={whatsapp(`Hi Bir Camps, I'd like to book a stay.`)} target="_blank" rel="noopener" className="btn btn--solid" onClick={() => setOpen(false)}>
          Book on WhatsApp
        </a>
        <a href={`tel:${SITE.phoneRaw}`} className="mm-phone">{SITE.phone}</a>
      </div>
    </>
  );
}
