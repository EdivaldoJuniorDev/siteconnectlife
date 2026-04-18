import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { BlogPost, BlogPostFrontmatter, BlogPostMeta } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function estimateReadingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function isBlogPostFrontmatter(
  data: Record<string, unknown>,
): data is BlogPostFrontmatter {
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    typeof data.date === "string"
  );
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (!isBlogPostFrontmatter(data)) {
    throw new Error(
      `Post ${slug} tem frontmatter inválido. Campos obrigatórios: title, description, date.`,
    );
  }

  if (data.draft && process.env.NODE_ENV === "production") return null;

  return {
    ...data,
    slug,
    readingMinutes: estimateReadingMinutes(content),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => p !== null)
    .map(({ content: _content, ...meta }) => {
      void _content;
      return meta;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
