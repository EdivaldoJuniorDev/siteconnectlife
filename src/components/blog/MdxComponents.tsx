import Link from "next/link";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

function isInternal(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: (props) => (
    <h1
      {...props}
      className="mt-16 font-playfair text-4xl leading-tight text-text-primary md:text-5xl"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="mt-14 font-playfair text-3xl leading-tight text-text-primary md:text-4xl"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="mt-10 font-playfair text-2xl leading-tight text-text-primary md:text-3xl"
    />
  ),
  p: (props) => (
    <p {...props} className="mt-6 text-base leading-relaxed text-text-primary/90 md:text-lg" />
  ),
  ul: (props) => (
    <ul {...props} className="mt-6 list-disc space-y-2 pl-6 text-text-primary/90" />
  ),
  ol: (props) => (
    <ol {...props} className="mt-6 list-decimal space-y-2 pl-6 text-text-primary/90" />
  ),
  li: (props) => <li {...props} className="text-base md:text-lg leading-relaxed" />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-8 border-l-2 border-accent bg-surface-warm/60 px-6 py-4 text-base italic text-text-primary"
    />
  ),
  strong: (props) => (
    <strong {...props} className="font-semibold text-text-primary" />
  ),
  hr: (props) => (
    <hr {...props} className="my-12 border-black/10" />
  ),
  a: ({ href = "#", children, ...rest }) => {
    if (isInternal(href)) {
      return (
        <Link
          href={href}
          className="text-accent underline underline-offset-4 transition-colors hover:text-accent-dark"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline underline-offset-4 transition-colors hover:text-accent-dark"
      >
        {children}
      </a>
    );
  },
  code: (props) => (
    <code
      {...props}
      className="rounded bg-surface-warm px-1.5 py-0.5 font-mono text-[0.9em] text-text-primary"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto bg-dark-bg p-4 font-mono text-sm text-white"
    />
  ),
};
