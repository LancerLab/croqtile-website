"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { FeatureCard } from "./FeatureCard";
import { ScrollReveal } from "./ScrollReveal";
import { HighlightedCode } from "./HighlightedCode";

const comparisons = [
  {
    label: "Croktile",
    lines: 36,
    file: "matmul_hilbert.co",
    code: `__co__ void matmul(
    global f16 [M, K] lhs,
    global f16 [N, K] rhs,
    global f16 [M, N] output,
    global s32 [T] schedule_m,
    global s32 [T] schedule_n) {
  int total = cdiv(M, WARP_M) * cdiv(N, WARP_N);
  parallel block_id by NUM_SMS : block {
    shared f16 [WARP_M, TILE_K] lhs_s;
    shared f16 [WARP_N, TILE_K] rhs_s;
    shared f16 [WARP_M, WARP_N] out_s;
    foreach {tile} in [cdiv(total, NUM_SMS)] {
      tile_id = tile # block_id;
      if (tile_id < total) {
        int bm = schedule_m.at(tile_id);
        int bn = schedule_n.at(tile_id);
        mc = mma.fill.f16 0.0f;
        foreach {iv_k} in [cdiv(K, TILE_K)] {
          tma.copy.swiz<128>
            lhs.subspan(WARP_M, TILE_K)
              .at(bm, iv_k) => lhs_s;
          tma.copy.swiz<128>
            rhs.subspan(WARP_N, TILE_K)
              .at(bn, iv_k) => rhs_s;
          parallel p by 1 : group-4 {
            ma = mma.load.swiz<128> lhs_s;
            mb = mma.load.swiz<128> rhs_s;
            mma.row.row mc, ma, mb;
          }
        }
        mma.store mc, out_s;
        tma.copy out_s => output.subspan(
          WARP_M, WARP_N).at(bm, bn);
      }
    }
  }
}`,
    highlight: true,
    lang: "choreo",
  },
  {
    label: "CUDA + CuTe",
    lines: 95,
    file: "matmul_hilbert.cu",
    code: `template <int BM, int BN, int BK>
__global__ void persistent_hilbert_gemm(
    half* A, half* B, half* C,
    int M, int N, int K,
    int* sched_m, int* sched_n,
    int total_tiles) {
  __shared__ half smA[BM][BK], smB[BN][BK];
  int sm_id = blockIdx.x;
  int warpId = threadIdx.x / 32;

  for (int tile = sm_id; tile < total_tiles;
       tile += gridDim.x) {
    int bm = sched_m[tile], bn = sched_n[tile];
    // TMA descriptor setup (20+ lines)
    CUtensorMap tmA, tmB;
    cuTensorMapEncodeTiled(&tmA, ...);
    cuTensorMapEncodeTiled(&tmB, ...);

    // Shared memory barriers
    __shared__ uint64_t full_bar, empty_bar;
    asm volatile("mbarrier.init ...");
    // async TMA loads (per-stage)
    asm volatile("cp.async.bulk.tensor ...");
    asm volatile("mbarrier.arrive ...");
    // wait + WGMMA
    asm volatile("mbarrier.try_wait ...");
    asm volatile("wgmma.mma_async ...");
    // store + epilogue
    asm volatile("stmatrix.sync.aligned ...");
    // copy back to global
    asm volatile("cp.async.bulk.tensor ...");
  }
}`,
    highlight: false,
    lang: "cpp",
  },
  {
    label: "Triton",
    lines: 52,
    file: "matmul_persistent.py",
    code: `@triton.jit
def persistent_hilbert_gemm(
    a_ptr, b_ptr, c_ptr,
    M, N, K,
    sched_m_ptr, sched_n_ptr,
    total_tiles,
    BLOCK_M: tl.constexpr,
    BLOCK_N: tl.constexpr,
    BLOCK_K: tl.constexpr):
  pid = tl.program_id(0)
  num_sms = tl.num_programs(0)
  for tile in range(pid, total_tiles, num_sms):
    bm = tl.load(sched_m_ptr + tile)
    bn = tl.load(sched_n_ptr + tile)
    offs_m = bm * BLOCK_M + tl.arange(0, BLOCK_M)
    offs_n = bn * BLOCK_N + tl.arange(0, BLOCK_N)
    acc = tl.zeros([BLOCK_M, BLOCK_N], tl.float32)
    for k in range(0, K, BLOCK_K):
      offs_k = k + tl.arange(0, BLOCK_K)
      a = tl.load(a_ptr + offs_m[:, None] * K
                  + offs_k[None, :],
                  mask=offs_m[:, None] < M)
      b = tl.load(b_ptr + offs_n[:, None] * K
                  + offs_k[None, :],
                  mask=offs_n[:, None] < N)
      acc += tl.dot(a, b.T)
    c = acc.to(tl.float16)
    tl.store(c_ptr + offs_m[:, None] * N
             + offs_n[None, :], c,
             mask=(offs_m[:, None] < M)
                  & (offs_n[None, :] < N))`,
    highlight: false,
    lang: "python",
  },
  {
    label: "Helion",
    lines: 40,
    file: "matmul_persistent.py",
    code: `@helion.kernel
def persistent_hilbert_matmul(
    a: torch.Tensor,
    b: torch.Tensor,
    sched_m: torch.Tensor,
    sched_n: torch.Tensor,
) -> torch.Tensor:
  M, K = a.shape
  N, _ = b.shape
  total = sched_m.shape[0]
  out = torch.empty([M, N], dtype=a.dtype,
                    device=a.device)
  for tile in hl.tile(total):
    bm = sched_m[tile]  # Hilbert-ordered
    bn = sched_n[tile]
    tile_m = hl.tile(BLOCK_M) + bm * BLOCK_M
    tile_n = hl.tile(BLOCK_N) + bn * BLOCK_N
    acc = hl.zeros([BLOCK_M, BLOCK_N],
                   dtype=torch.float32)
    for tile_k in hl.tile(K, block_size=BLOCK_K):
      acc += a[tile_m, tile_k] @ b[tile_n, tile_k].T
    out[tile_m, tile_n] = acc.to(a.dtype)
  return out`,
    highlight: false,
    lang: "python",
  },
];

export function FeatureEasyToUse() {
  const t = useTranslations("features.easyToUse");
  const [activeCode, setActiveCode] = useState(0);

  const points = [t("point1"), t("point2"), t("point3"), t("point4")];

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

        {/* Framework selector */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap gap-2">
            {comparisons.map((c, i) => (
              <button
                key={c.label}
                onClick={() => setActiveCode(i)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  activeCode === i
                    ? c.highlight
                      ? "bg-mint-500 text-white shadow-lg shadow-mint-500/25"
                      : "bg-[var(--foreground)] text-[var(--background)]"
                    : "border hover:bg-[var(--muted)]"
                }`}
              >
                {c.label}
                <span className="ml-1.5 opacity-60">{c.lines}L</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <div className="rounded-xl border bg-[var(--card)] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-[var(--muted)]">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-[var(--muted-foreground)] ml-2 font-mono">
                {comparisons[activeCode].file}
              </span>
              {comparisons[activeCode].highlight && (
                <span className="ml-auto px-2 py-0.5 rounded text-[10px] font-bold bg-mint-500/15 text-mint-500">
                  CROKTILE
                </span>
              )}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-4 overflow-x-auto max-h-[360px] overflow-y-auto"
              >
                <HighlightedCode
                  code={comparisons[activeCode].code}
                  lang={comparisons[activeCode].lang}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* LOC comparison bars */}
        <ScrollReveal delay={0.3}>
          <div className="space-y-2 px-1">
            {comparisons.map((c, i) => (
              <div key={c.label} className="flex items-center gap-3">
                <span className="text-xs text-[var(--muted-foreground)] w-20 text-right font-medium shrink-0">
                  {c.label}
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(c.lines / 95) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.08 }}
                  className={`h-5 rounded flex items-center pl-2 ${
                    c.highlight
                      ? "bg-mint-500"
                      : "bg-gray-400 dark:bg-gray-600"
                  }`}
                >
                  <span className="text-[10px] font-bold text-white">
                    {c.lines}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
          <p className="text-xs text-center text-[var(--muted-foreground)] mt-2">
            Lines of code — persistent Hilbert-curve GEMM kernel
          </p>
        </ScrollReveal>
      </div>
    </FeatureCard>
  );
}
