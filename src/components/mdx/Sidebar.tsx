"use client";

import { Link, usePathname } from "@/i18n/routing";

type SidebarItem = {
  title: string;
  slug: string;
};

type Props = {
  items: SidebarItem[];
  basePath: string;
  title: string;
};

export function Sidebar({ items, basePath, title }: Props) {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto pb-8">
        <h3 className="text-sm font-semibold mb-3 text-[var(--muted-foreground)] uppercase tracking-wider">
          {title}
        </h3>
        <nav className="space-y-0.5">
          {items.map((item) => {
            const href = `${basePath}/${item.slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item.slug}
                href={href}
                className={`block px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  isActive
                    ? "bg-mint-500/10 text-mint-600 dark:text-mint-400 font-medium"
                    : "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
