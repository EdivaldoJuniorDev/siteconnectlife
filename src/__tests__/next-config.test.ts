import { describe, it, expect } from "vitest";
import nextConfig from "../../next.config.mjs";

describe("next.config.mjs — security headers", () => {
  it("expõe um handler de headers", async () => {
    expect(typeof nextConfig.headers).toBe("function");
    const result = await nextConfig.headers!();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("aplica os headers obrigatórios a todas as rotas", async () => {
    const result = await nextConfig.headers!();
    const rule = result[0];

    expect(rule.source).toBe("/:path*");

    const headerKeys = rule.headers.map((h) => h.key);
    const required = [
      "Content-Security-Policy",
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Referrer-Policy",
      "Permissions-Policy",
      "Strict-Transport-Security",
    ];
    for (const key of required) {
      expect(headerKeys).toContain(key);
    }
  });

  it("bloqueia clickjacking com X-Frame-Options DENY e frame-ancestors none", async () => {
    const result = await nextConfig.headers!();
    const byKey = Object.fromEntries(
      result[0].headers.map((h) => [h.key, h.value]),
    );

    expect(byKey["X-Frame-Options"]).toBe("DENY");
    expect(byKey["Content-Security-Policy"]).toContain("frame-ancestors 'none'");
  });

  it("HSTS tem max-age >= 1 ano e inclui preload", async () => {
    const result = await nextConfig.headers!();
    const hsts = result[0].headers.find(
      (h) => h.key === "Strict-Transport-Security",
    )!;

    const maxAge = Number(hsts.value.match(/max-age=(\d+)/)?.[1] ?? 0);
    expect(maxAge).toBeGreaterThanOrEqual(31536000);
    expect(hsts.value).toContain("includeSubDomains");
    expect(hsts.value).toContain("preload");
  });

  it("Permissions-Policy desliga capacidades sensíveis por padrão", async () => {
    const result = await nextConfig.headers!();
    const pp = result[0].headers.find((h) => h.key === "Permissions-Policy")!;

    expect(pp.value).toContain("camera=()");
    expect(pp.value).toContain("microphone=()");
    expect(pp.value).toContain("geolocation=()");
  });

  it("desliga poweredByHeader e habilita compressão", () => {
    expect(nextConfig.poweredByHeader).toBe(false);
    expect(nextConfig.compress).toBe(true);
  });
});
