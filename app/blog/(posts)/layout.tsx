import Link from "next/link";
import BookCTA from "@/components/BookCTA";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <article className="prose">
        <Link href="/blog" className="backlink">← The Journal</Link>
        {children}
      </article>
      <BookCTA
        title="Plan it with us"
        text="Reading up on Bir Billing? We'll help you turn it into a trip — stays, flights and rides sorted over WhatsApp."
        message="Hi Bir Camps, I'm planning a trip to Bir Billing and have a few questions."
      />
    </>
  );
}
