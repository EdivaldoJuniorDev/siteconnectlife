import FadeUp from "@/components/ui/FadeUp";

const DEPOIMENTOS = [
  {
    text: "A ConnectLife entregou o sistema exatamente como prometido. Em 2,5 meses tínhamos um ERP completo funcionando. O suporte pós-entrega foi impecável.",
    name: "Cliente",
    role: "Loja de Cortinas, Manaus",
  },
  {
    text: "Finalmente consegui sair das planilhas. O iEscala simplificou completamente a gestão de escala da equipe de enfermagem. Profissionalismo do início ao fim.",
    name: "Usuária",
    role: "iEscala, Manaus",
  },
];

export default function DepoimentosSection() {
  return (
    <section className="bg-surface-light py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl leading-[1.1] text-text-primary md:text-4xl">
            Quem já trabalhou
            <br />
            com a ConnectLife.
          </h2>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2">
          {DEPOIMENTOS.map((d, i) => (
            <FadeUp key={d.name} delay={i * 0.1}>
              <figure className="relative h-full border border-black/[0.08] bg-white p-8 md:p-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-6 top-2 font-playfair text-[80px] leading-none text-accent/30"
                >
                  &ldquo;
                </span>
                <blockquote className="relative text-base leading-relaxed text-text-primary md:text-lg">
                  {d.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5">
                  <div
                    className="flex h-10 w-10 items-center justify-center bg-accent/10 font-display text-accent"
                    aria-hidden
                  >
                    {d.name.slice(0, 1)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {d.name}
                    </p>
                    <p className="text-xs text-text-secondary">{d.role}</p>
                  </div>
                  <span
                    aria-label="5 estrelas"
                    className="ml-auto text-accent"
                  >
                    ★★★★★
                  </span>
                </figcaption>
              </figure>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
