import { describe, expect, it } from "vitest";
import {
  formatPostDate,
  getAllPosts,
  getPostBySlug,
  getPostSlugs,
} from "../posts";

describe("lib/blog/posts", () => {
  it("encontra todos os posts seed no diretório content/blog", () => {
    const slugs = getPostSlugs();
    expect(slugs.length).toBeGreaterThanOrEqual(3);
    expect(slugs).toContain("quanto-custa-um-site-profissional-em-2026");
    expect(slugs).toContain("saas-vs-micro-saas-qual-faz-sentido-em-2026");
    expect(slugs).toContain("automacoes-que-pagam-seu-time");
  });

  it("carrega post por slug com frontmatter válido", () => {
    const post = getPostBySlug("automacoes-que-pagam-seu-time");
    expect(post).not.toBeNull();
    expect(post?.title).toMatch(/automações/i);
    expect(post?.description.length).toBeGreaterThan(20);
    expect(post?.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(post?.tags?.length).toBeGreaterThan(0);
    expect(post?.readingMinutes).toBeGreaterThan(0);
  });

  it("retorna null para slug inexistente", () => {
    expect(getPostBySlug("nao-existe")).toBeNull();
  });

  it("getAllPosts retorna meta sem o content", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThanOrEqual(3);
    for (const p of posts) {
      expect(p).not.toHaveProperty("content");
      expect(p.slug).toBeTruthy();
    }
  });

  it("getAllPosts ordena por data desc (mais recente primeiro)", () => {
    const posts = getAllPosts();
    for (let i = 1; i < posts.length; i++) {
      expect(
        new Date(posts[i - 1].date).getTime() >=
          new Date(posts[i].date).getTime(),
      ).toBe(true);
    }
  });

  it("formatPostDate produz data em pt-BR", () => {
    expect(formatPostDate("2026-04-18")).toMatch(/2026/);
    expect(formatPostDate("2026-04-18")).toMatch(/abril/i);
  });
});
