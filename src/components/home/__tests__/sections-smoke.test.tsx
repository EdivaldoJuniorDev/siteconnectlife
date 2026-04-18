import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LogosSection from "../LogosSection";
import ServicosSection from "../ServicosSection";
import ComoFazemosSection from "../ComoFazemosSection";
import NumerosSection from "../NumerosSection";
import StackSection from "../StackSection";
import CasosSection from "../CasosSection";
import ParaQuemSection from "../ParaQuemSection";
import DepoimentosSection from "../DepoimentosSection";
import CtaFinalSection from "../CtaFinalSection";

describe("Seções da home — smoke tests", () => {
  it("LogosSection renderiza o marquee com header de autoridade", () => {
    render(<LogosSection />);
    expect(screen.getByText(/tecnologias que dominamos/i)).toBeInTheDocument();
  });

  it("ServicosSection tem id='servicos' para âncora do nav", () => {
    const { container } = render(<ServicosSection />);
    expect(container.querySelector("#servicos")).toBeTruthy();
  });

  it("ServicosSection mostra os 4 serviços e CTA principal para /site", () => {
    render(<ServicosSection />);
    expect(screen.getByText(/site que agenda clientes/i)).toBeInTheDocument();
    expect(screen.getByText(/automação que elimina/i)).toBeInTheDocument();
    expect(screen.getByText(/produto digital enxuto/i)).toBeInTheDocument();
    expect(screen.getByText(/plataforma robusta/i)).toBeInTheDocument();

    const verPacotes = screen.getByRole("link", { name: /ver pacotes/i });
    expect(verPacotes).toHaveAttribute("href", "/site");
  });

  it("ComoFazemosSection tem id='processo' e CTA de WhatsApp", () => {
    const { container } = render(<ComoFazemosSection />);
    expect(container.querySelector("#processo")).toBeTruthy();
    const cta = screen.getByRole("link", { name: /iniciar projeto/i });
    expect(cta.getAttribute("href")).toMatch(/wa\.me\/5592982078515/);
  });

  it("NumerosSection mostra os 4 contadores", () => {
    render(<NumerosSection />);
    expect(screen.getByText("Projetos entregues")).toBeInTheDocument();
    expect(screen.getByText("Prazo médio de entrega")).toBeInTheDocument();
    expect(screen.getByText("Tecnologias dominadas")).toBeInTheDocument();
    expect(screen.getByText("Satisfação dos clientes")).toBeInTheDocument();
  });

  it("StackSection mostra badges técnicos chave", () => {
    render(<StackSection />);
    expect(screen.getByText(/next\.js 14/i)).toBeInTheDocument();
    expect(screen.getByText(/typescript/i)).toBeInTheDocument();
    expect(screen.getByText(/supabase/i)).toBeInTheDocument();
  });

  it("CasosSection mostra os projetos entregues e link para /site", () => {
    render(<CasosSection />);
    expect(screen.getByText(/erp para loja de cortinas/i)).toBeInTheDocument();
    expect(screen.getByText(/iEscala/i)).toBeInTheDocument();
    const demosLink = screen.getByRole("link", { name: /demos de portfólio/i });
    expect(demosLink).toHaveAttribute("href", "/site");
  });

  it("ParaQuemSection mostra os 3 perfis com CTA de clínicas para /site", () => {
    render(<ParaQuemSection />);
    expect(screen.getByText(/clínicas e consultórios/i)).toBeInTheDocument();
    expect(screen.getByText(/empresas e profissionais/i)).toBeInTheDocument();
    expect(screen.getByText(/founders e empreendedores/i)).toBeInTheDocument();
    const linkClinicas = screen.getByRole("link", {
      name: /ver solução para clínicas/i,
    });
    expect(linkClinicas).toHaveAttribute("href", "/site");
  });

  it("DepoimentosSection mostra ao menos um depoimento e as 5 estrelas", () => {
    render(<DepoimentosSection />);
    expect(
      screen.getByText(/erp completo funcionando/i),
    ).toBeInTheDocument();
    expect(screen.getAllByLabelText(/5 estrelas/i).length).toBeGreaterThan(0);
  });

  it("CtaFinalSection aponta CTA principal para WhatsApp e CTA secundário para #servicos", () => {
    render(<CtaFinalSection />);
    const whatsapp = screen.getByRole("link", { name: /falar no whatsapp/i });
    expect(whatsapp.getAttribute("href")).toMatch(/wa\.me\/5592982078515/);

    const servicos = screen.getByRole("link", { name: /ver nossos serviços/i });
    expect(servicos).toHaveAttribute("href", "#servicos");
  });
});
