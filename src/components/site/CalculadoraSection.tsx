"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const WA_LINK =
  "https://wa.me/5592982078515?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20cl%C3%ADnica";

export default function CalculadoraSection() {
  const [procedimentos, setProcedimentos] = useState(15);
  const [ticket, setTicket] = useState(500);

  const faturamento = procedimentos * ticket;
  const custoLp = 2500;
  const pacientesParaPagar = Math.ceil(custoLp / ticket);

  return (
    <section className="relative py-24 md:py-32 bg-[#0F0F0E] overflow-hidden">
      <div className="absolute inset-0 dots-grid-light pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl text-white leading-tight">
            Será que vale o investimento?
          </h2>
          <p className="mt-3 text-base text-white/60">
            Vamos fazer a conta juntos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-10"
        >
          {/* Slider 1 */}
          <div>
            <label className="block text-sm text-white/60 mb-4">
              Quantos procedimentos você faz por mês?
            </label>
            <div className="text-4xl font-bold text-white text-center mb-4">
              {procedimentos}
            </div>
            <input
              type="range"
              min={5}
              max={50}
              step={5}
              value={procedimentos}
              onChange={(e) => setProcedimentos(Number(e.target.value))}
              className="w-full h-1 bg-white/20 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#C8501A] [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-white/30 mt-2">
              <span>5</span>
              <span>50</span>
            </div>
          </div>

          {/* Slider 2 */}
          <div>
            <label className="block text-sm text-white/60 mb-4">
              Qual o ticket médio por procedimento?
            </label>
            <div className="text-4xl font-bold text-white text-center mb-4">
              R$ {ticket.toLocaleString("pt-BR")}
            </div>
            <input
              type="range"
              min={200}
              max={3000}
              step={100}
              value={ticket}
              onChange={(e) => setTicket(Number(e.target.value))}
              className="w-full h-1 bg-white/20 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#C8501A] [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-white/30 mt-2">
              <span>R$ 200</span>
              <span>R$ 3.000</span>
            </div>
          </div>

          {/* Result */}
          <div className="border-t border-white/10 pt-8 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Faturamento mensal estimado</span>
              <span className="text-white font-medium">
                R$ {faturamento.toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Custo do site Landing Page</span>
              <span className="text-white font-medium">
                R$ 2.500{" "}
                <span className="text-white/30 text-xs">(uma única vez)</span>
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white/50">Pacientes para pagar o site</span>
              <span className="text-white font-medium">
                {pacientesParaPagar} paciente{pacientesParaPagar > 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {/* Highlight */}
          <div className="text-center pt-4">
            <p className="font-playfair text-2xl md:text-[28px] text-[#C8501A] leading-snug">
              Seu site se paga com {pacientesParaPagar} paciente
              {pacientesParaPagar > 1 ? "s" : ""} novo
              {pacientesParaPagar > 1 ? "s" : ""}.
            </p>
            <p className="mt-4 text-sm text-white/40">
              O site trabalha por você 24 horas por dia, 7 dias por semana, sem
              folga e sem salário.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C8501A] text-white px-8 py-4 text-sm font-medium hover:bg-[#A84215] transition-colors"
            >
              Quero meu site agora →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
