import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const especialidades: Record<
  string,
  { nome: string; descricao: string; copy: string }
> = {
  clinica: {
    nome: "Clínica",
    descricao:
      "Sites profissionais para clínicas em Manaus. Design moderno, foco em captação de pacientes e agendamento online.",
    copy: "Sua clínica merece uma presença digital que transmita confiança e profissionalismo. Criamos sites otimizados para converter visitantes em pacientes.",
  },
  dentista: {
    nome: "Dentista",
    descricao:
      "Sites para dentistas e consultórios odontológicos em Manaus. Agendamento online e captação de pacientes.",
    copy: "Destaque seu consultório odontológico com um site moderno que mostra seus serviços, facilita o agendamento e atrai novos pacientes.",
  },
  "consultorio-medico": {
    nome: "Consultório Médico",
    descricao:
      "Sites para consultórios médicos em Manaus. Presença digital profissional para médicos e especialistas.",
    copy: "Um site profissional é o cartão de visitas do seu consultório. Criamos páginas otimizadas para SEO local que colocam você no topo das buscas em Manaus.",
  },
  dermatologista: {
    nome: "Dermatologista",
    descricao:
      "Sites para dermatologistas em Manaus. Mostre seus tratamentos e atraia pacientes online.",
    copy: "Apresente seus tratamentos dermatológicos com um site elegante e informativo. Galeria de procedimentos, depoimentos e agendamento facilitado.",
  },
  nutricionista: {
    nome: "Nutricionista",
    descricao:
      "Sites para nutricionistas em Manaus. Conecte-se com pacientes e mostre sua expertise.",
    copy: "Sua expertise em nutrição merece destaque online. Criamos sites que comunicam seus diferenciais e facilitam o primeiro contato.",
  },
  psicologo: {
    nome: "Psicólogo",
    descricao:
      "Sites para psicólogos em Manaus. Presença digital acolhedora e profissional.",
    copy: "Um site que transmite acolhimento e profissionalismo. Ideal para psicólogos que querem expandir sua presença digital e atender mais pacientes.",
  },
  fisioterapeuta: {
    nome: "Fisioterapeuta",
    descricao:
      "Sites para fisioterapeutas em Manaus. Mostre seus serviços e atraia novos pacientes.",
    copy: "Apresente seus serviços de fisioterapia com um site moderno. Mostre especializações, localização e facilite o contato dos pacientes.",
  },
  veterinario: {
    nome: "Veterinário",
    descricao:
      "Sites para veterinários e clínicas veterinárias em Manaus. Atraia tutores de pets.",
    copy: "Clínicas veterinárias precisam de presença digital forte. Criamos sites que transmitem cuidado e profissionalismo para tutores de pets.",
  },
};

export function generateStaticParams() {
  return Object.keys(especialidades).map((especialidade) => ({
    especialidade,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { especialidade: string };
}): Metadata {
  const esp = especialidades[params.especialidade];
  if (!esp) return {};

  return {
    title: `Site para ${esp.nome} em Manaus | ConnectLife`,
    description: esp.descricao,
    keywords: [
      `site para ${esp.nome.toLowerCase()} Manaus`,
      `criação de site ${esp.nome.toLowerCase()} Manaus`,
      `desenvolvimento site ${esp.nome.toLowerCase()} Manaus`,
    ],
    openGraph: {
      title: `Site para ${esp.nome} em Manaus | ConnectLife`,
      description: esp.descricao,
      url: `https://connectlife.com.br/site-para-${params.especialidade}-manaus`,
      siteName: "ConnectLife",
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default function EspecialidadePage({
  params,
}: {
  params: { especialidade: string };
}) {
  const esp = especialidades[params.especialidade];
  if (!esp) notFound();

  const whatsappMsg = encodeURIComponent(
    `Olá, quero um site para minha clínica de ${esp.nome}`
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Quanto custa um site para ${esp.nome.toLowerCase()} em Manaus?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nossos sites para profissionais de saúde começam a partir de R$ 1.490, com entrega em até 7 dias úteis.",
        },
      },
      {
        "@type": "Question",
        name: `Qual o prazo de entrega de um site para ${esp.nome.toLowerCase()}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "O prazo médio é de 5 a 7 dias úteis após a aprovação do briefing e do design.",
        },
      },
      {
        "@type": "Question",
        name: "O site é otimizado para Google?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim! Todos os nossos sites são construídos com Next.js e otimizados para SEO, garantindo melhor posicionamento nas buscas do Google.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center noise-bg pt-16">
          <div className="absolute inset-0 dots-grid pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm text-accent font-medium tracking-wide uppercase mb-4">
              Especialidade
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary leading-tight">
              Site para {esp.nome} em Manaus
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
              {esp.copy}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/5592982078515?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                Solicitar orçamento
              </a>
              <a
                href="/#servicos"
                className="inline-flex items-center justify-center px-6 py-3 border border-black/[0.12] text-text-primary text-sm font-medium hover:bg-black/[0.03] transition-colors"
              >
                Ver todos os serviços
              </a>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Design profissional",
                  desc: "Layout moderno e específico para sua especialidade.",
                },
                {
                  title: "SEO otimizado",
                  desc: "Apareça no topo do Google quando pacientes buscarem em Manaus.",
                },
                {
                  title: "Entrega rápida",
                  desc: "Seu site pronto em 5 a 7 dias úteis.",
                },
              ].map((item) => (
                <div key={item.title} className="glass p-6">
                  <h3 className="font-display text-lg text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl text-text-primary text-center mb-12">
              Perguntas frequentes
            </h2>
            <div className="space-y-6">
              {faqJsonLd.mainEntity.map((faq) => (
                <div key={faq.name} className="border-b border-black/[0.06] pb-6">
                  <h3 className="font-medium text-text-primary mb-2">
                    {faq.name}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
