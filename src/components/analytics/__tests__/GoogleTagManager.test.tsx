import { describe, expect, it } from "vitest";
import { isGtmIdValid } from "../GoogleTagManager";

describe("isGtmIdValid", () => {
  it("aceita IDs GTM bem formados", () => {
    expect(isGtmIdValid("GTM-ABC1234")).toBe(true);
    expect(isGtmIdValid("GTM-X99Z")).toBe(true);
  });

  it("rejeita IDs com formato inválido ou vazios", () => {
    expect(isGtmIdValid(undefined)).toBe(false);
    expect(isGtmIdValid("")).toBe(false);
    expect(isGtmIdValid("UA-12345")).toBe(false);
    expect(isGtmIdValid("G-ABC123")).toBe(false);
    expect(isGtmIdValid("gtm-abc")).toBe(false);
    expect(isGtmIdValid("GTM-abc")).toBe(false);
    expect(isGtmIdValid("<script>alert(1)</script>")).toBe(false);
  });
});
