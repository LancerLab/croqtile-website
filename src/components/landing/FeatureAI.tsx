"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const tuningTimeline = [
  { iter: "Baseline", tflops: 400, note: "1p1c, split-batch, wait<2>", status: "base" as const },
  { iter: "iter105", tflops: 403, note: "1p2c warp specialization", status: "keep" as const },
  { iter: "iter109", tflops: 419, note: "Early-empty producer signal", status: "keep" as const },
  { iter: "iter110", tflops: 388, note: "SW-pipelined metadata (regression)", status: "discard" as const },
  { iter: "3-stage", tflops: 490, note: "3-stage pipeline + 1p2c", status: "keep" as const },
  { iter: "e4m3 best", tflops: 1128, note: "Full optimization stack (FP8)", status: "best" as const },
];

const peakTflops = 1128;

const aiIterationLog = [
  { text: "$ croktile tune gemm_sp_f16.co --target sm_90a", type: "cmd" as const },
  { text: "", type: "blank" as const },
  { text: "[TUNE] Problem: 4096×8192×8192 on H800 PCIe", type: "info" as const },
  { text: "[TUNE] Peak theoretical: 1513 TFLOPS (FP16)", type: "info" as const },
  { text: "[TUNE] Baseline: iter084 → 400.4 TFLOPS ✓ verified", type: "check" as const },
  { text: "", type: "blank" as const },
  { text: "[NCU]  Memory throughput: 67.9% (memory-bound)", type: "info" as const },
  { text: "[NCU]  L1TEX scoreboard stalls: 52.9%", type: "info" as const },
  { text: "[NCU]  Uncoalesced global: 88% excessive sectors", type: "info" as const },
  { text: "[NCU]  Shared store bank conflicts: 9-way", type: "info" as const },
  { text: "", type: "blank" as const },
  { text: "[OPT]  1p2c warp-spec → 403.4 TFLOPS (+0.8%)", type: "check" as const },
  { text: "[OPT]  Early-empty signal → 419.2 TFLOPS (+4.7%)", type: "check" as const },
  { text: "[OPT]  SW-pipeline metadata → 388 TFLOPS ✗ DISCARD", type: "error" as const },
  { text: "[OPT]  3-stage + 1p2c → 490 TFLOPS (+22.4%)", type: "check" as const },
  { text: "", type: "blank" as const },
  { text: "[DONE] Best verified: 490 TFLOPS (32.4% HW eff.)", type: "success" as const },
  { text: "[DONE] e4m3 branch best: 1128 TFLOPS (37.3% HW eff.)", type: "success" as const },
];

const stats = [
  { value: "117", label: "Iterations run", sub: "across 5 ai-tune branches" },
  { value: "1128", label: "Peak TFLOPS", sub: "FP8 sparse GEMM verified" },
  { value: "37.3%", label: "HW efficiency", sub: "H800 PCIe peak" },
  { value: "15", label: "Lines of kernel", sub: "fits one AI context window" },
];

export function FeatureAI() {
  const t = useTranslations("features.ai");
  const [showLog, setShowLog] = useState(false);

  const points = [t("point1"), t("point2"), t("point3"), t("point4")];

  return (
    <FeatureCard
      icon={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
          <path d="M16 14a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4h8z" />
          <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
        </svg>
      }
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
      reversed
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {points.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="flex items-start gap-2 text-sm">
                <svg className="w-4 h-4 text-mint-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <span className="text-[var(--muted-foreground)]">{point}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Stats grid */}
        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl border bg-[var(--card)] p-3 text-center cursor-default"
              >
                <div className="text-xl font-bold text-mint-500">{stat.value}</div>
                <div className="text-[10px] text-[var(--foreground)] font-medium mt-0.5">{stat.label}</div>
                <div className="text-[9px] text-[var(--muted-foreground)] mt-0.5">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Real AI tuning progress bars */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border bg-[var(--card)] overflow-hidden">
            <div className="px-4 py-2.5 border-b bg-[var(--muted)] flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--muted-foreground)]">
                AI-driven optimization — real results from ai-tune branches
              </span>
            </div>
            <div className="p-3 space-y-1.5">
              {tuningTimeline.map((step, i) => (
                <motion.div
                  key={step.iter}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-2 group cursor-default"
                >
                  <span className="text-[10px] font-mono text-[var(--muted-foreground)] w-16 text-right shrink-0">
                    {step.iter}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(step.tflops / peakTflops) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className={`h-5 rounded flex items-center pl-1.5 min-w-[40px] ${
                      step.status === "discard"
                        ? "bg-red-400/60"
                        : step.status === "best"
                          ? "bg-mint-400"
                          : step.status === "base"
                            ? "bg-gray-400 dark:bg-gray-600"
                            : "bg-mint-500"
                    }`}
                  >
                    <span className="text-[9px] font-bold text-white whitespace-nowrap">
                      {step.tflops}
                    </span>
                  </motion.div>
                  <span className="text-[9px] text-[var(--muted-foreground)] truncate opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.note}
                  </span>
                </motion.div>
              ))}
            </div>
            <div className="px-4 py-2 border-t text-[10px] text-[var(--muted-foreground)] text-center">
              TFLOPS on H800 PCIe &middot; Hover for details
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive compile log */}
        <ScrollReveal delay={0.3}>
          <button
            onClick={() => setShowLog(!showLog)}
            className="w-full py-2.5 px-4 rounded-lg text-sm font-medium border
                       hover:bg-[var(--muted)] transition-all text-left flex items-center justify-between"
          >
            <span>View AI tuning session log</span>
            <motion.svg
              animate={{ rotate: showLog ? 180 : 0 }}
              className="w-4 h-4 text-[var(--muted-foreground)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </motion.svg>
          </button>
          <AnimatePresence>
            {showLog && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="rounded-xl border bg-[var(--card)] overflow-hidden mt-2 p-4 font-mono text-xs max-h-[300px] overflow-y-auto">
                  {aiIterationLog.map((line, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className={`leading-6 ${
                        line.type === "cmd" ? "text-[var(--foreground)] font-bold" :
                        line.type === "check" ? "text-mint-600 dark:text-mint-400" :
                        line.type === "error" ? "text-red-500" :
                        line.type === "success" ? "text-mint-500 font-bold" :
                        line.type === "blank" ? "" :
                        "text-[var(--muted-foreground)]"
                      }`}
                    >
                      {line.text || "\u00A0"}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ScrollReveal>
      </div>
    </FeatureCard>
  );
}
