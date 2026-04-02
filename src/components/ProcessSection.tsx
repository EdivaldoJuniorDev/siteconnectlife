"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Você explica, a gente escuta",
    description: "Uma conversa. Sem formulário de 40 campos.",
  },
  {
    number: "02",
    title: "Mostramos antes de construir",
    description:
      "Você aprova o visual antes de escrevermos uma linha de código.",
  },
  {
    number: "03",
    title: "Construído para durar",
    description:
      "Stack moderna, rápido no celular, aparece no Google desde o primeiro dia.",
  },
  {
    number: "04",
    title: "No ar. De verdade.",
    description:
      "Domínio, hospedagem, SSL — tudo incluso. Você não precisa entender de tecnologia para ter um site profissional.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="processo"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-surface"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-sm text-accent font-medium tracking-wide uppercase mb-3">
            Processo
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Como funciona
          </h2>
        </motion.div>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          {/* Progress line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-black/[0.08]">
            <motion.div
              className="h-full bg-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-[104px] h-[104px] mb-6">
                  <span className="text-6xl font-display text-transparent [-webkit-text-stroke:1.5px_rgba(15,15,14,0.12)]">
                    {step.number}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                  />
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 relative">
                <span className="text-5xl font-display text-transparent [-webkit-text-stroke:1.5px_rgba(15,15,14,0.12)]">
                  {step.number}
                </span>
                {i < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-10 bg-black/[0.08]" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-display text-xl text-text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
