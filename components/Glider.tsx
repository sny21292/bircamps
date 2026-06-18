"use client";

import { useEffect, useRef } from "react";

/**
 * Site-wide paraglider.
 *  - Desktop (fine pointer): follows the mouse and sticks where the pointer goes.
 *  - Mobile / touch: always visible, gently drifts, and descends as you scroll.
 * Fixed-position + pointer-events:none so it never blocks interaction.
 */
export default function Glider() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const fine = window.matchMedia("(pointer: fine)").matches;

    let gx = window.innerWidth * (fine ? 0.4 : 0.5);
    let gy = window.innerHeight * 0.28;
    let tx = gx;
    let ty = gy;
    let lastX = gx;
    let active = false;
    const idleStart = performance.now();
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      active = true;
    };
    if (fine) window.addEventListener("pointermove", onMove, { passive: true });

    const frame = (now: number) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      if (fine) {
        // before the first move, drift lazily; after, stick to the pointer
        if (!active) {
          const t = (now - idleStart) / 1000;
          tx = vw * (0.5 + 0.32 * Math.sin(t * 0.45));
          ty = vh * (0.3 + 0.13 * Math.sin(t * 0.9));
        }
      } else {
        // mobile: always on screen, sway sideways, descend with scroll
        const t = now / 1000;
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - vh);
        const frac = Math.min(1, (window.scrollY || 0) / maxScroll);
        tx = vw * (0.5 + 0.26 * Math.sin(t * 0.4));
        ty = vh * (0.14 + 0.66 * frac); // top-ish at the start, lower as you scroll — always visible
      }

      const ease = fine ? 0.07 : 0.045;
      gx += (tx - gx) * ease;
      gy += (ty - gy) * ease;

      const vel = gx - lastX;
      lastX = gx;
      const tilt = Math.max(-20, Math.min(20, vel * 0.9));
      const bob = Math.sin(now / 900) * 4;
      const w = el.offsetWidth;
      const h = el.offsetHeight;

      el.style.transform = `translate(${gx - w / 2}px, ${gy - h / 2 + bob}px) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      if (fine) window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className="glider-global" aria-hidden="true">
      <svg viewBox="0 0 120 80">
        <path className="canopy" d="M4 26 Q60 -6 116 26 Q60 18 4 26Z" />
        <line className="line" x1="14" y1="27" x2="55" y2="56" />
        <line className="line" x1="106" y1="27" x2="65" y2="56" />
        <circle className="pilot" cx="60" cy="60" r="4" />
      </svg>
    </div>
  );
}
