"use client";

import { motion } from "framer-motion";

export default function DiferencialSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F7F5F2] noise-bg">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
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
          className="font-playfair text-3xl md:text-[48px] md:leading-[1.15] text-[#0F0F0E] leading-tight"
        >
          Sua foto.
          <br />
          Sua cara.
          <br />
          No seu site.
          <br />
          Como se fosse uma{" "}
          <span className="text-[#C8501A]">campanha publicitária.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-[#6B6B67] text-base leading-relaxed space-y-6 max-w-xl mx-auto"
        >
          <p>
            A maioria das clínicas em Manaus tem site.
            <br />
            Poucas têm um site que para quem passa.
          </p>
          <p>
            Você manda uma foto sua. A gente transforma em um vídeo
            cinematográfico — sem estúdio, sem fotógrafo, sem dia de produção,
            sem cachê de modelo.
          </p>
          <p>
            Resultado: você vira protagonista do seu próprio site antes de
            qualquer concorrente fazer o mesmo.
          </p>
        </motion.div>

        {/* Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center"
        >
          {/* Antes */}
          <div className="relative border border-black/[0.08] overflow-hidden w-full sm:w-[280px]">
            <img
              src="/images/antes-foto01.jpg"
              alt="Foto comum de celular"
              className="w-full aspect-[4/3] object-cover saturate-[0.7]"
            />
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
              Sua foto do WhatsApp
            </div>
          </div>

          {/* Arrow */}
          <div className="text-[#C8501A] flex-shrink-0 rotate-90 sm:rotate-0">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Depois */}
          <div className="relative border-2 border-[#C8501A] overflow-hidden w-full sm:w-[280px] animate-pulse-border">
            <img
              src="/images/depois-foto-01.jpg"
              alt="Seu site ConnectLife"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute top-3 left-3 bg-[#C8501A]/90 backdrop-blur-sm px-3 py-1 text-[10px] text-white font-medium uppercase tracking-wider">
              Seu site ConnectLife
            </div>
          </div>
        </motion.div>

        <motion.a
          href="#demos"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="inline-block mt-10 text-sm text-[#C8501A] underline underline-offset-4 decoration-[#C8501A]/40 hover:decoration-[#C8501A] transition-colors"
        >
          Ver como fica na prática ↓
        </motion.a>
      </div>
    </section>
  );
}
