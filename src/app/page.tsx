import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "ConnectLife Tecnologia",
  description:
    "Software House brasileira focada em Sites, Micro-SaaS, SaaS e Automações para negócios. Sites profissionais para clínicas e consultórios em Manaus.",
  url: "https://connectlife.com.br",
  logo: "http://connectlife.com.br/wp-content/uploads/2024/09/cropped-Ativo-1.png",
  image:
    "http://connectlife.com.br/wp-content/uploads/2024/09/cropped-Ativo-1.png",
  telephone: "+55-92-98207-8515",
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
  areaServed: {
    "@type": "City",
    name: "Manaus",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [],
  serviceType: [
    "Criação de Sites",
    "Desenvolvimento de Software",
    "Automações",
    "SaaS",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
