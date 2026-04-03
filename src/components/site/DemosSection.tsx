"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20cl%C3%ADnica";

const demos = [
  {
    title: "OdontoVida",
    category: "Clínica Odontológica",
    badge: "Landing Page · R$ 2.500",
    image: "/images/Demo 1 — OdontoVida(hero section).jpg",
    href: "/demo/odonto",
    featured: false,
  },
  {
    title: "Íris Estética",
    category: "Clínica Estética Avançada",
    badge: "Landing Page · R$ 2.500",
    image: "/images/Demo 2 — Íris Estética (hero principal).png",
    href: "/demo/estetica",
    featured: true,
  },
  {
    title: "Dra. Camila Rocha",
    category: "Psicologia Clínica",
    badge: "Site Profissional · R$ 4.900",
    image: "/images/Demo 3 — Dra. Camila Rocha (hero principal) 02.jpg",
    href: "/demo/psicologia",
    featured: false,
  },
];

export default function DemosSection() {
  return (
    <section id="demos" className="relative py-24 md:py-32 bg-white noise-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#C8501A] text-xs font-medium uppercase tracking-wider border border-[#C8501A]/30 bg-[#C8501A]/10 px-3 py-1.5 mb-6">
            Veja o resultado
          </span>
          <h2 className="font-playfair text-3xl md:text-[40px] text-[#0F0F0E] leading-tight">
            É assim que sua clínica vai aparecer.
          </h2>
          <p className="mt-3 text-sm text-[#6B6B67]">
            Estes são exemplos reais do que entregamos.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <motion.a
              key={demo.title}
              href={demo.href}
              target="_blank"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`group block border bg-white overflow-hidden ${
                demo.featured
                  ? "border-2 border-[#C8501A]"
                  : "border-black/[0.08]"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-[#6B6B67]">
                  {demo.title} · {demo.category}
                </p>
                <span className="inline-block mt-2 text-[11px] font-medium text-[#A84215] border border-[#C8501A]/30 bg-[#F7F5F2] px-2 py-1">
                  {demo.badge}
                </span>
                <p className="mt-3 text-xs text-[#C8501A] group-hover:underline">
                  Ver site completo →
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <div className="md:hidden text-center mt-4">
          <p className="text-xs text-[#6B6B67]">← Deslize para ver mais →</p>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0F0F0E] text-white px-8 py-4 text-sm font-medium hover:-translate-y-0.5 transition-all"
          >
            Quero o meu assim
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
