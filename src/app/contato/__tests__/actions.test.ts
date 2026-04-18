import { describe, expect, it } from "vitest";
import { submitContact } from "../actions";

function makeFormData(
  fields: Record<string, string | undefined>,
): FormData {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) {
    if (v !== undefined) fd.append(k, v);
  }
  return fd;
}

const validFields = {
  name: "Edivaldo Junior",
  email: "edivaldo@example.com",
  phone: "(92) 98207-8515",
  projectType: "saas",
  budget: "15k-50k",
  message: "Preciso de um SaaS para gerenciar leads.",
  consent: "on",
};

describe("submitContact (server action)", () => {
  it("retorna success + URL do WhatsApp com payload válido", async () => {
    const result = await submitContact(null, makeFormData(validFields));
    expect(result.status).toBe("success");
    if (result.status === "success") {
      expect(result.whatsappUrl).toContain("https://wa.me/5592982078515");
      expect(result.whatsappUrl).toContain(
        encodeURIComponent("Edivaldo Junior"),
      );
    }
  });

  it("retorna erros por campo com payload inválido", async () => {
    const result = await submitContact(
      null,
      makeFormData({
        ...validFields,
        email: "invalido",
        message: "x",
      }),
    );
    expect(result.status).toBe("error");
    if (result.status === "error") {
      expect(result.fieldErrors.email?.length).toBeGreaterThan(0);
      expect(result.fieldErrors.message?.length).toBeGreaterThan(0);
    }
  });

  it("exige consent", async () => {
    const { consent, ...rest } = validFields;
    void consent;
    const result = await submitContact(null, makeFormData(rest));
    expect(result.status).toBe("error");
    if (result.status === "error") {
      expect(result.fieldErrors.consent?.length).toBeGreaterThan(0);
    }
  });
});
