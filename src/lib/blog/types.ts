export type BlogPostFrontmatter = {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
  cover?: string;
  draft?: boolean;
};

export type BlogPostMeta = BlogPostFrontmatter & {
  slug: string;
  readingMinutes: number;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};
