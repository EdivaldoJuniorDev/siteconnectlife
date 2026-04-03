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
  primary: "#8B6F47",
  accent: "#B8943E",
  gold: "#C5A55A",
  bg: "#FAF7F2",
  cream: "#F5F0E8",
  text: "#2C2418",
  muted: "#7D7264",
  border: "rgba(139,111,71,0.12)",
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
            <circle cx="14" cy="14" r="13" stroke={C.accent} strokeWidth="1.5" />
            <circle cx="14" cy="11" r="4" stroke={C.accent} strokeWidth="1.2" />
            <path d="M8 22c0-3.3 2.7-5 6-5s6 1.7 6 5" stroke={C.accent} strokeWidth="1.2" />
          </svg>
          <span className="font-bold text-lg tracking-tight" style={{ color: C.primary }}>
            Íris <span className="font-normal" style={{ color: C.accent }}>Estética</span>
          </span>
        </div>
        <a
          href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20%C3%8Dris%20Est%C3%A9tica%20e%20quero%20agendar"
          target="_blank" rel="noopener noreferrer"
          className="hidden sm:inline-flex text-sm font-semibold text-white px-5 py-2.5"
          style={{ background: C.accent }}
        >
          Agendar avaliação
        </a>
      </div>
    </header>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <motion.h1
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.12]" style={{ color: C.text }}
            >
              Beleza que respeita{" "}
              <span style={{ color: C.accent }}>quem você é.</span>
            </motion.h1>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade}
              className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}
            >
              Tratamentos estéticos faciais e corporais com resultados naturais e
              duradouros. Porque você merece se sentir bem na sua própria pele.
            </motion.p>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20na%20%C3%8Dris%20Est%C3%A9tica"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white text-sm font-semibold"
                style={{ background: C.accent }}
              >
                Agendar minha avaliação
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
            </motion.div>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fade}
              className="mt-3 text-xs" style={{ color: C.muted }}
            >
              Avaliação gratuita · Sem fila de espera
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/Demo 2 — Íris Estética (hero principal).png"
              alt="Íris Estética Avançada — Clínica de Estética em Manaus"
              className="w-full h-[320px] md:h-[440px] object-cover"
            />
          </motion.div>
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
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.accent} strokeWidth="1.4">
          <circle cx="16" cy="13" r="7" /><path d="M12 12c1-2 3-3 4-2s1 3 0 5-3 3-4 2-1-3 0-5Z" fill={C.accent} opacity=".15" />
          <path d="M10 24h12M13 20v4M19 20v4" />
        </svg>
      ),
      title: "Toxina Botulínica",
      desc: "Suavização de linhas de expressão com resultado natural. Procedimento rápido, sem tempo de recuperação.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.accent} strokeWidth="1.4">
          <path d="M16 4c-1 3-4 5-4 10 0 4 2 7 4 8 2-1 4-4 4-8 0-5-3-7-4-10Z" />
          <circle cx="16" cy="15" r="2" fill={C.accent} opacity=".2" />
        </svg>
      ),
      title: "Preenchimento facial",
      desc: "Ácido hialurônico para volumização de lábios, maçãs do rosto e correção de sulcos. Efeito imediato.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.accent} strokeWidth="1.4">
          <path d="M16 4c-4 4-8 8-8 14a8 8 0 0 0 16 0c0-6-4-10-8-14Z" />
          <path d="M12 18c2-1 4-1 6 0" />
        </svg>
      ),
      title: "Skincare avançado",
      desc: "Protocolos personalizados com peelings, microagulhamento e radiofrequência para sua pele específica.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: C.accent }}>Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.text }}>Nossos tratamentos</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="group p-8 border transition-all hover:-translate-y-1" style={{ borderColor: C.border, background: "white" }}>
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

/* ─── Diferenciais ─── */
function Diferenciais() {
  const items = [
    { num: "01", title: "Profissionais certificados", desc: "Todos os procedimentos realizados por médicos e biomédicos com certificação em estética avançada." },
    { num: "02", title: "Resultados naturais", desc: "Nossa filosofia é realçar sua beleza natural, nunca transformar quem você é." },
    { num: "03", title: "Ambiente premium", desc: "Clínica projetada para seu conforto e privacidade, com materiais e equipamentos de alto padrão." },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: C.cream }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: C.text }}>
          Por que escolher a Íris?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((it, i) => (
            <motion.div key={it.num} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade} className="text-center">
              <span className="text-4xl font-bold" style={{ color: C.accent }}>{it.num}</span>
              <h3 className="mt-3 text-lg font-bold" style={{ color: C.text }}>{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{it.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-14">
          <img src="/images/Demo 2 — Íris Estética (ambiente clínica).png" alt="Ambiente da clínica Íris Estética" className="w-full h-[280px] md:h-[360px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Depoimentos ─── */
function Depoimentos() {
  const deps = [
    { nome: "Isabela Mendonça, 38 anos", texto: "Tinha receio do botox mas a Dra. explicou cada detalhe antes de começar. O resultado ficou tão natural que ninguém percebeu que fiz nada — só falam que estou mais descansada." },
    { nome: "Patrícia Viana, 43 anos", texto: "Já fui em outras clínicas em Manaus mas a Íris é outra experiência. O atendimento é exclusivo, o ambiente é lindo e os resultados são incríveis. Não troco por nada." },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: C.text }}>
          O que nossas clientes dizem
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deps.map((d, i) => (
            <motion.div key={d.nome} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="p-8 border bg-white" style={{ borderColor: C.border }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill={C.gold}>
                    <path d="M8 1l2.2 4.5L15 6.3l-3.5 3.4.8 4.8L8 12.2 3.7 14.5l.8-4.8L1 6.3l4.8-.8L8 1Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>&ldquo;{d.texto}&rdquo;</p>
              <p className="text-sm font-bold" style={{ color: C.text }}>{d.nome}</p>
            </motion.div>
          ))}
        </div>
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
          Sua transformação começa com uma conversa.
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade} className="mt-4 text-base text-white/60">
          Atendimento exclusivo, com hora marcada. Sem espera, sem pressa.
        </motion.p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}>
          <a
            href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20na%20%C3%8Dris%20Est%C3%A9tica"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 font-semibold text-base"
            style={{ background: C.gold, color: C.text }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={C.text}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero agendar minha avaliação
          </a>
        </motion.div>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fade} className="mt-6 text-sm text-white/40">
          Rua Recife, 3000 — Adrianópolis, Manaus - AM · (92) 9 8888-0002
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
        <p className="font-bold" style={{ color: C.text }}>Íris Estética Avançada</p>
        <p className="text-xs" style={{ color: C.muted }}>CNPJ 00.000.000/0002-00 · CRM-AM 0000 / CRBM-AM 0000</p>
        <p className="text-xs" style={{ color: C.muted }}>Rua Recife, 3000 — Adrianópolis, Manaus - AM</p>
        <p className="text-xs pt-3" style={{ color: C.muted }}>© 2025 Íris Estética. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default function EsteticaDemo() {
  return (
    <div style={{ fontFamily: "var(--font-sans), system-ui, sans-serif", background: C.bg }}>
      <Banner />
      <Header />
      <Hero />
      <Servicos />
      <Diferenciais />
      <Depoimentos />
      <CTAFinal />
      <Footer />
    </div>
  );
}
