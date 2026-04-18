import { describe, expect, it } from "vitest";
import sitemap from "../sitemap";

describe("sitemap", () => {
  it("inclui a home com priority 1", () => {
    const entries = sitemap();
    const home = entries.find((e) => e.url === "https://connectlife.com.br");
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1);
  });

  it("inclui as páginas legais da LGPD", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls).toContain(
      "https://connectlife.com.br/legal/politica-de-privacidade",
    );
    expect(urls).toContain("https://connectlife.com.br/legal/termos");
  });

  it("inclui /site como página de venda filial", () => {
    const entries = sitemap();
    const site = entries.find(
      (e) => e.url === "https://connectlife.com.br/site",
    );
    expect(site).toBeDefined();
    expect(site?.priority).toBe(0.9);
  });

  it("inclui as 8 landing pages de especialidades", () => {
    const entries = sitemap();
    const especialidades = entries.filter((e) =>
      e.url.includes("/site-para-"),
    );
    expect(especialidades).toHaveLength(8);
  });
});
