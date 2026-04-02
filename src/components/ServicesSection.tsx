"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Site que agenda pacientes enquanto você dorme",
    description:
      "Não é só um site bonito. É sua recepção funcionando 24h — captando, informando e convertendo visitas em consultas agendadas.",
    price: "A partir de R$ 1.490 · entrega em 7 dias",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="16" /><path d="M3 10h18" /><path d="M9 4v6" /><path d="M15 4v6" /><circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Automação que elimina o trabalho repetitivo",
    description:
      "Confirmação de consulta, follow-up, lembretes — tudo rodando sozinho. Você cuida do paciente, a tecnologia cuida do resto.",
    price: "Sob consulta",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Sistema feito para o seu negócio",
    description:
      "Quando o seu processo é único e nenhuma ferramenta pronta resolve. Construímos do zero, sob medida.",
    price: "Sob consulta",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5Z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Produto digital próprio",
    description:
      "Tem uma ideia de software? Saímos do rascunho ao produto funcionando no mercado.",
    price: "Sob consulta",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 noise-bg">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-accent font-medium tracking-wide uppercase mb-3">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-text-primary">
            O que construímos para você
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass p-8 h-full transition-all duration-300 group-hover:-translate-y-1 border-t-2 border-t-transparent group-hover:border-t-accent">
                <div className="w-10 h-10 flex items-center justify-center text-accent/70 mb-5">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <p className="text-sm font-medium text-accent">
                  {service.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
