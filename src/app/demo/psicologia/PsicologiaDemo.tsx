"use client";

import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const C = {
  primary: "#5F7A61",
  accent: "#7B9E7C",
  light: "#F2F5F0",
  bg: "#F8F7F4",
  text: "#1F2D1F",
  muted: "#6B7B6B",
  border: "rgba(95,122,97,0.12)",
};

/* ─── Banner ─── */
function Banner() {
  return (
    <div className="w-full bg-black text-center py-2.5 px-4">
      <span className="text-xs text-white/70">
        Este é um site de demonstração —{" "}
        <a href="/" className="text-[#4ADE80] underline underline-offset-2">ConnectLife Tecnologia</a>
      </span>
    </div>
  );
}

/* ─── Header ─── */
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b" style={{ background: `${C.bg}e6`, borderColor: C.border }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke={C.primary} strokeWidth="1.5" />
            <path d="M14 7c-3 0-5 2.5-5 5.5 0 2 1 3.5 2.5 4.5L14 21l2.5-4c1.5-1 2.5-2.5 2.5-4.5C19 9.5 17 7 14 7Z" stroke={C.primary} strokeWidth="1.2" />
            <circle cx="14" cy="12.5" r="1.5" fill={C.primary} />
          </svg>
          <div>
            <span className="font-bold text-sm leading-none" style={{ color: C.primary }}>Dra. Camila Rocha</span>
            <span className="block text-[10px]" style={{ color: C.muted }}>Psicóloga · CRP 20/00000-0</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#sobre" className="text-xs" style={{ color: C.muted }}>Sobre</a>
          <a href="#servicos" className="text-xs" style={{ color: C.muted }}>Serviços</a>
          <a href="#como-funciona" className="text-xs" style={{ color: C.muted }}>Como funciona</a>
          <a
            href="https://wa.me/5592982078515?text=Ol%C3%A1%20Dra.%20Camila%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o"
            target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-white px-4 py-2"
            style={{ background: C.primary }}
          >
            Agendar sessão
          </a>
        </nav>
        <a
          href="https://wa.me/5592982078515?text=Ol%C3%A1%20Dra.%20Camila%2C%20gostaria%20de%20agendar%20uma%20sess%C3%A3o"
          target="_blank" rel="noopener noreferrer"
          className="md:hidden text-xs font-semibold text-white px-4 py-2"
          style={{ background: C.primary }}
        >
          Agendar
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ background: C.light }}>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.12]" style={{ color: C.text }}
            >
              Um espaço seguro para você{" "}
              <span style={{ color: C.primary }}>se encontrar.</span>
            </motion.h1>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade}
              className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}
            >
              Psicoterapia individual para adultos que buscam autoconhecimento,
              equilíbrio emocional e qualidade de vida. Atendimento presencial em
              Manaus e online para todo o Brasil.
            </motion.p>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5592982078515?text=Ol%C3%A1%20Dra.%20Camila%2C%20gostaria%20de%20agendar%20minha%20primeira%20sess%C3%A3o"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white text-sm font-semibold"
                style={{ background: C.primary }}
              >
                Agendar primeira sessão
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
              <a href="#como-funciona"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold border"
                style={{ color: C.primary, borderColor: C.primary }}
              >
                Saiba como funciona
              </a>
            </motion.div>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fade}
              className="mt-3 text-xs" style={{ color: C.muted }}
            >
              Primeira sessão de acolhimento sem compromisso.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/Demo 3 — Dra. Camila Rocha (hero principal) 02.jpg"
              alt="Dra. Camila Rocha — Psicóloga em Manaus"
              className="w-full h-[320px] md:h-[440px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Sobre ─── */
function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-28" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <img
              src="/images/Demo 3 — Dra. Camila Rocha (ambiente consultório) 02.jpg"
              alt="Consultório da Dra. Camila Rocha"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
          </motion.div>
          <div>
            <motion.h2
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
              className="text-3xl md:text-4xl font-bold" style={{ color: C.text }}
            >
              Olá, sou a Camila.
            </motion.h2>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade}
              className="mt-5 space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}
            >
              <p>
                Sou psicóloga formada pela Universidade Federal do Amazonas com
                especialização em Terapia Cognitivo-Comportamental (TCC) pelo
                Instituto de Psicologia Aplicada de São Paulo.
              </p>
              <p>
                Atendo adultos que estão passando por ansiedade, depressão, crises
                de vida, dificuldades nos relacionamentos ou simplesmente querem se
                conhecer melhor.
              </p>
              <p>
                Acredito que cada pessoa carrega em si os recursos para sua
                transformação. Meu papel é caminhar ao seu lado nesse processo com
                escuta genuína, sem julgamentos.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}
              className="mt-6 flex flex-wrap gap-3"
            >
              <span className="text-xs px-3 py-1.5 border" style={{ borderColor: C.border, color: C.primary }}>CRP 20/00000-0</span>
              <span className="text-xs px-3 py-1.5 border" style={{ borderColor: C.border, color: C.primary }}>UFAM</span>
              <span className="text-xs px-3 py-1.5 border" style={{ borderColor: C.border, color: C.primary }}>Especialização TCC — IPA/SP</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Serviços ─── */
function Servicos() {
  const cards = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.primary} strokeWidth="1.4">
          <circle cx="16" cy="12" r="6" /><path d="M10 24c0-3 2.7-5 6-5s6 2 6 5" />
        </svg>
      ),
      title: "Psicoterapia individual",
      desc: "Sessões semanais de 50 minutos com abordagem cognitivo-comportamental. Foco em resultados práticos para sua vida cotidiana.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.primary} strokeWidth="1.4">
          <rect x="6" y="8" width="20" height="14" /><path d="M6 12h20" /><circle cx="16" cy="19" r="2" />
        </svg>
      ),
      title: "Atendimento online",
      desc: "Mesma qualidade do presencial, de onde você estiver. Plataforma segura, sigilo garantido, para todo o Brasil.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.primary} strokeWidth="1.4">
          <path d="M16 6C10 6 6 10.5 6 15s4 7.5 10 11c6-3.5 10-6.5 10-11S22 6 16 6Z" />
        </svg>
      ),
      title: "Avaliação psicológica",
      desc: "Processo estruturado de avaliação para diagnóstico, orientação profissional ou laudos específicos.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28" style={{ background: C.light }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: C.primary }}>Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.text }}>Como posso te ajudar</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="group p-8 border bg-white transition-all hover:-translate-y-1" style={{ borderColor: C.border }}>
              <div className="mb-5">{c.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: C.text }}>{c.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Como funciona ─── */
function ComoFunciona() {
  const steps = [
    { num: "01", title: "Primeiro contato", desc: "Me chame no WhatsApp. Vamos conversar por 15 minutos sem compromisso para entender o que você está buscando." },
    { num: "02", title: "Sessão de acolhimento", desc: "Nosso primeiro encontro. Você me conta sua história, eu te apresento como trabalhamos. Juntos decidimos se faz sentido continuar." },
    { num: "03", title: "Início do processo", desc: "Sessões semanais, mesmo horário, mesmo espaço seguro. Construímos seu processo terapêutico no seu ritmo." },
    { num: "04", title: "Transformação real", desc: "Com o tempo, você percebe mudanças concretas — nos pensamentos, nas relações, na forma de encarar a vida." },
  ];
  return (
    <section id="como-funciona" className="py-20 md:py-28" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="text-3xl md:text-4xl font-bold text-center mb-16" style={{ color: C.text }}>
          Como funciona
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}>
              <span className="text-4xl font-bold" style={{ color: C.accent }}>{s.num}</span>
              <h3 className="mt-3 text-lg font-bold" style={{ color: C.text }}>{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Depoimentos ─── */
function Depoimentos() {
  const deps = [
    { iniciais: "M.F., 29 anos", texto: "Cheguei na terapia sem acreditar muito que ia funcionar. Depois de 6 meses com a Dra. Camila entendo coisas de mim que nunca tinha parado para olhar. Mudou minha vida de verdade." },
    { iniciais: "T.S., 41 anos", texto: "O que me surpreendeu foi a leveza do processo. Eu esperava algo pesado e foi o contrário. A Camila tem uma escuta incrível e me fez sentir seguro desde a primeira sessão." },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: C.light }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: C.text }}>
          Quem já passou por aqui
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deps.map((d, i) => (
            <motion.div key={d.iniciais} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="p-8 border bg-white" style={{ borderColor: C.border }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill={C.primary}>
                    <path d="M8 1l2.2 4.5L15 6.3l-3.5 3.4.8 4.8L8 12.2 3.7 14.5l.8-4.8L1 6.3l4.8-.8L8 1Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>&ldquo;{d.texto}&rdquo;</p>
              <p className="text-sm font-bold" style={{ color: C.text }}>{d.iniciais}</p>
            </motion.div>
          ))}
        </div>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}
          className="mt-6 text-center text-xs italic" style={{ color: C.muted }}>
          Depoimentos com identidade preservada a pedido dos pacientes, em conformidade com o Código de Ética do CFP.
        </motion.p>
      </div>
    </section>
  );
}

/* ─── CTA Final ─── */
function CTAFinal() {
  return (
    <section className="py-20 md:py-28 text-white text-center" style={{ background: C.primary }}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade} className="text-3xl md:text-4xl font-bold">
          Dar o primeiro passo é a parte mais difícil.
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade} className="mt-4 text-base text-white/60">
          O resto a gente faz juntos. Me chame no WhatsApp e vamos conversar sem compromisso.
        </motion.p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}>
          <a
            href="https://wa.me/5592982078515?text=Ol%C3%A1%20Dra.%20Camila%2C%20gostaria%20de%20agendar%20minha%20primeira%20sess%C3%A3o"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white font-semibold text-base"
            style={{ color: C.primary }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={C.primary}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero agendar minha primeira sessão
          </a>
        </motion.div>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fade} className="mt-4 text-xs text-white/40">
          Atendimento presencial em Manaus · Online para todo o Brasil
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: C.border, background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6 text-center space-y-1">
        <p className="font-bold" style={{ color: C.text }}>Dra. Camila Rocha — Psicóloga</p>
        <p className="text-xs" style={{ color: C.muted }}>CRP 20/00000-0</p>
        <p className="text-xs" style={{ color: C.muted }}>Rua Leonardo Malcher, 726 — Centro, Manaus - AM</p>
        <p className="text-xs" style={{ color: C.muted }}>contato@dracamilarocha.com.br · (92) 9 8888-0003</p>
        <p className="text-xs" style={{ color: C.muted }}>Atendimento: Seg a Sex, 8h às 19h · Sáb, 8h às 13h</p>
        <p className="text-xs pt-3" style={{ color: C.muted }}>© 2025 Dra. Camila Rocha. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function PsicologiaDemo() {
  return (
    <div style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", background: C.bg }}>
      <Banner />
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <ComoFunciona />
      <Depoimentos />
      <CTAFinal />
      <Footer />
    </div>
  );
}
