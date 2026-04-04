"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20cl%C3%ADnica";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-[#0F0F0E]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/medica-consultorio-poster.jpg"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: "center center" }}
        >
          <source src="/videos/medica-consultorio-01.webm" type="video/webm" />
          <source src="/videos/medica-consultorio-01.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      <div className="absolute inset-0 noise-bg pointer-events-none opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#C8501A] text-xs font-medium uppercase tracking-wider border border-[#C8501A]/30 bg-[#C8501A]/10 px-3 py-1.5 mb-6">
              Para clínicas e consultórios em Manaus
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl lg:text-[56px] text-white leading-[1.1] tracking-tight"
          >
            Sua clínica está cheia de pacientes
            <br className="hidden sm:block" />
            — ou só de seguidores?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-white/60 max-w-[480px] leading-relaxed"
          >
            Todo mês tem paciente novo pesquisando no Google pela sua
            especialidade em Manaus. A pergunta é: ele está encontrando{" "}
            <strong className="text-white font-medium">você</strong> ou o
            concorrente?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-[#C8501A] text-white px-8 py-4 text-sm font-medium hover:bg-[#DA6230] hover:-translate-y-0.5 transition-all"
            >
              Quero ser encontrada primeiro
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
            <p className="mt-3 text-xs text-white/40">
              Falar direto no WhatsApp · Resposta em minutos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
