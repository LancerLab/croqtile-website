type Paper = {
  title: string;
  authors: string;
  venue: string;
  doi?: string;
  artifact?: string;
  arxiv?: string;
  nomination?: boolean;
};

export const paperGroups: { key: "design" | "builtOn"; papers: Paper[] }[] = [
  {
    key: "design",
    papers: [
      {
        title: "A Novel AI-Native GPU Kernel Programming Language for Autonomous Kernel Tuning",
        authors: "Heng Shi et al.",
        venue: "ATC 2026",
        doi: "10.1145/3828523.3857041",
      },
      {
        title: "Signal-Aware Liveness Analysis for Shared Memory Optimization in Warp-Specialized GPU Kernels",
        authors: "Sijie Wu et al.",
        venue: "CGO 2027",
        artifact: "10.5281/zenodo.23254218",
      },
    ],
  },
  {
    key: "builtOn",
    papers: [
      {
        title: "Pushing the Limits of Structured Sparse GEMM on Hopper GPUs via Analytical Modeling",
        authors: "Heng Shi et al.",
        venue: "SC 2026",
      },
      {
        title: "Do We Need Tensor Cores for Stencil Computations?",
        authors: "Qiqi Gu et al.",
        venue: "SC 2026",
        arxiv: "2603.00477",
        nomination: true,
      },
      {
        title: "SptcAttn: Accelerating Long-Context Attention with Diagonal Stripes using Sparse Tensor Core",
        authors: "Chenpeng Wu et al.",
        venue: "ATC 2026",
        doi: "10.1145/3828523.3857028",
      },
    ],
  },
];
