import Link from "next/link";
import BookCTA from "@/components/BookCTA";
import TableOfContents from "@/components/TableOfContents";
import BlogSidebar from "@/components/BlogSidebar";

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="blog-layout">
        <TableOfContents />
        <article className="prose">
          <Link href="/blog" className="backlink">← The Journal</Link>
          {children}
        </article>
        <BlogSidebar />
      </div>
      <BookCTA
        title="Plan it with us"
        text="Reading up on Bir Billing? We'll help you turn it into a trip — stays, flights and rides sorted over WhatsApp."
        message="Hi Bir Camps, I'm planning a trip to Bir Billing and have a few questions."
      />
    </>
  );
}
