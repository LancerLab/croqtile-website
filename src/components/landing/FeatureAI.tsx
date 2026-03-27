"use client";

import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const compactCode = `// 12 lines → complete matrix multiplication kernel
__co__ auto matmul(f32 [M, K] a, f32 [N, K] b) {
  f32 [M, N] out;
  parallel (blockIdx) {
    sa = dma.copy a.chunkat(bm, 1) => smem;
    sb = dma.copy b.chunkat(bn, 1) => smem;
    within (k : K / bk) {
      mma sa.chunkat(1, bk)
          sb.chunkat(1, bk) => out;
    }
  }
  return out;
}`;

const aiOutputDemo = `$ croktile compile kernel.co --verbose

[INFO] Parsing kernel.co (12 lines, 340 chars)
[SEMA] Type inference: 3 symbolic dims resolved
[SEMA] Tiling validation: all 4 chunkat ops valid
[CHECK] Shape propagation: f32[M,K] × f32[N,K] → f32[M,N] ✓
[CHECK] Shared memory: 2 allocations, auto-sized ✓
[CODEGEN] Target: CUDA (sm_90a)
[CODEGEN] Generated: kernel.cu (87 lines)

Compilation successful. 0 errors, 0 warnings.`;

export function FeatureAI() {
  const t = useTranslations("features.ai");

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
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border bg-[var(--card)] p-4 text-center">
              <div className="text-3xl font-bold text-mint-500">12</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Lines of code</div>
            </div>
            <div className="rounded-xl border bg-[var(--card)] p-4 text-center">
              <div className="text-3xl font-bold text-mint-500">340</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Characters total</div>
            </div>
            <div className="rounded-xl border bg-[var(--card)] p-4 text-center">
              <div className="text-3xl font-bold text-mint-500">0</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Hidden configs exposed</div>
            </div>
            <div className="rounded-xl border bg-[var(--card)] p-4 text-center">
              <div className="text-3xl font-bold text-mint-500">4</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">Safety checks auto</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="rounded-xl border bg-[var(--card)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-[var(--muted)]">
              <span className="text-xs font-medium text-[var(--muted-foreground)]">
                AI-friendly compiler output
              </span>
            </div>
            <div className="p-4 font-mono text-xs overflow-x-auto">
              <pre className="text-[var(--foreground)]"><code>{aiOutputDemo}</code></pre>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </FeatureCard>
  );
}
