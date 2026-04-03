"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  { value: "7 dias", label: "Entrega" },
  { value: "+30", label: "Clínicas" },
  { value: "100%", label: "Foco captação" },
  { value: "Garantido", label: "Resultado" },
];

/* ── Scroll indicator ── */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[11px] text-white/30 uppercase tracking-widest">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-5 h-8 border border-white/15 flex justify-center pt-1.5"
      >
        <div className="w-1 h-1.5 bg-accent/80" />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── Video Background ── */}
      <div className="absolute inset-0 bg-charcoal">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      </div>

      {/* ── Subtle grain texture ── */}
      <div className="absolute inset-0 noise-bg pointer-events-none opacity-30" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Headline - Pain point focused */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4.2rem] text-white leading-[1.1] tracking-tight"
          >
            Sua clínica está cheia de pacientes{" "}
            <br className="hidden sm:block" />
            — ou só de <span className="text-accent">seguidores?</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
          >
            Todo mês tem paciente novo pesquisando no Google pela sua especialidade
            em Manaus. A pergunta é:{" "}
            <strong className="text-white font-medium">
              ele está encontrando você ou o concorrente?
            </strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20ser%20encontrado%20primeiro"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-medium hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5"
            >
              Quero ser encontrado primeiro
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
              </svg>
            </a>
            <a
              href="#processo"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Ver como funciona
            </a>
          </motion.div>

          {/* Pillars / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-14 flex flex-wrap gap-12 text-sm"
          >
            {pillars.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.75 + i * 0.08 }}
              >
                <div className="text-white/90 font-medium">{item.value}</div>
                <div className="text-white/40 uppercase tracking-wider text-[10px] mt-1">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
