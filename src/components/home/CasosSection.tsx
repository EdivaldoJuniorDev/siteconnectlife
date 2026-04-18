import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

type Caso = {
  category: string;
  project: string;
  desc: string;
  result: string;
  stack: string[];
  href?: string;
  span: "large" | "medium";
  placeholder: string;
};

const CASOS: Caso[] = [
  {
    category: "Sistema sob medida",
    project: "ERP para loja de cortinas — Manaus",
    desc: "Sistema completo de gestão com controle de pedidos, clientes, estoque e financeiro. Entregue em 2,5 meses.",
    result: "R$ 8.000 de contrato + R$ 450/mês MRR",
    stack: ["Next.js", "Supabase", "Vercel"],
    span: "large",
    placeholder: "</>",
  },
  {
    category: "Micro-SaaS",
    project: "iEscala — Escala de enfermagem",
    desc: "Substituiu planilhas manuais por sistema de agendamento automatizado.",
    result: "MVP em 3 semanas",
    stack: ["Next.js", "Supabase"],
    span: "medium",
    placeholder: "◇",
  },
  {
    category: "Automação com IA",
    project: "SafeStack — Blueprints de segurança",
    desc: "Plataforma SaaS para geração de documentação técnica com IA.",
    result: "Deploy global, Stripe integrado",
    stack: ["Next.js", "Gemini", "Stripe"],
    span: "medium",
    placeholder: "◈",
  },
  {
    category: "Landing para clínica",
    project: "Demos de portfólio — Manaus",
    desc: "Landing pages com vídeo cinematográfico para clínicas de odontologia, estética e psicologia.",
    result: "3 demos prontos · entregas em 7 dias",
    stack: ["Next.js", "Vercel", "VEO3"],
    href: "/site",
    span: "large",
    placeholder: "▶",
  },
];

export default function CasosSection() {
  return (
    <section className="bg-surface-warm py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-14 max-w-xl">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
            O que já entregamos
          </p>
          <h2 className="font-display text-3xl leading-[1.1] text-text-primary md:text-[40px]">
            Projetos reais.
            <br />
            Resultados reais.
          </h2>
        </FadeUp>

        <div className="grid gap-4 md:grid-cols-3">
          {CASOS.map((caso, i) => (
            <FadeUp
              key={caso.project}
              delay={i * 0.06}
              className={caso.span === "large" ? "md:col-span-2" : ""}
            >
              <CasoCard caso={caso} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasoCard({ caso }: { caso: Caso }) {
  const inner = (
    <article className="group flex h-full flex-col border border-black/[0.08] bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-black/20 md:p-8">
      <div
        aria-hidden
        className="mb-6 flex aspect-[16/9] items-center justify-center bg-[#E8E6E1] font-mono text-3xl text-text-secondary/40"
      >
        {caso.placeholder}
      </div>
      <span className="inline-flex w-fit items-center bg-black/[0.04] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-text-secondary">
        {caso.category}
      </span>
      <h3 className="mt-4 font-display text-xl leading-tight text-text-primary">
        {caso.project}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {caso.desc}
      </p>
      <p className="mt-4 text-sm font-medium text-accent-green">
        {caso.result}
      </p>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-black/[0.06] pt-5 text-[11px] text-text-secondary/80">
        {caso.stack.map((s) => (
          <span key={s} className="border border-black/[0.08] px-2 py-0.5">
            {s}
          </span>
        ))}
      </div>
      {caso.href && (
        <span className="mt-5 text-sm text-accent-green transition-colors group-hover:text-accent-green-dark">
          Ver demos →
        </span>
      )}
    </article>
  );

  return caso.href ? <Link href={caso.href}>{inner}</Link> : inner;
}
