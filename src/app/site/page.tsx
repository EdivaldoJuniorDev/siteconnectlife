import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TransformationSection from "@/components/TransformationSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Site para Clínicas e Consultórios em Manaus | ConnectLife",
  description:
    "Sites com vídeo, imagens profissionais por IA e PageSpeed 95+. Sem estúdio, sem fotógrafo. Entrega em 7 dias. Resultado garantido.",
  keywords: [
    "site para clínica Manaus",
    "site para dentista Manaus",
    "site para consultório médico Manaus",
    "site para clínica de estética Manaus",
    "landing page para médico Manaus",
  ],
  openGraph: {
    title: "Site para Clínicas e Consultórios em Manaus | ConnectLife",
    description:
      "Sites com vídeo, imagens profissionais por IA e PageSpeed 95+. Sem estúdio, sem fotógrafo. Entrega em 7 dias.",
    url: "https://connectlife.com.br/site",
    siteName: "ConnectLife",
    locale: "pt_BR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Criação de Sites para Clínicas — ConnectLife",
  description:
    "Sites profissionais com vídeo hero, imagens 4K geradas por IA e otimização para Google. Para clínicas, consultórios e profissionais de saúde em Manaus.",
  provider: {
    "@type": "Organization",
    name: "ConnectLife Tecnologia",
    url: "https://connectlife.com.br",
    telephone: "+55-92-98207-8515",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Manaus",
      addressRegion: "AM",
      addressCountry: "BR",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Manaus",
  },
  serviceType: "Criação de Sites",
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
        <TransformationSection />
        <ProcessSection />
        <PortfolioSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
