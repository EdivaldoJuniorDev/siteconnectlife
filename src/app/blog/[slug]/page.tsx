import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mdxComponents } from "@/components/blog/MdxComponents";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
} from "@/lib/blog/posts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://connectlife.com.br/blog/${post.slug}`;

  return {
    title: `${post.title} | ConnectLife`,
    description: post.description,
    authors: post.author ? [{ name: post.author }] : undefined,
    keywords: post.tags,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "ConnectLife",
      locale: "pt_BR",
      type: "article",
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const url = `https://connectlife.com.br/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author
      ? { "@type": "Person", name: post.author }
      : { "@type": "Organization", name: "ConnectLife Tecnologia" },
    publisher: {
      "@type": "Organization",
      name: "ConnectLife Tecnologia",
      url: "https://connectlife.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://connectlife.com.br/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.tags?.join(", "),
  };

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />

      <main className="pt-24">
        <article className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Link
              href="/blog"
              className="text-xs font-medium uppercase tracking-[0.18em] text-text-secondary transition-colors hover:text-accent"
            >
              ← Voltar ao blog
            </Link>

            <header className="mt-10">
              {post.tags && post.tags.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h1 className="font-playfair text-4xl leading-[1.1] text-text-primary md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg text-text-secondary">
                {post.description}
              </p>
              <div className="mt-6 flex items-center gap-3 text-xs text-text-secondary/80">
                {post.author && (
                  <>
                    <span>{post.author}</span>
                    <span aria-hidden>·</span>
                  </>
                )}
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingMinutes} min de leitura</span>
              </div>
            </header>

            <div className="mt-12">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-black/10 bg-surface-warm py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-6">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-secondary">
                Continue lendo
              </p>
              <h2 className="mt-3 font-playfair text-3xl text-text-primary">
                Outros posts
              </h2>
              <div className="mt-10 space-y-10">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group block"
                  >
                    <h3 className="font-playfair text-xl text-text-primary transition-colors group-hover:text-accent md:text-2xl">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {r.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
