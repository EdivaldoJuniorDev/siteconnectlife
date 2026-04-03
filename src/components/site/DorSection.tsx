"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({
  target,
  suffix = "",
}: {
  target: number;
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
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    number: 87,
    suffix: "%",
    text: "das buscas por serviços de saúde começam em mecanismos de busca",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    number: 8,
    suffix: " seg",
    text: "é o tempo que você tem para convencer quem chega no seu site",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5C7 4 7 7 7 7M18 9h1.5a2.5 2.5 0 0 0 0-5C17 4 17 7 17 7" />
        <path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
    number: 75,
    suffix: "%",
    text: "dos cliques vão para os 3 primeiros resultados do Google",
  },
];

export default function DorSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F0EDE8]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C8501A] text-xs font-medium uppercase tracking-wider border border-[#C8501A]/30 bg-[#C8501A]/10 px-3 py-1.5 mb-6">
            A realidade do mercado em Manaus
          </span>
          <h2 className="font-playfair text-3xl md:text-[40px] text-[#0F0F0E] leading-tight">
            Enquanto você posta no Instagram,
            <br className="hidden sm:block" />
            sua concorrente aparece no Google.
          </h2>
          <div className="mt-6 text-[#6B6B67] text-base leading-relaxed max-w-[560px] mx-auto space-y-4">
            <p>
              Instagram depende do algoritmo.
              <br />
              Google depende do seu site.
            </p>
            <p>
              Quando uma paciente pesquisa &quot;clínica de estética em
              Manaus&quot; e não te encontra — ela não vai te procurar. Ela
              agenda com quem apareceu primeiro.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="text-[#C8501A] flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="font-playfair text-[48px] text-[#0F0F0E] leading-none">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-[#6B6B67] leading-relaxed">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
