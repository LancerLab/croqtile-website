"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function LangSwitch() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locales.find((l) => l !== locale) ?? locales[0];

  function switchLocale() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="px-2.5 py-1.5 text-sm font-medium rounded-lg
                 hover:bg-[var(--muted)] transition-colors"
      aria-label={`Switch to ${localeNames[nextLocale]}`}
    >
      {localeNames[nextLocale]}
    </button>
  );
}
