"use client";

import { Link } from "@/i18n/routing";

type Props = {
  items: { title: string; slug: string }[];
  basePath: string;
};

export function DocGrid({ items, basePath }: Props) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`${basePath}/${item.slug}`}
          className="block p-4 rounded-xl border hover:border-mint-500/50 hover:bg-[var(--muted)] transition-colors"
        >
          <span className="font-medium">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
