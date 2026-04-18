import Counter from "@/components/ui/Counter";
import FadeUp from "@/components/ui/FadeUp";

const NUMEROS = [
  {
    label: "Projetos entregues",
    value: 8,
    suffix: "+",
    desc: "Sites, sistemas e automações entregues nos últimos 12 meses.",
  },
  {
    label: "Prazo médio de entrega",
    value: 7,
    suffix: "",
    unit: "dias",
    desc: "Do briefing ao site no ar. Sem enrolação.",
  },
  {
    label: "Tecnologias dominadas",
    value: 12,
    suffix: "+",
    desc: "Stack moderna e integrada para cada tipo de projeto.",
  },
  {
    label: "Satisfação dos clientes",
    value: 100,
    suffix: "%",
    desc: "Todos os projetos entregues com aprovação total.",
    accent: true,
  },
];

export default function NumerosSection() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mb-14">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
            Em números
          </p>
        </FadeUp>

        <div className="grid grid-cols-2 gap-[1px] bg-black/[0.06] md:grid-cols-4">
          {NUMEROS.map((n, i) => (
            <FadeUp
              key={n.label}
              delay={i * 0.06}
              className="bg-surface-light"
            >
              <div className="p-8 md:p-10">
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-text-secondary">
                  {n.label}
                </p>
                <div className="mt-4 flex items-baseline gap-2">
                  <Counter
                    to={n.value}
                    suffix={n.suffix}
                    className={`font-playfair text-5xl md:text-[72px] leading-none ${
                      n.accent ? "text-accent" : "text-text-primary"
                    }`}
                  />
                  {n.unit && (
                    <span className="text-lg text-text-secondary md:text-2xl">
                      {n.unit}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-text-secondary">{n.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
