"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BannerDemo from "@/components/demo/shared/BannerDemo";
import GlassBadge from "@/components/demo/shared/GlassBadge";

/* ─── Constants ─── */
const WA =
  "https://wa.me/5592982078515?text=Vi%20o%20demo%20%C3%8Dris%20Est%C3%A9tica%20e%20quero%20um%20site%20assim%20para%20minha%20cl%C3%ADnica";

const VIEWPORT = { once: true, margin: "-60px" as const };

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: EASE },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* ─── Nav Links ─── */
const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

/* ─── Tratamentos Data ─── */
const TREATMENTS = [
  {
    title: "Toxina Botulínica",
    desc: "Suavização de linhas de expressão com aplicação precisa e resultado natural. Procedimento rápido, sem tempo de recuperação.",
    badge: "Mais procurado",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 6v24M18 6c-2 4-5 6-5 12s3 8 5 12M18 6c2 4 5 6 5 12s-3 8-5 12" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="18" cy="18" r="2.5" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Preenchimento Facial",
    desc: "Ácido hialurônico para volumização de lábios, maçãs do rosto e correção de sulcos com efeito imediato e duradouro.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M18 5c-1 3-5 6-5 13 0 5 2.5 8 5 10 2.5-2 5-5 5-10 0-7-4-10-5-13Z" stroke="#C9A84C" strokeWidth="1.3" />
        <circle cx="18" cy="17" r="2.5" fill="#C9A84C" opacity="0.15" />
        <path d="M15 22c1.5-1 4.5-1 6 0" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Bioestimuladores",
    desc: "Estímulo natural de colágeno com Sculptra e Radiesse. Rejuvenescimento progressivo com aspecto natural e duradouro.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="10" stroke="#C9A84C" strokeWidth="1.3" />
        <circle cx="18" cy="18" r="5" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="18" cy="18" r="1.5" fill="#C9A84C" opacity="0.3" />
        <path d="M18 8v3M18 25v3M8 18h3M25 18h3" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Skinbooster",
    desc: "Hidratação profunda da pele com microinjeções de ácido hialurônico. Luminosidade e viço imediatos.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M12 8c-3 4-6 9-6 15a12 12 0 0024 0c0-6-3-11-6-15" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M18 4v10" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="18" cy="22" r="3" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Fios de PDO",
    desc: "Lifting não-cirúrgico com fios absorvíveis. Sustentação e estímulo de colágeno para contorno facial definido.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M10 26c2-6 4-14 8-18M18 8c4 4 6 12 8 18" stroke="#C9A84C" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M12 22h12" stroke="#C9A84C" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="18" cy="8" r="2" fill="#C9A84C" opacity="0.2" stroke="#C9A84C" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: "Protocolos Personalizados",
    desc: "Combinação exclusiva de técnicas para seu tipo de pele. Peelings, microagulhamento e radiofrequência sob medida.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="8" y="8" width="20" height="20" rx="3" stroke="#C9A84C" strokeWidth="1.3" />
        <path d="M14 15h8M14 19h5" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" fill="#C9A84C" opacity="0.15" stroke="#C9A84C" strokeWidth="1" />
        <path d="M22.5 24h3M24 22.5v3" stroke="#C9A84C" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ─── Checklist items ─── */
const CHECKLIST = [
  "Especialista em harmonização orofacial",
  "+7 anos de experiência em estética avançada",
  "Materiais de primeira linha e certificados",
  "Atendimento exclusivo e personalizado",
];

/* ─── Depoimentos Data ─── */
const TESTIMONIALS = [
  {
    name: "Isabela Mendonça",
    age: "38 anos",
    text: "Tinha receio do botox mas a Dra. explicou cada detalhe antes de começar. O resultado ficou tão natural que ninguém percebeu — só falam que estou mais descansada e bonita.",
  },
  {
    name: "Patrícia Viana",
    age: "43 anos",
    text: "Já fui em outras clínicas em Manaus mas a Íris é outra experiência. O atendimento é exclusivo, o ambiente é lindo e os resultados são incríveis. Não troco por nada.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden pt-10">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/Demo 2 — Íris Estética (hero principal).png"
          alt="Íris Estética — Clínica de Estética Avançada"
          className="h-full w-full object-cover scale-[1.03]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810]/80 via-[#2C1810]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={0}
              variants={fade}
              className="font-cormorant text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[64px]"
            >
              Beleza que respeita{" "}
              <span className="italic text-[#E8D5A3]">quem você é.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={1}
              variants={fade}
              className="mt-6 text-[15px] leading-relaxed text-white/60"
            >
              Tratamentos estéticos faciais e corporais com resultados naturais e
              duradouros. Porque você merece se sentir bem na sua própria pele.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={2}
              variants={fade}
              className="mt-8"
            >
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#8B6914] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#A07A1A]"
              >
                Agendar minha avaliação
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={3}
              variants={fade}
              className="mt-3 text-xs text-white/40"
            >
              Avaliação gratuita · Atendimento exclusivo · Sem fila de espera
            </motion.p>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute right-4 top-24 z-20 hidden lg:block sm:right-8 lg:right-12 lg:top-32">
        <GlassBadge variant="light" float="slow">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.5" />
              <circle cx="18" cy="6" r="1.5" fill="white" />
            </svg>
            <span className="text-white/90">Cliente · Super recomendo!</span>
            <span className="text-white/40">· há 31m</span>
          </span>
        </GlassBadge>
      </div>

      <div className="absolute bottom-24 right-4 z-20 hidden lg:block sm:right-8 lg:bottom-32 lg:right-16">
        <GlassBadge variant="dark" float="fast">
          <span className="flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-white/90">Adorei o resultado!</span>
            <span className="text-white/40">· há 23m</span>
          </span>
        </GlassBadge>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   2. NAV
   ═══════════════════════════════════════════════════════════════════════ */
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-10 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-1">
          <span
            className={`font-cormorant text-xl font-bold italic transition-colors ${
              scrolled ? "text-[#C9A84C]" : "text-[#E8D5A3]"
            }`}
          >
            Íris
          </span>
          <span
            className={`font-cormorant text-xl font-normal transition-colors ${
              scrolled ? "text-[#1C1410]" : "text-white"
            }`}
          >
            Estética
          </span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-[#7A6A58] hover:text-[#1C1410]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden text-sm font-semibold transition-all sm:inline-flex ${
            scrolled
              ? "border border-[#8B6914] px-5 py-2 text-[#8B6914] hover:bg-[#8B6914] hover:text-white"
              : "border border-white/30 px-5 py-2 text-white/90 hover:border-white hover:text-white"
          }`}
        >
          Agendar avaliação
        </a>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   3. SOBRE
   ═══════════════════════════════════════════════════════════════════════ */
function Sobre() {
  return (
    <section id="sobre" className="bg-[#F3EDE4] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text — left */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            variants={{ show: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6914]"
            >
              Sobre a profissional
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-cormorant text-3xl font-bold italic leading-tight text-[#1C1410] md:text-4xl lg:text-[44px]"
            >
              Olá, sou a Dra. Lúcia Andrade.
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-[15px] leading-relaxed text-[#7A6A58]">
              Há mais de 7 anos, ajudo mulheres a se reconectarem com sua beleza
              de forma natural e segura. Minha abordagem é baseada em técnicas
              avançadas de harmonização, sempre respeitando a identidade e os
              traços únicos de cada paciente.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-4 text-[15px] leading-relaxed text-[#7A6A58]">
              Acredito que estética de verdade não transforma — ela revela. Cada
              procedimento é planejado com cuidado, precisão e o carinho que
              você merece.
            </motion.p>

            {/* Checklist */}
            <motion.ul variants={fadeUp} className="mt-8 space-y-3">
              {CHECKLIST.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#1C1410]">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="mt-0.5 shrink-0"
                  >
                    <circle cx="9" cy="9" r="9" fill="#C9A84C" opacity="0.15" />
                    <path
                      d="M5.5 9.5l2 2 5-5"
                      stroke="#8B6914"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Photo — right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative flex items-center justify-center"
          >
            {/* Decorative gold line */}
            <div className="absolute -left-4 top-8 bottom-8 w-px bg-[#C9A84C]/40 hidden lg:block" />

            <div className="relative w-full max-w-md">
              <img
                src="/images/Demo 2 — Íris Estética (hero principal) 02.jpg"
                alt="Dra. Lúcia Andrade — Especialista em Estética Avançada"
                className="aspect-[3/4] w-full object-cover"
              />

              {/* Badge */}
              <div className="absolute -bottom-4 left-4 z-10">
                <GlassBadge variant="dark">
                  <span className="flex items-center gap-2 text-white/90">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1l1.5 3 3.5.5-2.5 2.5.5 3.5L6 9 3 10.5l.5-3.5L1 4.5 4.5 4 6 1Z"
                        fill="#C9A84C"
                      />
                    </svg>
                    CRBM-AM 00000
                  </span>
                </GlassBadge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   4. TRATAMENTOS
   ═══════════════════════════════════════════════════════════════════════ */
function Tratamentos() {
  return (
    <section id="tratamentos" className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          custom={0}
          variants={fade}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6914]">
            Tratamentos
          </p>
          <h2 className="mt-3 font-cormorant text-3xl font-bold text-[#1C1410] md:text-4xl lg:text-[44px]">
            Cuidados pensados para você
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <motion.div
              key={t.title}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              variants={fade}
              className="group relative border border-[#E8D5A3]/40 bg-white p-8 transition-all duration-300 hover:-translate-y-[3px] hover:border-t-2 hover:border-t-[#C9A84C] hover:shadow-lg"
            >
              {t.badge && (
                <span className="absolute right-4 top-4 bg-[#8B6914]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#8B6914]">
                  {t.badge}
                </span>
              )}
              <div className="mb-5">{t.icon}</div>
              <h3 className="text-lg font-bold text-[#1C1410]">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7A6A58]">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   5. ANTES E DEPOIS
   ═══════════════════════════════════════════════════════════════════════ */
function AntesDepois() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      handleMove(e.clientX);
    },
    [handleMove]
  );

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const STATS = [
    { value: "500+", label: "Procedimentos" },
    { value: "98%", label: "Satisfação" },
    { value: "5\u2B50", label: "Avaliação" },
  ];

  return (
    <section id="resultados" className="bg-[#2C1810] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          custom={0}
          variants={fade}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D5A3]">
            Resultados reais
          </p>
          <h2 className="mt-3 font-cormorant text-3xl font-bold text-white md:text-4xl lg:text-[44px]">
            Antes e Depois
          </h2>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
          >
            {/* DEPOIS — full background */}
            <div className="absolute inset-0">
              <Image
                src="/images/depois-preenchimento.jpg"
                alt="Depois do preenchimento"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>

            {/* ANTES — clipped */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/images/antes-preenchimento.jpg"
                alt="Antes do preenchimento"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
            </div>

            {/* Labels */}
            <div className="absolute left-4 top-4 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              Antes
            </div>
            <div className="absolute right-4 top-4 bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              Depois
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 z-10 w-px bg-white/70"
              style={{ left: `${position}%` }}
            />

            {/* Handle */}
            <div
              className="absolute top-1/2 z-20 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#C9A84C] bg-white shadow-lg"
              style={{ left: `${position}%` }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3l-3 5 3 5" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 3l3 5-3 5" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              variants={fade}
              className="bg-white/5 px-4 py-6 text-center backdrop-blur-sm border border-white/10"
            >
              <p className="font-cormorant text-2xl font-bold text-[#E8D5A3] md:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-white/50">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   6. DEPOIMENTOS
   ═══════════════════════════════════════════════════════════════════════ */
function Depoimentos() {
  return (
    <section className="bg-[#FAF7F2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          custom={0}
          variants={fade}
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6914]">
            Depoimentos
          </p>
          <h2 className="mt-3 font-cormorant text-3xl font-bold text-[#1C1410] md:text-4xl lg:text-[44px]">
            O que nossas clientes dizem
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="relative mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              custom={i}
              variants={fade}
              className="border border-[#E8D5A3]/30 bg-white/70 p-8 backdrop-blur-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#C9A84C">
                    <path d="M8 1l2.2 4.5L15 6.3l-3.5 3.4.8 4.8L8 12.2 3.7 14.5l.8-4.8L1 6.3l4.8-.8L8 1Z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[#7A6A58]">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#E8D5A3]/30 pt-4">
                <p className="text-sm font-bold text-[#1C1410]">{t.name}</p>
                <p className="text-xs text-[#7A6A58]">{t.age}</p>
              </div>
            </motion.div>
          ))}

          {/* Floating notification — Instagram */}
          <div className="absolute -right-2 -top-6 z-10 hidden lg:block">
            <GlassBadge variant="light" float="slow" className="border-[#E8D5A3]/30 bg-white/80 text-[#1C1410]">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#C9A84C" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" stroke="#C9A84C" strokeWidth="1.5" />
                  <circle cx="18" cy="6" r="1.5" fill="#C9A84C" />
                </svg>
                <span className="text-[#1C1410]">Nova avaliação 5 estrelas</span>
                <span className="text-[#7A6A58]">· agora</span>
              </span>
            </GlassBadge>
          </div>

          {/* Floating notification — WhatsApp */}
          <div className="absolute -bottom-6 -left-2 z-10 hidden lg:block">
            <GlassBadge variant="light" float="fast" className="border-[#E8D5A3]/30 bg-white/80 text-[#1C1410]">
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-[#1C1410]">Obrigada, amei!</span>
                <span className="text-[#7A6A58]">· há 12m</span>
              </span>
            </GlassBadge>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   7. CTA FINAL + FOOTER
   ═══════════════════════════════════════════════════════════════════════ */
function CTAFooter() {
  return (
    <section id="contato" className="noise-bg relative bg-[#2C1810] py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={{ show: { transition: { staggerChildren: 0.12 } }, hidden: {} }}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D5A3]/60"
          >
            Agende sua avaliação
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 font-cormorant text-3xl font-bold leading-tight text-white md:text-4xl lg:text-[48px]"
          >
            Sua transformação começa{" "}
            <span className="italic text-[#E8D5A3]">com uma conversa.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-[15px] text-white/50">
            Atendimento exclusivo, com hora marcada. Sem espera, sem pressa.
            Venha conhecer a Íris e descubra o que podemos fazer por você.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#8B6914] px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-[#A07A1A]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quero agendar minha avaliação
            </a>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-20 space-y-2 border-t border-white/10 pt-10">
          <p className="font-cormorant text-lg font-bold text-white/60">
            <span className="italic text-[#C9A84C]/60">Íris</span> Estética Avançada
          </p>
          <p className="text-xs text-white/30">
            Rua Recife, 3000 — Adrianópolis, Manaus - AM
          </p>
          <p className="text-xs text-white/30">
            Seg a Sex: 08h — 18h · Sáb: 08h — 12h
          </p>
          <p className="text-xs text-white/30">(92) 9 8207-8515</p>
          <p className="mt-6 text-[10px] text-white/20">
            CNPJ 00.000.000/0002-00 · CRBM-AM 00000
          </p>
          <p className="text-[10px] text-white/20">
            © 2025 Íris Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   EXPORT
   ═══════════════════════════════════════════════════════════════════════ */
export default function EsteticaDemo() {
  return (
    <div className="font-sans bg-[#FAF7F2]">
      <BannerDemo />
      <Nav />
      <Hero />
      <Sobre />
      <Tratamentos />
      <AntesDepois />
      <Depoimentos />
      <CTAFooter />
    </div>
  );
}
