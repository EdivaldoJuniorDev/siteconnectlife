"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.webp"
              alt="ConnectLife"
              className="h-7 w-auto"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
            <a
              href="#servicos"
              className="hover:text-text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="hover:text-text-primary transition-colors"
            >
              Processo
            </a>
            <a
              href="#portfolio"
              className="hover:text-text-primary transition-colors"
            >
              Portfólio
            </a>
            <Link
              href="/contato"
              className="hover:text-text-primary transition-colors"
            >
              Contato
            </Link>
            <a
              href="https://wa.me/5592982078515"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-text-secondary/60 text-center md:text-right">
            ConnectLife Tecnologia
            <br />
            Manaus, AM — Brasil
            <br />
            <a href="tel:+5592982078515" className="hover:text-text-primary">
              +55 (92) 98207-8515
            </a>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-black/[0.04] pt-6 text-xs text-text-secondary/70">
          <p>© {new Date().getFullYear()} ConnectLife Tecnologia</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/legal/politica-de-privacidade"
              className="hover:text-text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/legal/termos"
              className="hover:text-text-primary transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
