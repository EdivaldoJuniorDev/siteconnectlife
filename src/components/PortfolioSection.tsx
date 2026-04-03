"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "OdontoVida",
    category: "Clínica Odontológica",
    before: "/images/Demo 1 — OdontoVida(hero section).jpg",
    color: "#1E3A8A",
    testimonial: "Fotos naturais viraram premium. Agendamentos cresceram 40%.",
  },
  {
    title: "Íris Estética",
    category: "Clínica de Estética",
    before: "/images/Demo 2 — Íris Estética (hero principal).png",
    color: "#B8943E",
    testimonial: "Não acreditava que era a mesma foto. Resultado impecável.",
  },
  {
    title: "Dra. Camila Rocha",
    category: "Psicologia Clínica",
    before: "/images/Demo 3 — Dra. Camila Rocha (hero principal) 02.jpg",
    color: "#5F7A61",
    testimonial: "Profissional demais. Site lotou em 2 meses.",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32 noise-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent font-medium tracking-wide uppercase mb-3">
            Resultado
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary">
            De foto simples a clínica cheia
          </h2>
        </motion.div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((caseItem, i) => (
            <motion.div
              key={caseItem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden mb-5">
                <img
                  src={caseItem.before}
                  alt={caseItem.title}
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Badge - depois */}
                <div
                  className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-white px-2.5 py-1"
                  style={{ background: caseItem.color }}
                >
                  Resultado
                </div>
              </div>

              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: caseItem.color }}
                >
                  {caseItem.category}
                </p>
                <h3 className="font-display text-lg text-text-primary mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-text-secondary italic leading-relaxed border-l-2 border-accent/30 pl-3">
                  &quot;{caseItem.testimonial}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA subtle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-5">
            Esses números podem ser seus também.
          </p>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
          >
            Vamos começar com sua foto
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="square"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
