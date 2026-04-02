"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const differentials = [
  {
    number: 7,
    suffix: " dias",
    label: 'Não 45, não "entraremos em contato"',
    title: "Entrega que você pode contar no calendário",
    description:
      "Da conversa ao site no ar em até 7 dias úteis. Sem enrolação, sem reunião toda semana.",
  },
  {
    number: 100,
    suffix: "%",
    label: "Feito para o Google encontrar",
    title: "SEO não é extra, é padrão",
    description:
      "Cada site já sai otimizado para aparecer nas buscas de Manaus. Não é promessa, é configuração técnica.",
  },
  {
    prefix: "R$ ",
    number: 0,
    suffix: "",
    label: "Sem surpresa no final",
    title: "Preço fechado, sem pegadinha",
    description:
      "Domínio, hospedagem e SSL inclusos no preço. O que combinamos é o que você paga.",
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent font-medium tracking-wide uppercase mb-3">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Por que ConnectLife
          </h2>
        </motion.div>

        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 — 7 dias */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7"
          >
            <div className="glass p-8 md:p-10 h-full">
              <div className="text-5xl md:text-6xl font-display text-accent mb-1">
                <AnimatedNumber target={7} suffix=" dias" />
              </div>
              <p className="text-xs text-text-secondary uppercase tracking-wide mb-5">
                {differentials[0].label}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3">
                {differentials[0].title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {differentials[0].description}
              </p>
            </div>
          </motion.div>

          {/* Card 2 — 100% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5"
          >
            <div className="glass p-8 md:p-10 h-full">
              <div className="text-5xl md:text-6xl font-display text-accent mb-1">
                <AnimatedNumber target={100} suffix="%" />
              </div>
              <p className="text-xs text-text-secondary uppercase tracking-wide mb-5">
                {differentials[1].label}
              </p>
              <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3">
                {differentials[1].title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {differentials[1].description}
              </p>
            </div>
          </motion.div>

          {/* Card 3 — R$ 0 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-12"
          >
            <div className="glass p-8 md:p-10 md:flex md:items-center md:gap-12">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="text-5xl md:text-6xl font-display text-accent">
                  R$ <AnimatedNumber target={0} />
                </div>
                <p className="text-xs text-text-secondary uppercase tracking-wide mt-1">
                  {differentials[2].label}
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-text-primary mb-3">
                  {differentials[2].title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {differentials[2].description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
