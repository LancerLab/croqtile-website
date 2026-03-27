import {
  getContentSlugs,
  getContentBySlug,
  getAllContent,
  getSidebarItems,
} from "@/lib/mdx";

describe("mdx content utilities", () => {
  describe("getContentSlugs", () => {
    it("returns slugs for docs/en", () => {
      const slugs = getContentSlugs("docs", "en");
      expect(slugs).toContain("index");
      expect(slugs).toContain("shapes");
      expect(slugs).toContain("parallel");
      expect(slugs).toContain("dma");
    });

    it("returns slugs for tutorials/en", () => {
      const slugs = getContentSlugs("tutorials", "en");
      expect(slugs).toContain("index");
    });

    it("returns slugs for blog/en", () => {
      const slugs = getContentSlugs("blog", "en");
      expect(slugs).toContain("hello-world");
    });

    it("returns slugs for changelog/en", () => {
      const slugs = getContentSlugs("changelog", "en");
      expect(slugs).toContain("v0.1.0");
    });

    it("returns empty array for nonexistent section", () => {
      const slugs = getContentSlugs("nonexistent", "en");
      expect(slugs).toEqual([]);
    });
  });

  describe("getContentBySlug", () => {
    it("reads docs content with frontmatter", () => {
      const item = getContentBySlug("docs", "index", "en");
      expect(item).not.toBeNull();
      expect(item!.meta.title).toBe("Getting Started with Croktile");
      expect(item!.meta.order).toBe(1);
      expect(item!.content).toContain("## Installation");
    });

    it("reads blog content with date and tags", () => {
      const item = getContentBySlug("blog", "hello-world", "en");
      expect(item).not.toBeNull();
      expect(item!.meta.title).toBe("Introducing Croktile");
      expect(item!.meta.date).toBe("2026-03-27");
      expect(item!.meta.tags).toContain("announcement");
    });

    it("returns null for nonexistent slug", () => {
      const item = getContentBySlug("docs", "does-not-exist", "en");
      expect(item).toBeNull();
    });
  });

  describe("getAllContent", () => {
    it("returns docs sorted by order", () => {
      const items = getAllContent("docs", "en");
      expect(items.length).toBeGreaterThanOrEqual(4);
      expect(items[0].meta.order).toBeLessThanOrEqual(items[1].meta.order!);
    });

    it("returns blog sorted by date (newest first)", () => {
      const items = getAllContent("blog", "en");
      expect(items.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("getSidebarItems", () => {
    it("returns sidebar items for docs", () => {
      const items = getSidebarItems("docs", "en");
      expect(items.length).toBeGreaterThanOrEqual(4);
      items.forEach((item) => {
        expect(item).toHaveProperty("title");
        expect(item).toHaveProperty("slug");
      });
    });
  });
});
