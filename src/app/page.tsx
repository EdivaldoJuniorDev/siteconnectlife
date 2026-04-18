import Navbar from "@/components/Navbar";
import HomeHeroSection from "@/components/HomeHeroSection";
import LogosSection from "@/components/home/LogosSection";
import ServicosSection from "@/components/home/ServicosSection";
import ComoFazemosSection from "@/components/home/ComoFazemosSection";
import NumerosSection from "@/components/home/NumerosSection";
import StackSection from "@/components/home/StackSection";
import CasosSection from "@/components/home/CasosSection";
import ParaQuemSection from "@/components/home/ParaQuemSection";
import DepoimentosSection from "@/components/home/DepoimentosSection";
import FaqSection, { FAQ_ITEMS } from "@/components/home/FaqSection";
import CtaFinalSection from "@/components/home/CtaFinalSection";
import Footer from "@/components/Footer";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "ConnectLife Tecnologia",
  description:
    "Software House brasileira focada em Sites, Micro-SaaS, SaaS e Automações para negócios.",
  url: "https://connectlife.com.br",
  logo: "https://connectlife.com.br/logo.webp",
  image: "https://connectlife.com.br/logo.webp",
  telephone: "+55-92-98207-8515",
  email: "contato@connectlife.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manaus",
    addressRegion: "AM",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -3.119,
    longitude: -60.0217,
  },
  areaServed: [
    { "@type": "City", name: "Manaus" },
    { "@type": "Country", name: "Brasil" },
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  serviceType: [
    "Criação de Sites",
    "Desenvolvimento de Software",
    "Automações",
    "SaaS",
    "Micro-SaaS",
  ],
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <HomeHeroSection />
        <LogosSection />
        <ServicosSection />
        <ComoFazemosSection />
        <NumerosSection />
        <StackSection />
        <CasosSection />
        <ParaQuemSection />
        <DepoimentosSection />
        <FaqSection />
        <CtaFinalSection />
      </main>
      <Footer />
    </>
  );
}
