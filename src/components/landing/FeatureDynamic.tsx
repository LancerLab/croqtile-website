"use client";

import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const symbolicCode = `// Symbolic dimensions — shapes resolved at runtime
__co__ auto matmul(f32 [M, K] lhs, f32 [N, K] rhs) {
  f32 [M, N] output;

  // M, N, K are symbolic — no hardcoded sizes
  parallel (blockIdx) {
    // Dynamic shared memory, sized automatically
    shared_a = dma.copy lhs.chunkat(bm, 1) => smem;
    shared_b = dma.copy rhs.chunkat(bn, 1) => smem;

    within (k : K / bk) {
      mma shared_a.chunkat(1, bk)
          shared_b.chunkat(1, bk) => output;
    }
  }
  return output;
}`;

const usageCode = `// Call with any shapes — one kernel for all sizes
matmul(tensor_128x256, tensor_512x256);  // ✓
matmul(tensor_64x1024, tensor_32x1024);  // ✓
matmul(dynamic_tensor_a, dynamic_tensor_b); // ✓ runtime shapes`;

export function FeatureDynamic() {
  const t = useTranslations("features.dynamic");

  const points = [t("point1"), t("point2"), t("point3")];

  return (
    <FeatureCard
      icon={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 3v18" />
        </svg>
      }
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <svg className="w-5 h-5 text-mint-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="text-[var(--muted-foreground)]">{point}</span>
            </div>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border bg-[var(--card)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-[var(--muted)]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-[var(--muted-foreground)] ml-2 font-mono">
                dynamic_matmul.co
              </span>
            </div>
            <div className="p-4 font-mono text-xs overflow-x-auto">
              <pre className="text-[var(--foreground)]"><code>{symbolicCode}</code></pre>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="rounded-xl border border-mint-500/30 bg-mint-500/5 overflow-hidden p-4 font-mono text-xs">
            <pre className="text-[var(--foreground)] overflow-x-auto"><code>{usageCode}</code></pre>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div className="flex justify-center gap-4">
            {["M", "N", "K"].map((dim) => (
              <div
                key={dim}
                className="flex flex-col items-center gap-1 px-4 py-3 rounded-lg border bg-[var(--card)]"
              >
                <span className="text-lg font-bold text-mint-500 font-mono">{dim}</span>
                <span className="text-xs text-[var(--muted-foreground)]">symbolic</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </FeatureCard>
  );
}
