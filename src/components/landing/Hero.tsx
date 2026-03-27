"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 dark:opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-mint-400/10 dark:bg-mint-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 sm:pt-32 sm:pb-40">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-[var(--card)] text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-mint-500 animate-pulse" />
            <span className="text-[var(--muted-foreground)]">
              TileFlow Programming Paradigm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-[1.1]"
          >
            {t("tagline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/docs"
              className="px-8 py-3.5 text-sm font-semibold bg-mint-500 text-white rounded-xl
                         hover:bg-mint-600 transition-all shadow-lg shadow-mint-500/25
                         hover:shadow-mint-500/40"
            >
              {t("cta")}
            </Link>
            <a
              href="#features"
              className="px-8 py-3.5 text-sm font-semibold border rounded-xl
                         hover:bg-[var(--muted)] transition-all"
            >
              {t("learnMore")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 w-full max-w-3xl"
          >
            <div className="rounded-xl border bg-[var(--card)] overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/30">
              <div className="flex items-center gap-2 px-4 py-3 border-b bg-[var(--muted)]">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <span className="text-xs text-[var(--muted-foreground)] ml-2 font-mono">
                  matmul.co
                </span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <pre className="text-[var(--foreground)]">
                  <code>{`__co__ auto matmul(f32 [M, K] lhs, f32 [N, K] rhs) {
  f32 [M, N] output;
  parallel (blockIdx) {
    shared = dma.copy lhs.chunkat(bm, 1) => smem;
    shared_r = dma.copy rhs.chunkat(bn, 1) => smem;
    within (k : K / bk) {
      mma shared.chunkat(1, bk)
          shared_r.chunkat(1, bk) => output;
    }
  }
  return output;
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
