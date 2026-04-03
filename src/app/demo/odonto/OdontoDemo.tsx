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
  primary: "#1E3A8A",
  accent: "#2563EB",
  light: "#EFF6FF",
  text: "#0F172A",
  muted: "#64748B",
  border: "rgba(30,58,138,0.1)",
};

/* ─── Banner ─── */
function Banner() {
  return (
    <div className="w-full bg-black text-center py-2.5 px-4">
      <span className="text-xs text-white/70">
        Este é um site de demonstração —{" "}
        <a href="/" className="text-[#4ADE80] underline underline-offset-2">
          ConnectLife Tecnologia
        </a>
      </span>
    </div>
  );
}

/* ─── Header ─── */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b" style={{ borderColor: C.border }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <rect width="30" height="30" fill={C.primary} />
            <path d="M15 6c-2.5 0-4.5 1.8-4.5 4v1c0 2.2 2 4 4.5 4s4.5-1.8 4.5-4v-1c0-2.2-2-4-4.5-4Z" fill="white" opacity=".9" />
            <path d="M9 21c0-2.5 2.7-4 6-4s6 1.5 6 4v2H9v-2Z" fill="white" opacity=".6" />
          </svg>
          <span className="font-bold text-lg" style={{ color: C.primary }}>OdontoVida</span>
        </div>
        <a
          href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20OdontoVida%20e%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex text-sm font-semibold text-white px-5 py-2.5"
          style={{ background: C.accent }}
        >
          Agendar consulta
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
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.12]"
              style={{ color: C.text }}
            >
              Seu sorriso perfeito começa com{" "}
              <span style={{ color: C.accent }}>uma conversa.</span>
            </motion.h1>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade}
              className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}
            >
              Clareamento, implantes e estética dental com tecnologia moderna e
              atendimento humanizado em Manaus.
            </motion.p>
            <motion.div
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20agendar%20uma%20avalia%C3%A7%C3%A3o%20gratuita%20na%20OdontoVida"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white text-sm font-semibold"
                style={{ background: C.accent }}
              >
                Agendar avaliação gratuita
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
            </motion.div>
            <motion.p
              initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fade}
              className="mt-3 text-xs" style={{ color: C.muted }}
            >
              Sem compromisso. Resposta em até 2 horas.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/images/Demo 1 — OdontoVida(hero section).jpg"
              alt="OdontoVida — Clínica Odontológica em Manaus"
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
          <path d="M16 4c-3 0-5.5 2-6 5-.3 2 .5 4 2 5.5L16 28l4-13.5c1.5-1.5 2.3-3.5 2-5.5-.5-3-3-5-6-5Z" />
        </svg>
      ),
      title: "Clareamento a laser",
      desc: "Até 8 tons mais claro em uma sessão. Resultado imediato, sem sensibilidade excessiva.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.accent} strokeWidth="1.4">
          <circle cx="16" cy="14" r="6" /><path d="M16 20v8M12 28h8" /><path d="M13 11l3 3 3-3" />
        </svg>
      ),
      title: "Implante dentário",
      desc: "Solução definitiva para dentes perdidos. Titânio de alta qualidade com garantia de osseointegração.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke={C.accent} strokeWidth="1.4">
          <path d="M16 4l3.5 7.2L27 12.4l-5.5 5.4 1.3 7.6L16 22l-6.8 3.4 1.3-7.6L5 12.4l7.5-1.2L16 4Z" />
        </svg>
      ),
      title: "Estética do sorriso",
      desc: "Lentes de contato dental, facetas e remodelamento para o sorriso que você sempre quis.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade} className="text-center mb-14">
          <p className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: C.accent }}>Serviços</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: C.text }}>Nossos tratamentos</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="group p-8 border transition-all hover:-translate-y-1" style={{ borderColor: C.border }}>
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
    { num: "01", title: "Avaliação gratuita", desc: "Sem taxa de consulta. Venha conhecer a clínica sem compromisso." },
    { num: "02", title: "Tecnologia de ponta", desc: "Equipamentos digitais para diagnóstico preciso e tratamento sem dor." },
    { num: "03", title: "Parcelamos em até 12x", desc: "Seu sorriso não precisa esperar. Condições especiais para todos os tratamentos." },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: C.light }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: C.text }}>
          Por que escolher a OdontoVida?
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
          <img src="/images/Demo 1 — OdontoVida (detalhe procedimento).jpg" alt="Procedimento odontológico" className="w-full h-[280px] md:h-[360px] object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Depoimentos ─── */
function Depoimentos() {
  const deps = [
    { nome: "Fernanda Costa, 34 anos", texto: "Fiz o clareamento e não acreditei no resultado. Em uma sessão meu sorriso mudou completamente. O atendimento foi impecável do começo ao fim." },
    { nome: "Ricardo Almeida, 47 anos", texto: "Tinha medo de fazer implante mas o Dr. foi muito atencioso e explicou tudo. Hoje não vivo mais sem. Recomendo demais para quem está em dúvida." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} custom={0} variants={fade}
          className="text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: C.text }}>
          O que nossos pacientes dizem
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deps.map((d, i) => (
            <motion.div key={d.nome} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i} variants={fade}
              className="p-8 border" style={{ borderColor: C.border }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill={C.accent}>
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
          Agende hoje. Atendemos de segunda a sábado.
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} variants={fade} className="mt-4 text-base text-white/60">
          Vagas limitadas por semana. Garanta a sua avaliação gratuita agora.
        </motion.p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} custom={2} variants={fade}>
          <a
            href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita%20na%20OdontoVida"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white font-semibold text-base"
            style={{ color: C.primary }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={C.primary}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} custom={3} variants={fade} className="mt-6 text-sm text-white/40">
          Av. Djalma Batista, 1661 — Chapada, Manaus - AM · (92) 9 8888-0001
        </motion.p>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="py-10 border-t" style={{ borderColor: C.border }}>
      <div className="max-w-6xl mx-auto px-6 text-center space-y-1">
        <p className="font-bold" style={{ color: C.text }}>OdontoVida Clínica Odontológica</p>
        <p className="text-xs" style={{ color: C.muted }}>CNPJ 00.000.000/0001-00 · CRO-AM 0000</p>
        <p className="text-xs" style={{ color: C.muted }}>Av. Djalma Batista, 1661 — Chapada, Manaus - AM</p>
        <p className="text-xs pt-3" style={{ color: C.muted }}>
          © 2025 OdontoVida. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default function OdontoDemo() {
  return (
    <div style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
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
