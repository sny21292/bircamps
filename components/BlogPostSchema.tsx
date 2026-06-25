import JsonLd from "./JsonLd";
import { SITE } from "@/lib/site";
import { postBySlug } from "@/lib/posts";

export default function BlogPostSchema({ slug }: { slug: string }) {
  const post = postBySlug(slug);
  if (!post) return null;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: "Bir Camps", url: SITE.domain },
        publisher: {
          "@type": "Organization",
          name: "Bir Camps",
          logo: { "@type": "ImageObject", url: `${SITE.domain}/logo-mark.svg` },
        },
        image: `${SITE.domain}${post.image}`,
        mainEntityOfPage: `${SITE.domain}/blog/${post.slug}`,
      }}
    />
  );
}
