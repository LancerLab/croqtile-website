"use client";

import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";

const croktileCode = `__co__ auto matmul(f32 [M, K] a,
                   f32 [N, K] b) {
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

const cudaCode = `__global__ void matmul(float* A, float* B,
    float* C, int M, int N, int K) {
  __shared__ float As[BM][BK], Bs[BK][BN];
  int bx = blockIdx.x, by = blockIdx.y;
  int tx = threadIdx.x, ty = threadIdx.y;
  int row = by * BM + ty;
  int col = bx * BN + tx;
  float sum = 0.0f;
  for (int k = 0; k < K; k += BK) {
    As[ty][tx] = A[row * K + k + tx];
    Bs[ty][tx] = B[(k + ty) * N + col];
    __syncthreads();
    for (int kk = 0; kk < BK; kk++)
      sum += As[ty][kk] * Bs[kk][tx];
    __syncthreads();
  }
  C[row * N + col] = sum;
}`;

export function FeatureEasyToUse() {
  const t = useTranslations("features.easyToUse");

  const points = [
    t("point1"),
    t("point2"),
    t("point3"),
    t("point4"),
  ];

  return (
    <FeatureCard
      icon={
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      }
      title={t("title")}
      subtitle={t("subtitle")}
      description={t("description")}
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

        <div className="space-y-3">
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="absolute -top-2 left-3 px-2 py-0.5 bg-mint-500 text-white text-xs font-semibold rounded">
                Croktile — 12 lines
              </div>
              <div className="rounded-xl border bg-[var(--card)] overflow-hidden font-mono text-xs p-4 pt-5">
                <pre className="text-[var(--foreground)] overflow-x-auto"><code>{croktileCode}</code></pre>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="relative">
              <div className="absolute -top-2 left-3 px-2 py-0.5 bg-[var(--muted-foreground)] text-white text-xs font-semibold rounded">
                CUDA — 18 lines
              </div>
              <div className="rounded-xl border bg-[var(--card)] overflow-hidden font-mono text-xs p-4 pt-5 opacity-60">
                <pre className="text-[var(--foreground)] overflow-x-auto"><code>{cudaCode}</code></pre>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.35}>
          <div className="flex items-end gap-4 px-4">
            <div className="flex-1">
              <div className="text-xs text-[var(--muted-foreground)] mb-1">Croktile</div>
              <div className="h-6 bg-mint-500 rounded" style={{ width: "40%" }} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-[var(--muted-foreground)] mb-1">CUTE</div>
              <div className="h-6 bg-gray-400 rounded" style={{ width: "65%" }} />
            </div>
            <div className="flex-1">
              <div className="text-xs text-[var(--muted-foreground)] mb-1">CUDA</div>
              <div className="h-6 bg-gray-500 rounded" style={{ width: "100%" }} />
            </div>
          </div>
          <p className="text-xs text-center text-[var(--muted-foreground)] mt-2">
            Lines of code for equivalent matrix multiplication kernel
          </p>
        </ScrollReveal>
      </div>
    </FeatureCard>
  );
}
