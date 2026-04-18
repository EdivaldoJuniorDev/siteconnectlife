import { describe, expect, it } from "vitest";
import {
  buildWhatsappMessage,
  buildWhatsappUrl,
  contactSchema,
} from "../schema";

const validPayload = {
  name: "Edivaldo Junior",
  email: "edivaldo@example.com",
  phone: "(92) 98207-8515",
  projectType: "site",
  budget: "15k-50k",
  message: "Quero um site para minha clínica em Manaus.",
  consent: "on",
};

describe("contactSchema", () => {
  it("valida payload completo", () => {
    const result = contactSchema.safeParse(validPayload);
    expect(result.success).toBe(true);
  });

  it("aceita payload sem orçamento (budget é opcional)", () => {
    const { budget, ...rest } = validPayload;
    void budget;
    const result = contactSchema.safeParse(rest);
    expect(result.success).toBe(true);
  });

  it("rejeita email inválido", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      email: "não-é-email",
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((i) => i.path[0] === "email")).toBe(true);
    }
  });

  it("rejeita mensagem muito curta", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      message: "curta",
    });
    expect(result.success).toBe(false);
  });

  it("rejeita quando consent não é 'on'", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      consent: undefined,
    });
    expect(result.success).toBe(false);
  });

  it("rejeita projectType fora da lista", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      projectType: "nao-existe",
    });
    expect(result.success).toBe(false);
  });
});

describe("buildWhatsappMessage", () => {
  it("monta mensagem com labels legíveis para tipo e orçamento", () => {
    const parsed = contactSchema.parse(validPayload);
    const msg = buildWhatsappMessage(parsed);
    expect(msg).toContain("Edivaldo Junior");
    expect(msg).toContain("Site profissional / LP");
    expect(msg).toContain("R$ 15.000 – R$ 50.000");
    expect(msg).toContain("Quero um site");
  });

  it("omite linha de orçamento quando não informado", () => {
    const { budget, ...rest } = validPayload;
    void budget;
    const parsed = contactSchema.parse(rest);
    const msg = buildWhatsappMessage(parsed);
    expect(msg).not.toMatch(/Orçamento:/);
  });
});

describe("buildWhatsappUrl", () => {
  it("gera URL do WhatsApp com número e mensagem codificada", () => {
    const parsed = contactSchema.parse(validPayload);
    const url = buildWhatsappUrl(parsed);
    expect(url.startsWith("https://wa.me/5592982078515?text=")).toBe(true);
    expect(url).toContain(encodeURIComponent("Edivaldo Junior"));
  });
});
