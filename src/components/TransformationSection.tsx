"use client";

import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

/* ── Before/After Slider ── */
function BeforeAfterSlider({
  before,
  after,
}: {
  before: string;
  after: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] select-none cursor-ew-resize overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* After image (full background) */}
      <img
        src={after}
        alt="Depois"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped with clipPath) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before}
          alt="Antes"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-text-primary"
          >
            <path d="M4 8L1 5M1 5L4 2M1 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8L15 5M15 5L12 2M15 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs text-white font-medium uppercase tracking-wider">
        Antes
      </div>
      <div className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm px-3 py-1.5 text-xs text-white font-medium uppercase tracking-wider">
        Depois
      </div>
    </div>
  );
}

/* ── Video Before/After Slider (foto estática vs vídeo animado) ── */
function VideoBeforeAfterSlider({
  staticImage,
  videoWebm,
  videoMp4,
}: {
  staticImage: string;
  videoWebm: string;
  videoMp4: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    []
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      updatePosition(e.clientX);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] select-none cursor-ew-resize overflow-hidden"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Right side: Video animado (full background) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>

      {/* Left side: Foto estática (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={staticImage}
          alt="Site estático"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-text-primary"
          >
            <path d="M4 8L1 5M1 5L4 2M1 5H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8L15 5M15 5L12 2M15 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs text-white font-medium uppercase tracking-wider">
        Site estático
      </div>
      <div className="absolute top-4 right-4 z-20 bg-accent/90 backdrop-blur-sm px-3 py-1.5 text-xs text-white font-medium uppercase tracking-wider">
        Site animado
      </div>
    </div>
  );
}

/* ── Main Section ── */
export default function TransformationSection() {
  return (
    <section className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 dots-grid-light pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <p className="text-sm text-accent font-medium tracking-wide uppercase mb-3">
            A transformação
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Você manda uma foto.
            <br className="hidden sm:block" />
            A gente faz o resto.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-white/40 max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Sem estúdio, sem fotógrafo, sem maquiadora.
          Só uma foto do celular e seu site fica assim.
        </motion.p>

        {/* Step 1: Before / After */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-4"
        >
          <BeforeAfterSlider
            before="/images/antes-foto01.jpg"
            after="/images/depois-foto-01.jpg"
          />
        </motion.div>

        {/* Step 2: Foto estática vs Vídeo animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VideoBeforeAfterSlider
            staticImage="/images/depois-foto-01.jpg"
            videoWebm="/videos/medica-hero01.webm"
            videoMp4="/videos/medica-hero01.mp4"
          />
        </motion.div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          Arraste pra comparar.
        </motion.p>
      </div>
    </section>
  );
}
