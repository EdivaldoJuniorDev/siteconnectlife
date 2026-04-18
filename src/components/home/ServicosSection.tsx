import { Monitor, Zap, Puzzle, Server, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

type Servico = {
  icon: React.ReactNode;
  badge: string;
  badgeTone: "green" | "gray";
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  cta: { label: string; href: string; external?: boolean };
  accent?: boolean;
};

const SERVICOS: Servico[] = [
  {
    icon: <Monitor size={24} strokeWidth={1.5} />,
    badge: "A partir de R$ 2.500",
    badgeTone: "green",
    title: (
      <>
        Site que agenda clientes
        <br />
        enquanto você dorme.
      </>
    ),
    description:
      "Não é só uma página bonita. É sua recepção funcionando 24h — captando, informando e convertendo visitas em clientes agendados.",
    bullets: [
      "Design exclusivo por segmento",
      "SEO local configurado desde o dia 1",
      "Domínio + hospedagem + email inclusos",
      "Entrega em 5 a 7 dias úteis",
    ],
    cta: { label: "Ver pacotes", href: "/site" },
    accent: true,
  },
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    badge: "Sob consulta",
    badgeTone: "gray",
    title: (
      <>
        Automação que elimina
        <br />
        o trabalho repetitivo.
      </>
    ),
    description:
      "Confirmação de consulta, follow-up, lembretes, relatórios — tudo rodando sozinho. Você foca no que importa.",
    cta: {
      label: "Falar sobre automação",
      href: "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20automa%C3%A7%C3%B5es",
      external: true,
    },
  },
  {
    icon: <Puzzle size={24} strokeWidth={1.5} />,
    badge: "Sob consulta",
    badgeTone: "gray",
    title: (
      <>
        Produto digital enxuto
        <br />e rentável.
      </>
    ),
    description:
      "Da ideia ao MVP funcional com stack moderna. Valide seu produto no mercado antes de investir pesado.",
    cta: {
      label: "Falar sobre Micro-SaaS",
      href: "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20tenho%20uma%20ideia%20de%20Micro-SaaS",
      external: true,
    },
  },
  {
    icon: <Server size={24} strokeWidth={1.5} />,
    badge: "Sob consulta",
    badgeTone: "gray",
    title: (
      <>
        Plataforma robusta
        <br />
        do zero ao deploy.
      </>
    ),
    description:
      "Autenticação, billing, dashboard, multi-tenant — toda infraestrutura que seu negócio precisa para escalar.",
    cta: {
      label: "Falar sobre SaaS completo",
      href: "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20falar%20sobre%20SaaS%20completo",
      external: true,
    },
  },
];

export default function ServicosSection() {
  return (
    <section id="servicos" className="bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-14 max-w-xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-[40px] leading-[1.1] text-text-primary">
            O que a ConnectLife
            <br />
            constrói para você.
          </h2>
          <p className="mt-4 text-sm text-text-secondary md:text-base">
            Da primeira conversa ao produto no ar.
          </p>
        </FadeUp>

        <div className="grid gap-[1px] bg-black/[0.06] md:grid-cols-2">
          {SERVICOS.map((s, i) => (
            <FadeUp key={i} delay={i * 0.06}>
              <ServicoCard servico={s} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicoCard({ servico }: { servico: Servico }) {
  const { cta } = servico;
  const CtaComponent = cta.external ? "a" : Link;
  const ctaProps = cta.external
    ? {
        href: cta.href,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : { href: cta.href };

  return (
    <article
      className={`group relative flex h-full flex-col bg-white p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 md:p-10 ${
        servico.accent ? "border-t-2 border-t-accent" : ""
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="text-text-primary">{servico.icon}</div>
        <span
          className={`inline-flex items-center px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${
            servico.badgeTone === "green"
              ? "bg-accent/10 text-accent"
              : "bg-black/[0.04] text-text-secondary"
          }`}
        >
          {servico.badge}
        </span>
      </div>

      <h3 className="font-display text-xl leading-tight text-text-primary md:text-2xl">
        {servico.title}
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
        {servico.description}
      </p>

      {servico.bullets && (
        <ul className="mt-6 space-y-2 text-sm text-text-secondary">
          {servico.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <span className="mt-1 text-accent">→</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <CtaComponent
        {...ctaProps}
        className={`mt-8 inline-flex w-fit items-center gap-1.5 text-sm transition-colors ${
          servico.accent
            ? "text-accent hover:text-accent-dark"
            : "text-text-secondary hover:text-text-primary"
        }`}
      >
        {cta.label}
        <ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </CtaComponent>
    </article>
  );
}
