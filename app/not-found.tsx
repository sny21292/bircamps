import Link from "next/link";
import Ridges from "@/components/Ridges";

export default function NotFound() {
  return (
    <section className="pagehead" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
      <Ridges />
      <div className="pagehead__inner" style={{ textAlign: "center", margin: "0 auto" }}>
        <span className="section-index light">Off the trail</span>
        <h1 style={{ margin: "1rem 0" }}>This path leads nowhere.</h1>
        <p className="pagehead__lead" style={{ margin: "0 auto 2rem" }}>
          The page you&apos;re after has drifted off into the clouds. Let&apos;s get you back to the valley.
        </p>
        <div style={{ display: "flex", gap: "0.9rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn--solid">Back to home</Link>
          <Link href="/stay" className="btn btn--ghost light">See the camps →</Link>
        </div>
      </div>
    </section>
  );
}
