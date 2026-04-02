"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 border-b border-black/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="ConnectLife"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Serviços
          </a>
          <a
            href="#processo"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Como funciona
          </a>
          <a
            href="#portfolio"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Portfólio
          </a>
          <a
            href="https://wa.me/5592982078515"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-accent text-white px-4 py-2 hover:bg-accent-dark transition-colors"
          >
            Falar conosco
          </a>
        </div>

        <a
          href="https://wa.me/5592982078515"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-sm bg-accent text-white px-4 py-2 hover:bg-accent-dark transition-colors"
        >
          Contato
        </a>
      </div>
    </motion.nav>
  );
}
