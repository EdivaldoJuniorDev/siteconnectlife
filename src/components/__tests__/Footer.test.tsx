import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "../Footer";

describe("Footer", () => {
  it("expõe links para Política de Privacidade e Termos de Uso", () => {
    render(<Footer />);
    const privacy = screen.getByRole("link", { name: /política de privacidade/i });
    const terms = screen.getByRole("link", { name: /termos de uso/i });
    expect(privacy).toHaveAttribute("href", "/legal/politica-de-privacidade");
    expect(terms).toHaveAttribute("href", "/legal/termos");
  });

  it("mostra o NAP (telefone clicável)", () => {
    render(<Footer />);
    const phone = screen.getByRole("link", { name: /\+55.*92.*98207-8515/i });
    expect(phone).toHaveAttribute("href", "tel:+5592982078515");
  });
});
