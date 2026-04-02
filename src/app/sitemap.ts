import { MetadataRoute } from "next";

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
    ...especialidadeUrls,
  ];
}
