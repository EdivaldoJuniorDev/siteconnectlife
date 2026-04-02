"use client";

import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div className="glass h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 border border-black/[0.08] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="text-text-secondary"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="16"
                      height="16"
                      rx="0"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 7h16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle cx="5" cy="4.5" r="0.75" fill="currentColor" />
                    <circle cx="7.5" cy="4.5" r="0.75" fill="currentColor" />
                    <circle cx="10" cy="4.5" r="0.75" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary font-medium">
                  Em breve
                </p>
                <p className="text-xs text-text-secondary/60 mt-1">
                  Projeto em desenvolvimento
                </p>
              </div>
            </div>
          </motion.div>

          {/* Cards menores */}
          {[1, 2].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="glass h-full min-h-[190px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-3 border border-black/[0.08] flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-text-secondary"
                    >
                      <rect
                        x="1.5"
                        y="1.5"
                        width="13"
                        height="13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M1.5 5.5h13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-text-secondary font-medium">
                    Em breve
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
