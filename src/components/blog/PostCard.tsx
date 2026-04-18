import Link from "next/link";
import { formatPostDate } from "@/lib/blog/posts";
import type { BlogPostMeta } from "@/lib/blog/types";

export default function PostCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border-t border-black/10 pt-8 transition-colors hover:border-accent"
    >
      {post.tags && post.tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium uppercase tracking-[0.18em] text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <h2 className="font-playfair text-2xl leading-tight text-text-primary transition-colors group-hover:text-accent md:text-3xl">
        {post.title}
      </h2>
      <p className="mt-3 text-sm text-text-secondary md:text-base">
        {post.description}
      </p>
      <div className="mt-6 flex items-center gap-3 text-xs text-text-secondary/80">
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min de leitura</span>
      </div>
    </Link>
  );
}
