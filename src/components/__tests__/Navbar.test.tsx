import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renderiza o logo da ConnectLife", () => {
    render(<Navbar />);
    expect(screen.getByAltText(/connectlife/i)).toBeInTheDocument();
  });

  it("expõe os links de navegação principais no desktop", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /serviços/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /como funciona/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /portfólio/i }),
    ).toBeInTheDocument();
  });

  it("aponta o CTA de WhatsApp para o número correto", () => {
    render(<Navbar />);
    const ctas = screen.getAllByRole("link", { name: /falar conosco|contato/i });
    ctas.forEach((cta) => {
      expect(cta).toHaveAttribute("href", "https://wa.me/5592982078515");
      expect(cta).toHaveAttribute("target", "_blank");
      expect(cta).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
  });
});
