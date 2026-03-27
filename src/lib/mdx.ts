import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentMeta = {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  order?: number;
  slug: string;
};

export type ContentItem = {
  meta: ContentMeta;
  content: string;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content");

export function getContentDir(
  section: string,
  locale: string = "en"
): string {
  return path.join(CONTENT_DIR, section, locale);
}

export function getContentSlugs(
  section: string,
  locale: string = "en"
): string[] {
  const dir = getContentDir(section, locale);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export function getContentBySlug(
  section: string,
  slug: string,
  locale: string = "en"
): ContentItem | null {
  const dir = getContentDir(section, locale);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);

  const filePath = fs.existsSync(mdxPath)
    ? mdxPath
    : fs.existsSync(mdPath)
      ? mdPath
      : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      title: data.title ?? slug,
      description: data.description,
      date: data.date?.toString(),
      author: data.author,
      tags: data.tags,
      order: data.order,
      slug,
    },
    content,
  };
}

export function getAllContent(
  section: string,
  locale: string = "en"
): ContentItem[] {
  const slugs = getContentSlugs(section, locale);
  return slugs
    .map((slug) => getContentBySlug(section, slug, locale))
    .filter((item): item is ContentItem => item !== null)
    .sort((a, b) => {
      if (a.meta.order !== undefined && b.meta.order !== undefined) {
        return a.meta.order - b.meta.order;
      }
      if (a.meta.date && b.meta.date) {
        return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
      }
      return a.meta.title.localeCompare(b.meta.title);
    });
}

export function getSidebarItems(
  section: string,
  locale: string = "en"
): { title: string; slug: string; order?: number }[] {
  return getAllContent(section, locale).map((item) => ({
    title: item.meta.title,
    slug: item.meta.slug,
    order: item.meta.order,
  }));
}
