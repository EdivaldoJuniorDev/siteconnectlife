import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";

const especialidades = [
  "clinica",
  "dentista",
  "consultorio-medico",
  "dermatologista",
  "nutricionista",
  "psicologo",
  "fisioterapeuta",
  "veterinario",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://connectlife.com.br";

  const especialidadeUrls = especialidades.map((esp) => ({
    url: `${baseUrl}/site-para-${esp}-manaus`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/site`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contato`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getAllPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...especialidadeUrls,
    {
      url: `${baseUrl}/legal/politica-de-privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal/termos`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
