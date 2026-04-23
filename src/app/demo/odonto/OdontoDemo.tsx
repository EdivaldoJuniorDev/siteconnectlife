"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import BannerDemo from "@/components/demo/shared/BannerDemo";
import GlassBadge from "@/components/demo/shared/GlassBadge";

/* ─── Constants ─── */
const WA = "https://wa.me/5592982078515?text=Vi%20o%20demo%20OdontoVida%20e%20quero%20um%20site%20assim%20para%20minha%20cl%C3%ADnica";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const VP = { once: true, margin: "-60px" as const };

/* ─── Animated Counter ─── */
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1600;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image (placeholder for future video) */}
      <img
        src="/images/Demo 1 — OdontoVida(hero section).jpg"
        alt="OdontoVida — Clínica Odontológica"
        className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
        draggable={false}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-10">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <div className="max-w-xl">
            {/* Pill tag */}
            <motion.div
              initial="hidden" whileInView="show" viewport={VP} custom={0} variants={fade}
            >
              <span className="inline-block border border-[#95D5B2] text-[#95D5B2] text-xs tracking-wide px-4 py-1.5 rounded-full">
                Clínica Odontológica em Manaus
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial="hidden" whileInView="show" viewport={VP} custom={1} variants={fade}
              className="mt-6 font-cormorant text-4xl sm:text-5xl lg:text-[58px] leading-[1.08] text-white font-semibold"
            >
              Seu sorriso perfeito começa com uma{" "}
              <span className="text-[#95D5B2]">conversa.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial="hidden" whileInView="show" viewport={VP} custom={2} variants={fade}
              className="mt-5 text-base text-white/60 leading-relaxed max-w-[420px]"
            >
              Clareamento, implantes e estética dental com tecnologia moderna e
              atendimento humanizado em Manaus.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial="hidden" whileInView="show" viewport={VP} custom={3} variants={fade}
              className="mt-8"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#1A4731] hover:bg-[#2D6A4F] text-white text-sm font-semibold px-7 py-3.5 transition-colors"
              >
                Agendar avaliação gratuita
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>

            {/* Micro text */}
            <motion.p
              initial="hidden" whileInView="show" viewport={VP} custom={4} variants={fade}
              className="mt-3 text-xs text-white/40"
            >
              Sem compromisso. Resposta em até 2 horas.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Glass badges */}
      <div className="absolute top-28 right-6 md:right-12 z-10 hidden sm:block">
        <GlassBadge variant="light" float="slow">
          <span className="flex items-center gap-1.5">
            <span className="text-yellow-400">&#9733;</span> 4.9 &mdash; 247 avaliações Google
          </span>
        </GlassBadge>
      </div>
      <div className="absolute bottom-24 right-6 md:right-12 z-10 hidden sm:block">
        <GlassBadge variant="dark" float="fast">
          <span className="flex items-center gap-1.5">
            &#x1F9B7; Próximo horário: hoje às 15h
          </span>
        </GlassBadge>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   2. NAV (sticky below banner)
   ═══════════════════════════════════════════════ */
function Nav() {
  return (
    <nav className="sticky top-10 z-40 bg-white border-b border-black/[0.08]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2c-3.5 0-6 2.2-6 5.5 0 1.8.8 3.2 2 4.2.5.4.7.9.5 1.5l-1.5 5c-.2.6.3 1.2.9 1l3-1.2c.4-.2.8-.1 1.1.1.6.3 1.3.4 2 .4s1.4-.1 2-.4c.3-.2.7-.3 1.1-.1l3 1.2c.6.2 1.1-.4.9-1l-1.5-5c-.2-.6 0-1.1.5-1.5 1.2-1 2-2.4 2-4.2C20 4.2 17.5 2 14 2Z"
              fill="#1A4731"
            />
            <path
              d="M11 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM17 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="white"
              opacity="0.5"
            />
          </svg>
          <span className="font-cormorant text-xl font-bold text-[#1A4731]">OdontoVida</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[#5C5C58]">
          <a href="#inicio" className="hover:text-[#1A4731] transition-colors">Início</a>
          <a href="#sobre" className="hover:text-[#1A4731] transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-[#1A4731] transition-colors">Serviços</a>
          <a href="#resultados" className="hover:text-[#1A4731] transition-colors">Resultados</a>
        </div>

        {/* CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1A4731] hover:bg-[#2D6A4F] text-white text-sm font-semibold px-5 py-2.5 transition-colors"
        >
          Agendar consulta
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   3. SOBRE (two columns)
   ═══════════════════════════════════════════════ */
function Sobre() {
  const checks = [
    "Equipamentos digitais de última geração",
    "Equipe com mais de 10 especialistas",
    "Anestesia digital sem dor",
    "Parcelamento em até 18x sem juros",
  ];

  return (
    <section id="sobre" className="bg-[#F8F6F2] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/Demo 1 — OdontoVida(hero section)02.jpg"
                alt="Equipe OdontoVida"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4">
              <GlassBadge variant="dark" className="text-white/90">
                CRO-AM 00000
              </GlassBadge>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <div>
            <motion.span
              initial="hidden" whileInView="show" viewport={VP} custom={0} variants={fade}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F]"
            >
              Sobre
            </motion.span>

            <motion.h2
              initial="hidden" whileInView="show" viewport={VP} custom={1} variants={fade}
              className="mt-4 font-cormorant text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-semibold text-[#1A1A18]"
            >
              Cuidando do seu sorriso há mais de 10 anos.
            </motion.h2>

            <motion.p
              initial="hidden" whileInView="show" viewport={VP} custom={2} variants={fade}
              className="mt-5 text-[#5C5C58] leading-relaxed"
            >
              A OdontoVida nasceu com o propósito de oferecer odontologia de excelência
              com acolhimento humano. Cada paciente é único, e cada sorriso merece
              um plano de tratamento personalizado, com tecnologia de ponta e profissionais
              dedicados ao seu conforto.
            </motion.p>

            {/* Checklist */}
            <motion.ul
              initial="hidden" whileInView="show" viewport={VP} custom={3} variants={fade}
              className="mt-6 space-y-3"
            >
              {checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1A1A18]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
                    <circle cx="10" cy="10" r="10" fill="#95D5B2" opacity="0.25" />
                    <path d="M6.5 10.5L9 13l4.5-5" stroke="#1A4731" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Inline CTA */}
            <motion.div
              initial="hidden" whileInView="show" viewport={VP} custom={4} variants={fade}
              className="mt-8"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4731] hover:text-[#2D6A4F] transition-colors group"
              >
                Conheça nossa equipe
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   4. SERVIÇOS (6 cards grid)
   ═══════════════════════════════════════════════ */
const services = [
  {
    title: "Clareamento a Laser",
    desc: "Até 8 tons mais claro em uma única sessão. Resultado imediato, com conforto e segurança.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="6" />
        <path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.8 7.8l2.1 2.1M22.1 22.1l2.1 2.1M7.8 24.2l2.1-2.1M22.1 9.9l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "Implante Dentário",
    desc: "Solução definitiva para dentes perdidos. Titânio de alta qualidade com garantia de osseointegração.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4c-3.5 0-6 2-6 5.5 0 2 1 3.5 2.5 4.5L14 20h4l1.5-6c1.5-1 2.5-2.5 2.5-4.5C22 6 19.5 4 16 4Z" />
        <path d="M14 20l-.5 4c-.2 1.5.8 2.5 2.5 2.5s2.7-1 2.5-2.5L18 20" />
      </svg>
    ),
    badge: "Mais procurado",
  },
  {
    title: "Lentes de Contato",
    desc: "Facetas ultrafinas para um sorriso perfeito, natural e duradouro. Mudança completa em poucas sessões.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4l3.5 7.2L27 12.4l-5.5 5.4 1.3 7.6L16 22l-6.8 3.4 1.3-7.6L5 12.4l7.5-1.2L16 4Z" />
      </svg>
    ),
  },
  {
    title: "Harmonização Facial",
    desc: "Botox, preenchimento labial e bichectomia para realçar sua beleza natural com equilíbrio e sutileza.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="13" r="8" />
        <path d="M12 12c0 0 1.5 3 4 3s4-3 4-3" />
        <path d="M13 10.5h.01M19 10.5h.01" />
        <path d="M12 21l-2 7M20 21l2 7" />
      </svg>
    ),
  },
  {
    title: "Ortodontia",
    desc: "Aparelhos transparentes e metálicos para alinhar seus dentes com conforto. Acompanhamento mensal.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="12" width="20" height="8" rx="4" />
        <rect x="10" y="14" width="4" height="4" rx="1" />
        <rect x="18" y="14" width="4" height="4" rx="1" />
        <path d="M6 16h4M22 16h4" />
      </svg>
    ),
  },
  {
    title: "Tratamento de Canal",
    desc: "Procedimento indolor com tecnologia digital e microscópio. Salve seu dente natural com segurança.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#2D6A4F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4c-4 0-7 3-7 6.5 0 2.5 1.5 4.5 3.5 5.5l1 3h5l1-3c2-1 3.5-3 3.5-5.5C23 7 20 4 16 4Z" />
        <path d="M14.5 18.5v5.5c0 1 .7 2 1.5 2s1.5-1 1.5-2v-5.5" />
      </svg>
    ),
  },
];

function Servicos() {
  return (
    <section id="servicos" className="bg-[#EFF4F1] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={VP} custom={0} variants={fade}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F]">
            Serviços
          </span>
          <h2 className="mt-3 font-cormorant text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#1A1A18]">
            Nossos tratamentos
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="show"
              viewport={VP}
              custom={i}
              variants={fade}
              className="group relative bg-white border border-black/[0.06] p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-[#1A4731]/40 hover:shadow-lg"
            >
              {s.badge && (
                <span className="absolute top-4 right-4 bg-[#95D5B2]/20 text-[#1A4731] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1">
                  {s.badge}
                </span>
              )}
              <div className="mb-5">{s.icon}</div>
              <h3 className="text-lg font-bold text-[#1A1A18] mb-2">{s.title}</h3>
              <p className="text-sm text-[#5C5C58] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detail image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 overflow-hidden"
        >
          <img
            src="/images/Demo 1 — OdontoVida (detalhe procedimento).jpg"
            alt="Procedimento odontológico moderno"
            className="w-full h-[280px] md:h-[380px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   5. ANTES E DEPOIS (before/after slider)
   ═══════════════════════════════════════════════ */
function AntesDepois() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.max(2, Math.min(98, (x / rect.width) * 100)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
      containerRef.current?.setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => setIsDragging(false), []);

  return (
    <section id="resultados" className="bg-[#F8F6F2] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={VP} custom={0} variants={fade}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F]">
            Resultados
          </span>
          <h2 className="mt-3 font-cormorant text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#1A1A18]">
            Antes e depois
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] select-none cursor-ew-resize overflow-hidden border border-black/[0.08]"
            style={{ touchAction: "none" }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* DEPOIS (full background) */}
            <div className="absolute inset-0">
              <Image
                src="/images/pos-do-clareamento.png"
                alt="Depois do clareamento"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            {/* ANTES (clipped) */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/images/antes-do-clareamento.png"
                alt="Antes do clareamento"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>

            {/* Divider line + handle */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#1A4731]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#1A1A18]">
                  <path d="M4 8L1 5M1 5L4 2M1 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 8L15 5M15 5L12 2M15 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-3 left-3 z-20 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
              Antes
            </div>
            <div className="absolute top-3 right-3 z-20 bg-[#1A4731] px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
              Depois
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden" whileInView="show" viewport={VP} custom={1} variants={fade}
          className="mt-12 grid grid-cols-3 gap-4 text-center"
        >
          {[
            { value: 247, suffix: "", label: "Pacientes atendidos" },
            { value: 8, suffix: "+", label: "Anos de experiência" },
            { value: 100, suffix: "%", label: "Satisfação" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-cormorant text-3xl md:text-4xl font-bold text-[#1A4731]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-xs text-[#5C5C58]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   6. DEPOIMENTOS (2 glass cards)
   ═══════════════════════════════════════════════ */
function Depoimentos() {
  const deps = [
    {
      nome: "Fernanda Costa",
      texto:
        "Fiz o clareamento e não acreditei no resultado. Em uma sessão meu sorriso mudou completamente. O atendimento foi impecável do começo ao fim. Recomendo de olhos fechados!",
    },
    {
      nome: "Ricardo Almeida",
      texto:
        "Tinha medo de fazer implante mas o Dr. foi muito atencioso e explicou tudo com calma. Hoje mastigo normalmente e sorrio sem vergonha. Mudou minha vida.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={VP} custom={0} variants={fade}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#2D6A4F]">
            Depoimentos
          </span>
          <h2 className="mt-3 font-cormorant text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#1A1A18]">
            O que nossos pacientes dizem
          </h2>
        </motion.div>

        {/* Floating notification badges */}
        <div className="relative">
          <div className="absolute -top-8 left-4 hidden md:block">
            <GlassBadge variant="light" float="slow" className="bg-[#1A4731]/10 backdrop-blur-sm border-[#1A4731]/10 text-[#1A4731]">
              +12 avaliações este mês
            </GlassBadge>
          </div>
          <div className="absolute -top-6 right-8 hidden md:block">
            <GlassBadge variant="light" float="fast" className="bg-[#95D5B2]/20 backdrop-blur-sm border-[#95D5B2]/30 text-[#1A4731]">
              Nota 4.9 no Google
            </GlassBadge>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {deps.map((d, i) => (
              <motion.div
                key={d.nome}
                initial="hidden"
                whileInView="show"
                viewport={VP}
                custom={i + 1}
                variants={fade}
                className="bg-white/80 backdrop-blur-md border border-[#1A4731]/10 p-8 shadow-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#1A4731">
                      <path d="M8 1l2.2 4.5L15 6.3l-3.5 3.4.8 4.8L8 12.2 3.7 14.5l.8-4.8L1 6.3l4.8-.8L8 1Z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm text-[#5C5C58] leading-relaxed mb-5">
                  &ldquo;{d.texto}&rdquo;
                </p>

                <p className="text-sm font-bold text-[#1A1A18]">{d.nome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   7. CTA FINAL + FOOTER
   ═══════════════════════════════════════════════ */
function CTAFinal() {
  return (
    <section className="relative bg-[#1A4731] py-20 md:py-28 overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-10 text-center">
        <motion.h2
          initial="hidden" whileInView="show" viewport={VP} custom={0} variants={fade}
          className="font-cormorant text-3xl md:text-4xl lg:text-[48px] leading-[1.12] font-semibold text-white"
        >
          Agende hoje. Atendemos de segunda a sábado.
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="show" viewport={VP} custom={1} variants={fade}
          className="mt-5 text-base text-white/60"
        >
          Vagas limitadas por semana. Garanta a sua avaliação gratuita agora.
        </motion.p>

        <motion.div
          initial="hidden" whileInView="show" viewport={VP} custom={2} variants={fade}
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 bg-white hover:bg-white/90 text-[#1A4731] font-semibold text-base px-8 py-4 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1A4731">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial="hidden" whileInView="show" viewport={VP} custom={3} variants={fade}
          className="mt-14 pt-8 border-t border-white/10"
        >
          <p className="font-cormorant text-lg font-semibold text-white/80">
            OdontoVida Clínica Odontológica
          </p>
          <p className="mt-2 text-xs text-white/40">
            CNPJ 00.000.000/0001-00 &middot; CRO-AM 0000
          </p>
          <p className="mt-1 text-xs text-white/40">
            Av. Djalma Batista, 1661 &mdash; Chapada, Manaus - AM &middot; (92) 9 8888-0001
          </p>
          <p className="mt-4 text-xs text-white/25">
            &copy; 2025 OdontoVida. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MAIN EXPORT
   ═══════════════════════════════════════════════ */
export default function OdontoDemo() {
  return (
    <div className="font-sans antialiased">
      <BannerDemo />
      <Hero />
      <Nav />
      <Sobre />
      <Servicos />
      <AntesDepois />
      <Depoimentos />
      <CTAFinal />
    </div>
  );
}
