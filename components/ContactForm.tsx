"use client";

import { useState } from "react";
import { whatsapp } from "@/lib/site";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [dates, setDates] = useState("");
  const [guests, setGuests] = useState("2");
  const [stay, setStay] = useState("Any camp");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `Hi Bir Camps! I'd like to enquire about a stay.\n` +
      `Name: ${name || "—"}\n` +
      `Dates: ${dates || "—"}\n` +
      `Guests: ${guests}\n` +
      `Preferred stay: ${stay}\n` +
      (message ? `Message: ${message}` : "");
    window.open(whatsapp(text), "_blank", "noopener");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Aanya" />
      </div>
      <div className="field">
        <label htmlFor="cf-dates">Dates</label>
        <input id="cf-dates" value={dates} onChange={(e) => setDates(e.target.value)} placeholder="e.g. 12–13 Oct" />
      </div>
      <div className="field">
        <label htmlFor="cf-guests">Guests</label>
        <input id="cf-guests" type="number" min={1} value={guests} onChange={(e) => setGuests(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="cf-stay">Preferred stay</label>
        <select id="cf-stay" value={stay} onChange={(e) => setStay(e.target.value)}>
          <option>Any camp</option>
          <option>The Open Cottage</option>
          <option>Swiss Luxury Camp</option>
          <option>Bell Camp</option>
          <option>Swiss Camp</option>
          <option>Safari Camp</option>
          <option>Dormitory</option>
          <option>Dome Camp</option>
          <option>Paragliding only</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">Anything else?</label>
        <textarea id="cf-msg" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Paragliding, transport, dietary needs…" />
      </div>
      <button type="submit" className="btn btn--solid" style={{ width: "100%", justifyContent: "center" }}>
        Send on WhatsApp
      </button>
      <p style={{ fontSize: "0.78rem", color: "var(--ink-dim)", marginTop: "0.8rem", textAlign: "center" }}>
        Opens WhatsApp with your details pre-filled — nothing is sent until you press send.
      </p>
    </form>
  );
}
