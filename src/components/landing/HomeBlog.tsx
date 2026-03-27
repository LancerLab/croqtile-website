"use client";

import { Link } from "@/i18n/routing";
import { ScrollReveal } from "./ScrollReveal";

type BlogPost = {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  slug: string;
  tags?: string[];
};

type Props = {
  posts: BlogPost[];
};

export function HomeBlog({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section className="py-20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Recent highlights</h2>
            <Link
              href="/blog"
              className="text-sm text-mint-600 dark:text-mint-400 hover:underline"
            >
              View all blog posts →
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block p-6 rounded-xl border bg-[var(--card)]
                           hover:border-mint-500/50 transition-all
                           hover:shadow-lg hover:shadow-mint-500/5"
              >
                <div className="flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-3">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-mint-500/10 text-mint-600 dark:text-mint-400 capitalize"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.date && (
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors mb-2">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">
                    {post.description}
                  </p>
                )}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
