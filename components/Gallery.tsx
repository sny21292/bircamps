"use client";

import { useState, useEffect, useCallback } from "react";

export type MediaItem = { type: "image" | "video"; src: string; thumb?: string };

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, go]);

  return (
    <>
      <div className="masonry">
        {items.map((it, i) => (
          <button
            className={`masonry__item${it.type === "video" ? " is-video" : ""}`}
            key={it.src}
            onClick={() => setOpen(i)}
            aria-label={it.type === "video" ? "Play video" : "View photo"}
          >
            {it.type === "image" ? (
              // static thumbnails — no runtime optimizer, reliable on a small server
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.thumb || it.src} alt={`Bir Camps — photo ${i + 1}`} loading="lazy" decoding="async" />
            ) : (
              <>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video src={it.src} muted preload="metadata" playsInline />
                <span className="masonry__play" aria-hidden="true">▶</span>
              </>
            )}
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={close} aria-label="Close">✕</button>
          <button
            className="lightbox__nav lightbox__prev"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
            aria-label="Previous"
          >‹</button>
          <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            {items[open].type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={items[open].src} alt="Bir Camps" />
            ) : (
              // eslint-disable-next-line jsx-a11y/media-has-caption
              <video src={items[open].src} controls autoPlay playsInline />
            )}
          </div>
          <button
            className="lightbox__nav lightbox__next"
            onClick={(e) => { e.stopPropagation(); go(1); }}
            aria-label="Next"
          >›</button>
          <div className="lightbox__count">{open + 1} / {items.length}</div>
        </div>
      )}
    </>
  );
}
