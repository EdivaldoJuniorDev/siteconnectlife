import { HeartPulse, Briefcase, Rocket } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const PERFIS = [
  {
    icon: <HeartPulse size={40} strokeWidth={1.25} />,
    title: "Clínicas e consultórios",
    desc: "Você tem expertise médica. A gente tem expertise digital. Juntos, sua agenda fica cheia.",
    bullets: [
      "Odontologia, estética, psicologia",
      "Nutrição, fisioterapia, dermatologia",
      "Qualquer especialidade em Manaus",
    ],
    cta: { label: "Ver solução para clínicas", href: "/site", internal: true },
  },
  {
    icon: <Briefcase size={40} strokeWidth={1.25} />,
    title: "Empresas e profissionais liberais",
    desc: "Advogados, arquitetos, contadores, consultores. Presença digital que transmite autoridade e gera leads.",
    bullets: [
      "Site institucional profissional",
      "Automações de atendimento",
      "Integração com WhatsApp e CRM",
    ],
    cta: {
      label: "Falar sobre meu negócio",
      href: "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20sou%20profissional%20liberal%20e%20quero%20um%20site",
      internal: false,
    },
  },
  {
    icon: <Rocket size={40} strokeWidth={1.25} />,
    title: "Founders e empreendedores",
    desc: "Tem uma ideia de produto digital? Do MVP à plataforma completa, construímos com você.",
    bullets: [
      "Validação rápida de produto",
      "Stack moderna e escalável",
      "Você fica com o código, sempre",
    ],
    cta: {
      label: "Falar sobre meu MVP",
      href: "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20tenho%20uma%20ideia%20de%20MVP",
      internal: false,
    },
  },
];

export default function ParaQuemSection() {
  return (
    <section className="bg-dark-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-14 max-w-xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            Para quem
          </p>
          <h2 className="font-display text-3xl leading-[1.1] text-white md:text-[40px]">
            Construímos para quem
            <br />
            quer crescer de verdade.
          </h2>
        </FadeUp>

        <div className="grid gap-[1px] bg-white/10 md:grid-cols-3">
          {PERFIS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08} className="bg-dark-bg">
              <div className="group h-full flex flex-col p-8 md:p-10 border-t-2 border-t-transparent transition-colors hover:border-t-accent">
                <div className="text-accent">{p.icon}</div>
                <h3 className="mt-6 font-display text-xl text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  {p.desc}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/60">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 text-accent">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  {p.cta.internal ? (
                    <Link
                      href={p.cta.href}
                      className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-light"
                    >
                      {p.cta.label} →
                    </Link>
                  ) : (
                    <a
                      href={p.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-light"
                    >
                      {p.cta.label} →
                    </a>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
