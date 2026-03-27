"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LangSwitch } from "./LangSwitch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", labelKey: "product" },
  { href: "/tutorials", labelKey: "tutorials" },
  { href: "/docs", labelKey: "docs" },
  { href: "/changelog", labelKey: "changelog" },
  { href: "/blog", labelKey: "blog" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = mounted && resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo.svg";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-xl border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src={logoSrc} alt="Croktile" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, labelKey }) => (
              <Link
                key={labelKey}
                href={href}
                className="px-3 py-2 text-sm font-medium text-[var(--muted-foreground)]
                           hover:text-[var(--foreground)] transition-colors rounded-lg
                           hover:bg-[var(--muted)]"
              >
                {t(labelKey)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <LangSwitch />
            <ThemeToggle />
            <Link
              href="/docs"
              className="hidden sm:inline-flex ml-2 px-4 py-2 text-sm font-medium
                         bg-mint-500 text-white rounded-lg hover:bg-mint-600
                         transition-colors"
            >
              {t("getStarted")}
            </Link>
            <button
              className="md:hidden ml-1 p-2 rounded-lg hover:bg-[var(--muted)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t py-4 space-y-1">
            {navLinks.map(({ href, labelKey }) => (
              <Link
                key={labelKey}
                href={href}
                className="block px-3 py-2 text-sm font-medium text-[var(--muted-foreground)]
                           hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-lg
                           transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t(labelKey)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
