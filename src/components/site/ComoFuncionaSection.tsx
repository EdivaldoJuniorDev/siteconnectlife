"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20cl%C3%ADnica";

const steps = [
  {
    number: "01",
    title: "Você manda sua foto pelo WhatsApp",
    description:
      "Pode ser a melhor foto que você tem guardada. A gente cuida do resto.",
  },
  {
    number: "02",
    title: "A gente produz seu vídeo",
    description:
      "Transformamos sua foto em um vídeo cinematográfico — sem você sair do lugar.",
  },
  {
    number: "03",
    title: "Você aprova o layout",
    description:
      "Te mostramos como vai ficar antes de publicar. Você pede ajustes à vontade.",
  },
  {
    number: "04",
    title: "Seu site vai ao ar",
    description:
      "Com domínio, e-mail e tudo configurado. Pronto para receber pacientes.",
  },
];

export default function ComoFuncionaSection() {
  return (
    <section className="relative py-24 md:py-32 bg-white noise-bg">
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block text-[#C8501A] text-xs font-medium uppercase tracking-wider border border-[#C8501A]/30 bg-[#C8501A]/10 px-3 py-1.5 mb-6">
            É mais simples do que parece
          </span>
          <h2 className="font-playfair text-3xl md:text-[40px] text-[#0F0F0E] leading-tight">
            Do WhatsApp ao seu site no ar
            <br className="hidden sm:block" />
            em menos de 7 dias.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px border-l border-dashed border-[#C8501A]/40" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-6"
              >
                <div className="relative flex-shrink-0">
                  <span className="font-playfair text-[48px] text-[#C8501A] leading-none [-webkit-text-stroke:1.5px_#C8501A] text-transparent">
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-medium text-[#0F0F0E] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B6B67] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0F0F0E] text-white px-8 py-4 text-sm font-medium hover:-translate-y-0.5 transition-all"
          >
            Começar agora →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
