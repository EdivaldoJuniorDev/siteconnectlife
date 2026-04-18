import FadeUp from "@/components/ui/FadeUp";

const STEPS = [
  {
    num: "01",
    title: "Você explica. A gente escuta.",
    desc: "Uma conversa de 30 minutos pelo WhatsApp. Entendemos seu negócio, seu público e seu objetivo. Sem formulário de 40 campos.",
    duration: "~30 minutos",
  },
  {
    num: "02",
    title: "Mostramos antes de construir.",
    desc: "Você aprova o visual antes de escrevermos uma linha de código. Sem surpresa no design.",
    duration: "1 a 2 dias",
  },
  {
    num: "03",
    title: "Construímos com tecnologia de ponta.",
    desc: "Código limpo, SEO configurado, performance otimizada desde o primeiro commit. Stack: Next.js, Supabase, Vercel.",
    duration: "3 a 7 dias",
  },
  {
    num: "04",
    title: "No ar. De verdade.",
    desc: "Domínio, hospedagem, SSL, email — tudo configurado e testado. Você recebe as chaves do projeto, não uma dependência eterna.",
    duration: "1 dia",
  },
];

export default function ComoFazemosSection() {
  return (
    <section id="processo" className="bg-dark-bg py-24 md:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:gap-24">
        <FadeUp className="md:sticky md:top-32 md:self-start">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            Processo
          </p>
          <h2 className="font-display text-3xl leading-[1.1] text-white md:text-[40px]">
            Sem reunião toda semana.
            <br />
            Sem surpresa no final.
          </h2>
          <p className="mt-4 text-base text-white/50">
            Do briefing ao deploy em etapas claras e previsíveis.
          </p>
          <a
            href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20iniciar%20um%20projeto%20com%20a%20ConnectLife"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
          >
            Iniciar projeto →
          </a>
        </FadeUp>

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-6 left-[35px] top-6 w-px bg-accent/30 md:left-[43px]"
          />
          <ol className="space-y-10 md:space-y-14">
            {STEPS.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.08}>
                <li className="relative flex items-start gap-6">
                  <span className="font-playfair text-5xl md:text-6xl text-transparent [-webkit-text-stroke:1px_#1D9E75] [text-stroke:1px_#1D9E75] opacity-80 leading-none shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-white md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50 md:text-[15px]">
                      {step.desc}
                    </p>
                    <span className="mt-3 inline-flex items-center border border-accent/40 px-2.5 py-1 text-[10px] uppercase tracking-wider text-accent">
                      {step.duration}
                    </span>
                  </div>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
