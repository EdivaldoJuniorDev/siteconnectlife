import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Accordion from "../Accordion";

const ITEMS = [
  { id: "a", question: "Pergunta A?", answer: "Resposta A." },
  { id: "b", question: "Pergunta B?", answer: "Resposta B." },
];

describe("Accordion", () => {
  it("renderiza todas as perguntas fechadas por padrão", () => {
    render(<Accordion items={ITEMS} />);
    expect(screen.getByText("Pergunta A?")).toBeInTheDocument();
    expect(screen.getByText("Pergunta B?")).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) =>
      expect(btn).toHaveAttribute("aria-expanded", "false"),
    );
  });

  it("abre o item ao clicar e fecha ao clicar novamente", async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} />);

    const btnA = screen.getByRole("button", { name: /pergunta a\?/i });
    await user.click(btnA);
    expect(btnA).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Resposta A.")).toBeInTheDocument();

    await user.click(btnA);
    expect(btnA).toHaveAttribute("aria-expanded", "false");
  });

  it("fecha o item anterior ao abrir outro (comportamento de accordion)", async () => {
    const user = userEvent.setup();
    render(<Accordion items={ITEMS} />);

    const btnA = screen.getByRole("button", { name: /pergunta a\?/i });
    const btnB = screen.getByRole("button", { name: /pergunta b\?/i });

    await user.click(btnA);
    expect(btnA).toHaveAttribute("aria-expanded", "true");

    await user.click(btnB);
    expect(btnA).toHaveAttribute("aria-expanded", "false");
    expect(btnB).toHaveAttribute("aria-expanded", "true");
  });
});
