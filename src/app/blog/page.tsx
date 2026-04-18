import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog/posts";

export const metadata: Metadata = {
  title: "Blog | ConnectLife Tecnologia",
  description:
    "Conteúdo prático sobre Sites, SaaS, Micro-SaaS, Automações e Desenvolvimento de Software — direto da trincheira de uma software house em Manaus.",
  alternates: {
    canonical: "https://connectlife.com.br/blog",
  },
  openGraph: {
    title: "Blog | ConnectLife Tecnologia",
    description:
      "Conteúdo prático sobre Sites, SaaS, Micro-SaaS, Automações e Desenvolvimento de Software.",
    url: "https://connectlife.com.br/blog",
    siteName: "ConnectLife",
    locale: "pt_BR",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog ConnectLife",
    url: "https://connectlife.com.br/blog",
    publisher: {
      "@type": "Organization",
      name: "ConnectLife Tecnologia",
      url: "https://connectlife.com.br",
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `https://connectlife.com.br/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <Navbar />

      <main className="pt-24">
        <section className="bg-surface-light py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              Blog
            </p>
            <h1 className="mt-4 font-playfair text-5xl leading-[1.05] text-text-primary md:text-6xl">
              Tecnologia explicada
              <br />
              sem enrolação.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-text-secondary md:text-lg">
              Conteúdo prático sobre Sites, SaaS, Micro-SaaS, Automações e
              Desenvolvimento de Software — direto da nossa rotina entregando
              projetos reais.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6">
            {posts.length === 0 ? (
              <p className="text-text-secondary">
                Nenhum post publicado ainda. Volte em breve.
              </p>
            ) : (
              <div className="space-y-12">
                {posts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
