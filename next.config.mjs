import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow .mdx files to become pages (drop a file in app/blog/<slug>/page.mdx = new post)
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
