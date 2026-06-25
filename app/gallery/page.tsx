import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import PageHead from "@/components/PageHead";
import Gallery, { type MediaItem } from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery — Photos & Videos of Bir Camps",
  description:
    "Photos and videos of Bir Camps in Bir Billing — tents, the open cottage, riverside, bonfires, paragliding and valley views. See the camp before you book.",
  keywords: ["Bir Camps photos", "Bir Billing camping photos", "Bir Billing gallery", "camp photos Himachal Pradesh", "paragliding photos Bir Billing"],
  alternates: { canonical: "/gallery" },
  openGraph: { images: [{ url: "/photos/Bir-Camp.webp" }] },
};

export default function GalleryPage() {
  const dir = path.join(process.cwd(), "public", "gallery");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    files = [];
  }

  // ignore dotfiles (e.g. macOS ._AppleDouble / .DS_Store) so the count stays correct
  const real = files.filter((f) => !f.startsWith("."));
  const images = real.filter((f) => /\.(jpe?g|png|webp)$/i.test(f)).sort();
  const videos = real.filter((f) => /\.(mp4|webm)$/i.test(f)).sort();

  const media: MediaItem[] = images.map((f) => ({
    type: "image",
    src: `/gallery/${f}`,
    thumb: `/gallery/thumbs/${f.replace(/\.(jpe?g|png|webp)$/i, ".jpg")}`,
    alt: f.replace(/[-_]/g, " ").replace(/\.\w+$/, "").replace(/\b\w/g, (c) => c.toUpperCase()) + " — Bir Camps, Bir Billing",
  }));
  const vids: MediaItem[] = videos.map((f) => ({ type: "video", src: `/gallery/${f}` }));
  // sprinkle the videos through the grid for rhythm
  if (vids[0]) media.splice(2, 0, vids[0]);
  if (vids[1]) media.splice(Math.min(media.length, Math.floor(media.length / 2)), 0, vids[1]);
  for (let k = 2; k < vids.length; k++) media.push(vids[k]);

  return (
    <>
      <PageHead
        index="The Gallery"
        crumb="Gallery"
        path="/gallery"
        title={<>Every corner of <em>the camp.</em></>}
        lead={`${images.length} photos and ${videos.length} videos from the camp — the tents and cottage, the riverside, bonfire nights, paragliding and the valley waking up. Tap any frame to view it full-screen.`}
      />
      <section className="wrap">
        <Gallery items={media} />
      </section>
    </>
  );
}
