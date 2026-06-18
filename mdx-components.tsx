import type { MDXComponents } from "mdx/types";

// Required by @next/mdx for the App Router. Maps MDX elements to our styling.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
