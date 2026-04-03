"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "OdontoVida",
    category: "Clínica Odontológica",
    href: "/demo/odonto",
    image: "/images/Demo 1 — OdontoVida(hero section).jpg",
    color: "#1E3A8A",
  },
  {
    title: "Íris Estética",
    category: "Clínica de Estética",
    href: "/demo/estetica",
    image: "/images/Demo 2 — Íris Estética (hero principal).png",
    color: "#B8943E",
  },
  {
    title: "Dra. Camila Rocha",
    category: "Psicologia Clínica",
    href: "/demo/psicologia",
    image: "/images/Demo 3 — Dra. Camila Rocha (hero principal) 02.jpg",
    color: "#5F7A61",
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
            Portfólio
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary">
            Nossos projetos
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card grande */}
          <motion.a
            href={projects[0].href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 group block relative overflow-hidden"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full min-h-[300px] md:min-h-[460px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span
                className="inline-block text-[10px] font-semibold uppercase tracking-wider text-white/80 px-2.5 py-1 mb-3"
                style={{ background: projects[0].color }}
              >
                {projects[0].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {projects[0].title}
              </h3>
              <span className="inline-flex items-center gap-1 mt-2 text-xs text-white/60 group-hover:text-white/90 transition-colors">
                Ver projeto
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </span>
            </div>
          </motion.a>

          {/* Cards menores */}
          {projects.slice(1).map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group block relative overflow-hidden"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <span
                  className="inline-block text-[10px] font-semibold uppercase tracking-wider text-white/80 px-2.5 py-1 mb-2"
                  style={{ background: p.color }}
                >
                  {p.category}
                </span>
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <span className="inline-flex items-center gap-1 mt-1 text-xs text-white/60 group-hover:text-white/90 transition-colors">
                  Ver projeto
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
