import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
        <span className="text-gradient">{t("tagline")}</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl">
        {t("subtitle")}
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href="/docs"
          className="px-6 py-3 text-sm font-medium bg-mint-500 text-white rounded-lg
                     hover:bg-mint-600 transition-colors"
        >
          {t("cta")}
        </a>
        <a
          href="#features"
          className="px-6 py-3 text-sm font-medium border rounded-lg
                     hover:bg-[var(--muted)] transition-colors"
        >
          {t("learnMore")}
        </a>
      </div>
    </div>
  );
}
