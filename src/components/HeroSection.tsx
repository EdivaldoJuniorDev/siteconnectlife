"use client";

import { motion, useMotionValue, useTransform, useSpring, useAnimationFrame } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const socialTags = [
  "Entrega em 7 dias",
  "+30 clínicas atendidas",
  "Foco em captação",
  "Resultado garantido",
];

/* ── Animated dots grid that reacts to mouse ── */
function DotsGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const spacing = 28;
    const baseRadius = 1;
    const maxRadius = 3.5;
    const influenceRadius = 120;

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (let x = spacing; x < w; x += spacing) {
        for (let y = spacing; y < h; y += spacing) {
          const dx = x - mouse.current.x;
          const dy = y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / influenceRadius);
          const r = baseRadius + (maxRadius - baseRadius) * t;
          const alpha = 0.06 + 0.18 * t;

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 80, 26, ${alpha})`;
          ctx.fill();
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}

/* ── Typing cursor blink on the headline ── */
function TypedHighlight({ children }: { children: string }) {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setShow((s) => !s), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative text-accent">
      {children}
      <span
        className={`inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle translate-y-[1px] transition-opacity duration-100 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

/* ── Floating browser mockup ── */
function FloatingMockup() {
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const rotate = useTransform(smoothY, [-10, 10], [-1.5, 1.5]);

  useAnimationFrame((t) => {
    y.set(Math.sin(t / 1500) * 8);
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 80, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ y: smoothY, rotateZ: rotate }}
      className="relative perspective-[1200px]"
    >
      <div className="glass-strong p-0 w-[340px] md:w-[400px] shadow-2xl shadow-black/[0.06]">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-black/[0.06] bg-white/40">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex-1 h-6 bg-black/[0.04] px-3 flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 10 10" className="text-black/20">
              <circle cx="5" cy="5" r="4" stroke="currentColor" fill="none" strokeWidth="1" />
            </svg>
            <span className="text-[11px] text-text-secondary/70">suaclinica.com.br</span>
          </div>
        </div>
        {/* Mockup content */}
        <div className="p-5 space-y-3">
          <div className="h-3 w-3/4 bg-black/[0.07]" />
          <div className="h-3 w-1/2 bg-black/[0.04]" />
          <div className="mt-2 h-24 w-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
            <span className="text-xs text-accent/50 font-medium">Imagem da clínica</span>
          </div>
          <div className="flex gap-2 pt-1">
            <div className="h-8 flex-1 bg-accent/80 flex items-center justify-center">
              <span className="text-[10px] text-white font-medium">Agendar consulta</span>
            </div>
            <div className="h-8 w-24 bg-black/[0.04] flex items-center justify-center">
              <span className="text-[10px] text-text-secondary">Saiba mais</span>
            </div>
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="h-2 w-full bg-black/[0.04]" />
            <div className="h-2 w-5/6 bg-black/[0.03]" />
            <div className="h-2 w-3/4 bg-black/[0.03]" />
          </div>
        </div>
        {/* Notification badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
          className="absolute -bottom-4 -left-4 bg-white px-4 py-2.5 border border-black/[0.06] shadow-lg shadow-black/[0.04]"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-text-primary">+3 agendamentos hoje</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Scroll indicator ── */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[11px] text-text-secondary/50 uppercase tracking-widest">Scroll</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="w-5 h-8 border border-black/[0.12] flex justify-center pt-1.5"
      >
        <div className="w-1 h-1.5 bg-accent/60" />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise-bg pt-16">
      <DotsGrid />

      {/* Diagonal lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[20%] w-px h-[140%] bg-black/[0.04] -rotate-[25deg] origin-top" />
        <div className="absolute top-0 right-[45%] w-px h-[140%] bg-black/[0.03] -rotate-[25deg] origin-top" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] text-text-primary leading-[1.1] tracking-tight">
                Sua clínica está cheia de pacientes{" "}
                <br className="hidden sm:block" />
                — ou só de{" "}
                <TypedHighlight>seguidores?</TypedHighlight>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Todo mês tem paciente novo pesquisando no Google pela sua especialidade em Manaus.
              A pergunta é: ele está encontrando{" "}
              <strong className="text-text-primary font-medium">você</strong> ou o concorrente?
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/5592982078515?text=Ol%C3%A1%2C%20quero%20um%20site%20para%20minha%20cl%C3%ADnica"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-all duration-200 hover:-translate-y-0.5"
              >
                Quero ser encontrado primeiro
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
              <a
                href="#processo"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-black/[0.12] text-text-primary text-sm font-medium hover:bg-black/[0.03] transition-colors"
              >
                Ver como funciona
              </a>
            </motion.div>

            {/* Tech tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              {socialTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                  className="glass px-3 py-1.5 text-xs text-text-secondary font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Mockup */}
          <div className="flex-shrink-0 hidden lg:block">
            <FloatingMockup />
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
