"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/logo.svg"
              alt="ConnectLife"
              className="h-6 w-auto"
            />
          </div>

          <div className="flex items-center gap-6 text-sm text-text-secondary">
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
            <a
              href="https://wa.me/5592982078515"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>

          <p className="text-xs text-text-secondary/60">
            © 2025 ConnectLife Tecnologia — Manaus, AM
          </p>
        </div>
      </div>
    </footer>
  );
}
