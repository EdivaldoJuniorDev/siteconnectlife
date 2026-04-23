"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Pages where the hero starts light — navbar must show dark text from the first pixel
const LIGHT_HERO_ROUTES = ["/site", "/blog", "/contato", "/legal"];

const HOME_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Como funciona" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const SITE_LINKS = [
  { href: "#demos", label: "Demos" },
  { href: "#pacotes", label: "Pacotes" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

const DEFAULT_LINKS = [
  { href: "/", label: "Início" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isLightHero = LIGHT_HERO_ROUTES.some((r) => pathname.startsWith(r));
  const useDark = scrolled || isLightHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links =
    pathname === "/" ? HOME_LINKS
    : pathname.startsWith("/site") ? SITE_LINKS
    : DEFAULT_LINKS;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useDark
          ? "backdrop-blur-md bg-white/90 border-b border-black/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="ConnectLife"
            className={`h-8 w-auto transition-all duration-300 ${
              useDark ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                useDark
                  ? "text-text-secondary hover:text-text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
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
          WhatsApp
        </a>
      </div>
    </motion.nav>
  );
}
