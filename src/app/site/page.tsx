import type { Metadata } from "next";
import HeroSection from "@/components/site/HeroSection";
import DiferencialSection from "@/components/site/DiferencialSection";
import DemosSection from "@/components/site/DemosSection";
import DorSection from "@/components/site/DorSection";
import PacotesSection from "@/components/site/PacotesSection";
import ComoFuncionaSection from "@/components/site/ComoFuncionaSection";
import CalculadoraSection from "@/components/site/CalculadoraSection";
import CtaFinalSection from "@/components/site/CtaFinalSection";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Site para Clínicas em Manaus com Vídeo | ConnectLife",
  description:
    "Criamos sites para clínicas e consultórios em Manaus com vídeo cinematográfico da própria médica — sem produção, sem fotógrafo. A partir de R$ 2.500. Entrega em 7 dias.",
  keywords: [
    "site para clínica Manaus",
    "site para dentista Manaus",
    "site para clínica de estética Manaus",
    "landing page para médico Manaus",
    "site com vídeo para clínica",
  ],
  openGraph: {
    title: "Site para Clínicas em Manaus | ConnectLife",
    description:
      "Seu vídeo. Sua cara. No seu site. Sem estúdio, sem fotógrafo. A partir de R$ 2.500.",
    url: "https://connectlife.com.br/site",
    siteName: "ConnectLife",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "ConnectLife Tecnologia",
  description:
    "Software House especializada em sites para clínicas em Manaus",
  url: "https://connectlife.com.br",
  telephone: "+559292982078515",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  areaServed: "Manaus, AM",
  priceRange: "R$ 2.500 - R$ 4.900",
};

export default function SiteLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <DiferencialSection />
        <DemosSection />
        <DorSection />
        <PacotesSection />
        <ComoFuncionaSection />
        <CalculadoraSection />
        <CtaFinalSection />
      </main>
    </>
  );
}
