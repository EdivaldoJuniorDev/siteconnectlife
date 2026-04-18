import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FaqSection, { FAQ_ITEMS } from "../FaqSection";

describe("FaqSection", () => {
  it("renderiza todas as perguntas do FAQ", () => {
    render(<FaqSection />);
    for (const item of FAQ_ITEMS) {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    }
  });

  it("exporta FAQ_ITEMS com estrutura válida para schema.org FAQPage", () => {
    expect(FAQ_ITEMS.length).toBeGreaterThanOrEqual(5);
    for (const item of FAQ_ITEMS) {
      expect(item.id).toBeTruthy();
      expect(item.question).toMatch(/\?$/);
      expect(item.answer.length).toBeGreaterThan(20);
    }
  });

  it("cada id é único (evita conflito de aria-controls)", () => {
    const ids = FAQ_ITEMS.map((i) => i.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
