"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20cl%C3%ADnica";

/* ── Ícones de economia ── */
const economies = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
    label: "Fotógrafo",
    value: "R$ 800–2.000",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "Maquiagem",
    value: "R$ 200–500",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Dia de produção",
    value: "4–8 horas",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Estúdio",
    value: "R$ 500–1.500",
  },
];

/* ── Mockup de browser com hero section real ── */
function BrowserMockup() {
  return (
    <div className="border border-black/[0.08] bg-white shadow-lg">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/[0.06] bg-gray-50">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex-1 h-5 bg-black/[0.04] px-3 flex items-center">
          <span className="text-[10px] text-[#6B6B67]">suaclinica.com.br</span>
        </div>
      </div>

      {/* Hero section inside */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/medica-consultorio-01.webm" type="video/webm" />
          <source src="/videos/medica-consultorio-01.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay like real hero */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-center px-5 md:px-8">
          <p className="font-playfair text-sm md:text-lg text-white leading-snug max-w-[70%]">
            Seu sorriso perfeito começa com uma conversa.
          </p>
          <p className="text-[10px] md:text-xs text-white/60 mt-1.5">
            Clínica OdontoVida — Manaus, AM
          </p>
          <div className="mt-3">
            <span className="inline-block bg-[#C8501A] text-white text-[8px] md:text-[10px] px-2.5 py-1 font-medium">
              Agendar avaliação →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Before/After Slider com mockup ── */
function BeforeAfterHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    setPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
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
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/9] select-none cursor-ew-resize overflow-hidden border border-black/[0.08]"
      style={{ touchAction: "none" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* DEPOIS: vídeo hero com overlay e copy (full background) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/medica-consultorio-01.webm" type="video/webm" />
          <source src="/videos/medica-consultorio-01.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
          <p className="font-playfair text-lg md:text-2xl lg:text-3xl text-white leading-snug max-w-[60%]">
            Seu sorriso perfeito começa com uma conversa.
          </p>
          <p className="text-xs md:text-sm text-white/60 mt-2">
            Clínica OdontoVida — Manaus, AM
          </p>
          <div className="mt-3">
            <span className="inline-block bg-[#C8501A] text-white text-[10px] md:text-xs px-3 py-1.5 font-medium">
              Agendar avaliação →
            </span>
          </div>
        </div>
      </div>

      {/* ANTES: foto estática (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src="/images/antes-foto01.jpg"
          alt="Foto comum de celular"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#C8501A]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#0F0F0E]">
            <path d="M4 8L1 5M1 5L4 2M1 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8L15 5M15 5L12 2M15 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 z-20 bg-black/70 backdrop-blur-sm px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
        Antes
      </div>
      <div className="absolute top-3 right-3 z-20 bg-[#C8501A] px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
        Depois
      </div>
    </div>
  );
}

/* ── Seção principal ── */
export default function DiferencialSection() {
  return (
    <section className="relative overflow-hidden">
      {/* ═══ BLOCO A — ECONOMIA ═══ */}
      <div className="py-20 md:py-28 bg-[#F7F5F2] noise-bg">
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-[#C8501A] text-xs font-medium uppercase tracking-wider border border-[#C8501A]/30 bg-[#C8501A]/10 px-3 py-1.5 mb-6"
          >
            O que nenhuma outra agência de Manaus oferece
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-3xl md:text-[44px] md:leading-[1.15] text-[#0F0F0E]"
          >
            Sua foto. Sua cara. No seu site.
            <br />
            <span className="text-[#C8501A]">Sem gastar um real em produção.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-base text-[#6B6B67] max-w-[520px] mx-auto"
          >
            Você manda a melhor foto que tem. A gente faz o resto.
          </motion.p>

          {/* Grid de economia */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {economies.map((item) => (
              <div
                key={item.label}
                className="bg-white border border-black/[0.08] p-5 text-center"
              >
                <div className="text-[#C8501A] flex justify-center mb-3">
                  {item.icon}
                </div>
                <div className="relative inline-block mb-1">
                  <span className="font-playfair text-lg text-[#0F0F0E]">
                    {item.value}
                  </span>
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[#C8501A]/60" />
                </div>
                <p className="text-xs text-[#6B6B67] mt-1">{item.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-sm text-[#6B6B67] italic"
          >
            Economia média de R$ 1.500 a R$ 4.000 em produção audiovisual.
          </motion.p>
        </div>
      </div>

      {/* ═══ BLOCO B — PROCESSO ═══ */}
      <div className="py-20 md:py-28 bg-[#F0EDE8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-6">
            {/* Coluna esquerda — Foto + Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full"
            >
              {/* Foto antes */}
              <div className="relative mb-8">
                <img
                  src="/images/antes-foto01.jpg"
                  alt="Foto comum de celular"
                  className="w-full aspect-[4/3] object-cover border border-black/[0.08]"
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
                  Sua foto do WhatsApp
                </div>
              </div>

              {/* 3 Steps */}
              <div className="relative pl-8">
                <div className="absolute left-[9px] top-1 bottom-1 w-px border-l border-dashed border-[#C8501A]/40" />

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                      ),
                      title: "Você manda a foto pelo WhatsApp",
                      sub: "Pode ser a melhor foto que você tem guardada",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ),
                      title: "A IA produz seu vídeo",
                      sub: "Sem estúdio, sem fotógrafo, sem maquiagem",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ),
                      title: "Você aprova e o site vai ao ar",
                      sub: "Em até 7 dias úteis",
                    },
                  ].map((step, i) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                      className="flex gap-3"
                    >
                      <div className="flex-shrink-0 w-5 h-5 text-[#C8501A] -ml-8 bg-[#F0EDE8] relative z-10">
                        {step.icon}
                      </div>
                      <div>
                        <p className="text-[13px] text-[#0F0F0E] font-semibold">
                          {step.title}
                        </p>
                        <p className="text-xs text-[#6B6B67] mt-0.5">
                          {step.sub}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Seta central */}
            <div className="hidden lg:flex items-center justify-center self-center text-[#C8501A]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="lg:hidden flex justify-center w-full text-[#C8501A]">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Coluna direita — Mockup do site real */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative">
                <BrowserMockup />
                <div className="absolute -top-3 right-4 bg-[#C8501A] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1 z-10">
                  Seu site ConnectLife
                </div>
              </div>
              <p className="text-[13px] text-[#6B6B67] text-center mt-4">
                É assim que sua clínica vai aparecer para cada paciente que
                pesquisar no Google.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══ BLOCO C — ANTES / DEPOIS ═══ */}
      <div className="py-20 md:py-28 bg-[#F7F5F2] noise-bg">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-playfair text-[#0F0F0E] text-center mb-8"
          >
            Veja a diferença
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <BeforeAfterHero />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-center mt-10"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F0F0E] text-white px-8 py-4 text-sm font-medium hover:-translate-y-0.5 transition-all"
            >
              Quero o meu assim →
            </a>
            <p className="mt-3 text-xs text-[#6B6B67]">
              Você manda a foto. A gente entrega o site.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
