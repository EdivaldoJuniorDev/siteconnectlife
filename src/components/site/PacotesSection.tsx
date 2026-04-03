"use client";

import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20cl%C3%ADnica";

const Check = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="flex-shrink-0 mt-0.5"
  >
    <path
      d="M3 8.5L6.5 12L13 4"
      stroke="#C8501A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PacotesSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F7F5F2] noise-bg">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#C8501A] text-xs font-medium uppercase tracking-wider border border-[#C8501A]/30 bg-[#C8501A]/10 px-3 py-1.5 mb-6">
            O que você recebe
          </span>
          <h2 className="font-playfair text-3xl md:text-[40px] text-[#0F0F0E] leading-tight">
            Tudo que você precisa.
            <br />
            Nada que você não precisa.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Landing Page */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-black/[0.08] p-8"
          >
            <div className="font-playfair text-4xl text-[#0F0F0E]">
              R$ 2.500
            </div>
            <p className="text-xs text-[#6B6B67] mt-1">
              Negociável até R$ 1.990
            </p>
            <p className="text-xs text-[#C8501A] font-semibold mt-2">
              Entrega em até 5 dias úteis
            </p>

            <div className="w-full h-px bg-black/[0.08] my-6" />

            <ul className="space-y-3">
              {[
                "Seu vídeo cinematográfico no hero do site",
                "Domínio .com.br incluso",
                "Hospedagem por 1 ano inclusa",
                "E-mail profissional incluso",
                "Botão WhatsApp com mensagem pré-pronta",
                "Captura de e-mail de visitantes",
                "3 e-mails automáticos para quem entrar em contato",
                "Aparece no Google desde o primeiro dia",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-[#6B6B67]">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-[#6B6B67] italic">
              Mais vendido para quem está começando.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 border border-[#0F0F0E] text-[#0F0F0E] px-6 py-3.5 text-sm font-medium hover:bg-[#0F0F0E] hover:text-white transition-colors"
            >
              Quero a Landing Page →
            </a>
          </motion.div>

          {/* Site Profissional */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative bg-[#FFF8F5] border-2 border-[#C8501A] p-8"
          >
            <span className="absolute -top-3 left-6 bg-[#C8501A] text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1">
              Mais completo
            </span>

            <div className="font-playfair text-4xl text-[#C8501A]">
              R$ 4.900
            </div>
            <p className="text-xs text-[#6B6B67] mt-1">
              Orçamento por escopo acima de R$ 8.000
            </p>
            <p className="text-xs text-[#C8501A] font-semibold mt-2">
              Entrega em até 7 dias úteis
            </p>

            <div className="w-full h-px bg-[#C8501A]/20 my-6" />

            <ul className="space-y-3">
              {[
                "Tudo da Landing Page, mais:",
                "Página Sobre com sua história",
                "Página de Serviços detalhada",
                "Página de Contato com mapa",
                "7 e-mails automáticos de relacionamento",
                "SEO local completo + Google Search Console",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-[#6B6B67]">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-[#6B6B67] italic">
              Ideal para clínicas já estabelecidas.
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#0F0F0E] text-white px-6 py-3.5 text-sm font-medium hover:-translate-y-0.5 transition-all"
            >
              Quero o Site Profissional →
            </a>
          </motion.div>
        </div>

        {/* Institucional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-[#6B6B67]">
            Site Institucional a partir de R$ 8.000 — escopo personalizado.{" "}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8501A] underline underline-offset-4"
            >
              Falar sobre projeto maior →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
