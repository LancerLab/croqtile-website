(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighlightedCode",
    ()=>HighlightedCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const DARK = {
    keyword: "#ff7b72",
    type: "#79c0ff",
    storage: "#d2a8ff",
    function: "#d2a8ff",
    string: "#a5d6ff",
    comment: "#8b949e",
    number: "#79c0ff",
    operator: "#ff7b72",
    punctuation: "#8b949e",
    default: "#e6edf3"
};
const LIGHT = {
    keyword: "#cf222e",
    type: "#0550ae",
    storage: "#8250df",
    function: "#8250df",
    string: "#0a3069",
    comment: "#6e7781",
    number: "#0550ae",
    operator: "#cf222e",
    punctuation: "#6e7781",
    default: "#1f2328"
};
const CHOREO_KEYWORDS = new Set([
    "__co__",
    "__cok__",
    "__real_cok__",
    "__co_device__",
    "__device__",
    "parallel",
    "by",
    "with",
    "in",
    "foreach",
    "wait",
    "call",
    "select",
    "return",
    "where",
    "while",
    "break",
    "continue",
    "if",
    "else",
    "vectorize",
    "after",
    "cdiv",
    "inthreads",
    "for",
    "auto",
    "template",
    "inline",
    "extern",
    "const",
    "constexpr",
    "typename",
    "sizeof"
]);
const CHOREO_TYPES = new Set([
    "void",
    "bool",
    "int",
    "half",
    "float",
    "double",
    "f64",
    "f32",
    "f16",
    "bf16",
    "f8",
    "f8_e4m3",
    "f8_e5m2",
    "f8_ue4m3",
    "f8_ue8m0",
    "f6_e3m2",
    "f4_e2m1",
    "tf32",
    "u64",
    "s64",
    "u32",
    "s32",
    "u16",
    "s16",
    "u8",
    "s8",
    "u6",
    "s6",
    "u4",
    "s4",
    "u2",
    "s2",
    "u1",
    "size_t",
    "char"
]);
const CHOREO_STORAGE = new Set([
    "local",
    "shared",
    "global",
    "stream",
    "block",
    "group",
    "group-4",
    "thread",
    "device",
    "term",
    "mutable"
]);
const CHOREO_BUILTINS = new Set([
    "dma",
    "tma",
    "mma",
    "sync",
    "trigger",
    "assert",
    "swap",
    "rotate",
    "print",
    "println",
    "frag",
    "stage",
    "event"
]);
const CHOREO_METHODS = new Set([
    "copy",
    "transp",
    "pad",
    "swizzle",
    "swiz",
    "sp",
    "zfill",
    "any",
    "async",
    "span",
    "span_as",
    "mdata",
    "data",
    "view",
    "from",
    "chunkat",
    "chunk",
    "subspan",
    "modspan",
    "step",
    "stride",
    "at",
    "fill",
    "load",
    "store",
    "row",
    "col",
    "scale",
    "commit"
]);
const PYTHON_KEYWORDS = new Set([
    "def",
    "class",
    "return",
    "if",
    "else",
    "elif",
    "for",
    "in",
    "while",
    "break",
    "continue",
    "import",
    "from",
    "as",
    "with",
    "pass",
    "raise",
    "yield",
    "lambda",
    "not",
    "and",
    "or",
    "is",
    "None",
    "True",
    "False",
    "self",
    "range",
    "print"
]);
const C_KEYWORDS = new Set([
    "void",
    "int",
    "float",
    "double",
    "char",
    "unsigned",
    "signed",
    "long",
    "short",
    "const",
    "static",
    "extern",
    "inline",
    "volatile",
    "auto",
    "register",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "default",
    "goto",
    "struct",
    "union",
    "enum",
    "typedef",
    "sizeof",
    "__global__",
    "__device__",
    "__shared__",
    "__syncthreads",
    "__half2float",
    "template",
    "constexpr",
    "typename",
    "#pragma",
    "unroll"
]);
function tokenizeLine(line, lang) {
    const tokens = [];
    let pos = 0;
    const isChoreo = lang === "choreo" || lang === "co";
    const isPython = lang === "python" || lang === "py";
    const keywords = isChoreo ? CHOREO_KEYWORDS : isPython ? PYTHON_KEYWORDS : C_KEYWORDS;
    while(pos < line.length){
        if (line[pos] === "/" && line[pos + 1] === "/") {
            tokens.push({
                text: line.slice(pos),
                type: "comment"
            });
            break;
        }
        if (line[pos] === "#" && isPython) {
            tokens.push({
                text: line.slice(pos),
                type: "comment"
            });
            break;
        }
        if (line[pos] === "#" && !isPython && /^#(error|define|if|endif|include|pragma|elif|else)\b/.test(line.slice(pos))) {
            const match = line.slice(pos).match(/^#\w+/);
            if (match) {
                tokens.push({
                    text: match[0],
                    type: "keyword"
                });
                pos += match[0].length;
                tokens.push({
                    text: line.slice(pos),
                    type: "string"
                });
                break;
            }
        }
        if (line[pos] === '"') {
            let end = pos + 1;
            while(end < line.length && line[end] !== '"'){
                if (line[end] === "\\") end++;
                end++;
            }
            tokens.push({
                text: line.slice(pos, end + 1),
                type: "string"
            });
            pos = end + 1;
            continue;
        }
        if (line[pos] === "'") {
            if (isPython) {
                const tripleMatch = line.slice(pos).match(/^('{3}|"{3})/);
                if (tripleMatch) {
                    tokens.push({
                        text: line.slice(pos),
                        type: "string"
                    });
                    break;
                }
            }
            let end = pos + 1;
            while(end < line.length && line[end] !== "'"){
                if (line[end] === "\\") end++;
                end++;
            }
            tokens.push({
                text: line.slice(pos, end + 1),
                type: "string"
            });
            pos = end + 1;
            continue;
        }
        if (/\d/.test(line[pos]) || line[pos] === "." && pos + 1 < line.length && /\d/.test(line[pos + 1])) {
            const numMatch = line.slice(pos).match(/^(\d+\.?\d*[fFeE]?[+-]?\d*[fF]?|0[xX][0-9a-fA-F]+)/);
            if (numMatch) {
                tokens.push({
                    text: numMatch[0],
                    type: "number"
                });
                pos += numMatch[0].length;
                continue;
            }
        }
        if (line[pos] === "@" && isPython) {
            const decoMatch = line.slice(pos).match(/^@[a-zA-Z_][a-zA-Z0-9_.]*/);
            if (decoMatch) {
                tokens.push({
                    text: decoMatch[0],
                    type: "function"
                });
                pos += decoMatch[0].length;
                continue;
            }
        }
        if (/[a-zA-Z_]/.test(line[pos])) {
            const wordMatch = line.slice(pos).match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
            if (wordMatch) {
                const word = wordMatch[0];
                let type = "default";
                if (keywords.has(word)) {
                    type = "keyword";
                } else if (isChoreo && CHOREO_TYPES.has(word)) {
                    type = "type";
                } else if (isChoreo && CHOREO_STORAGE.has(word)) {
                    type = "storage";
                } else if (isChoreo && CHOREO_BUILTINS.has(word)) {
                    type = "function";
                } else if (isPython && /^(tl|hl|torch|triton|helion|cutlass|cute)$/.test(word)) {
                    type = "function";
                } else if (!isChoreo && !isPython && C_KEYWORDS.has(word)) {
                    type = "keyword";
                }
                tokens.push({
                    text: word,
                    type
                });
                pos += word.length;
                continue;
            }
        }
        if (line[pos] === "." && pos + 1 < line.length) {
            const methodMatch = line.slice(pos + 1).match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
            if (methodMatch && isChoreo && CHOREO_METHODS.has(methodMatch[0])) {
                tokens.push({
                    text: ".",
                    type: "punctuation"
                });
                tokens.push({
                    text: methodMatch[0],
                    type: "function"
                });
                pos += 1 + methodMatch[0].length;
                continue;
            }
            if (methodMatch && isPython) {
                tokens.push({
                    text: ".",
                    type: "punctuation"
                });
                const mName = methodMatch[0];
                const mType = /^(constexpr|program_id|num_programs|load|store|zeros|arange|dot|float16|float32|float8e4nv|to|cdiv|range|jit|autotune|Config|shape|stride|dtype|T|device|empty|matmul|synchronize|assert_close|get_device_properties)$/.test(mName) ? "function" : "default";
                tokens.push({
                    text: mName,
                    type: mType
                });
                pos += 1 + mName.length;
                continue;
            }
        }
        if (/^(=>|==|!=|<=|>=|&&|\|\||<<|>>|\+\+|--)/.test(line.slice(pos))) {
            const opMatch = line.slice(pos).match(/^(=>|==|!=|<=|>=|&&|\|\||<<|>>|\+\+|--)/);
            if (opMatch) {
                tokens.push({
                    text: opMatch[0],
                    type: "operator"
                });
                pos += opMatch[0].length;
                continue;
            }
        }
        if (/^[+\-*/%=<>&|!^~?:]/.test(line[pos])) {
            tokens.push({
                text: line[pos],
                type: "operator"
            });
            pos++;
            continue;
        }
        if (/^[{}()\[\];,]/.test(line[pos])) {
            tokens.push({
                text: line[pos],
                type: "punctuation"
            });
            pos++;
            continue;
        }
        tokens.push({
            text: line[pos],
            type: "default"
        });
        pos++;
    }
    return tokens;
}
function useIsDark() {
    _s();
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsDark.useEffect": ()=>{
            const check = {
                "useIsDark.useEffect.check": ()=>setIsDark(document.documentElement.classList.contains("dark"))
            }["useIsDark.useEffect.check"];
            check();
            const observer = new MutationObserver(check);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "useIsDark.useEffect": ()=>observer.disconnect()
            })["useIsDark.useEffect"];
        }
    }["useIsDark.useEffect"], []);
    return isDark;
}
_s(useIsDark, "76OfTKswtlYfcyBWk5XLQJOYEek=");
const HighlightedCode = /*#__PURE__*/ _s1((0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s1(function HighlightedCode({ code, lang = "choreo" }) {
    _s1();
    const isDark = useIsDark();
    const palette = isDark ? DARK : LIGHT;
    const lines = code.split("\n");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
        className: "text-[13px] leading-[1.7] text-left whitespace-pre overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
            children: lines.map((line, lineIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        tokenizeLine(line, lang).map((token, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: palette[token.type]
                                },
                                children: token.text
                            }, i, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx",
                                lineNumber: 260,
                                columnNumber: 15
                            }, this)),
                        line === "" && "\n"
                    ]
                }, lineIdx, true, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx",
                    lineNumber: 258,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}, "FyXSxoc0NwKfL/HxX0UiP8Y0iMw=", false, function() {
    return [
        useIsDark
    ];
})), "FyXSxoc0NwKfL/HxX0UiP8Y0iMw=", false, function() {
    return [
        useIsDark
    ];
});
_c1 = HighlightedCode;
var _c, _c1;
__turbopack_context__.k.register(_c, "HighlightedCode$memo");
__turbopack_context__.k.register(_c1, "HighlightedCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$HighlightedCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const codeExamples = [
    {
        label: "Sparse GEMM (FP8 E4M3)",
        file: "gemm_sp_e4m3.co",
        code: `__co__ void spmm(
    global f8_e4m3 [M, PACKED_K] lhs_packed,
    global u8 [M, META_COLS] lhs_meta,
    global f8_e4m3 [N, K] rhs,
    global f16 [M, N] output) {
  parallel {block_m, block_n}
      by [cdiv(M, SPMM_WARP_M),
          cdiv(N, SPMM_WARP_N)] : block {
    shared event full[STAGES], empty[STAGES];
    shared f8_e4m3 [STAGES * SPMM_WARP_M,
                    SPMM_PACKED_TILE_K] lhs_s;
    shared f8_e4m3 [STAGES * SPMM_WARP_N,
                    SPMM_TILE_K] rhs_s;

    parallel p1 by 2 : group-4 {
      inthreads.async (p1 == 0) {
        foreach {iv_k} in [cdiv(K, SPMM_TILE_K)] {
          stage = iv_k % STAGES;
          wait empty[stage];
          tma.copy.async<full[stage]>.swiz<32>
            lhs_packed.subspan(SPMM_WARP_M,
              SPMM_PACKED_TILE_K).at(block_m, iv_k)
            => lhs_s.subspan(SPMM_WARP_M,
              SPMM_PACKED_TILE_K).at(stage, 0);
          trigger full[stage];
        }
      }
      inthreads.async (p1 == 1) {
        mc = mma.fill.f16 0.0f;
        foreach {iv_k} in [cdiv(K, SPMM_TILE_K)] {
          wait full[iv_k % STAGES];
          ma = mma.load.swiz<32>
            lhs_s.at(iv_k % STAGES, 0);
          mb = mma.load.swiz<64>
            rhs_s.at(iv_k % STAGES, 0);
          me = mma.load lhs_meta_s;
          mma.row.row.sp mc, ma, mb, me;
          trigger empty[iv_k % STAGES];
        }
        mma.store mc, output_s;
        tma.copy output_s
          => output.subspan(SPMM_WARP_M,
             SPMM_WARP_N).at(block_m, block_n);
      }
    }
  }
}`
    },
    {
        label: "Fused MoE (FP8→BF16)",
        file: "moe_gemm.co",
        code: `__co__ void moe_gemm_kernel_bf16(
    global f8_e4m3 [M, K] lhs,
    global f32 [M, DIV_BLK_K] scale_a,
    global f8_e4m3 [EXPERT_N, K] rhs,
    global f32 [EXPERT_DIV_BLK_N, DIV_BLK_K] scale_b,
    global s32 [EXPERTS1] expert_offsets,
    global bf16 [M, N] output, stream s) {

  parallel.async {eid, block_n}
    by [EXPERTS, cdiv(N, WARP_N)] : block
  parallel by 1 : group-4
  parallel t by 128 : thread {
    shared f8_e4m3 [WARP_M, TILE_K] sA;
    shared f8_e4m3 [WARP_N, TILE_K] sB;

    s32 seg_start = expert_offsets.at(eid);
    s32 seg_end   = expert_offsets.at(eid + 1);

    foreach {iv_m} in [cdiv(seg_end-seg_start,
                            WARP_M)] {
      mc = mma.fill.f32 0.0f;
      foreach {iv_k} in [cdiv(K, TILE_K)] {
        dma.copy.swiz<128>.zfill
          lhs.view(WARP_M, TILE_K)
            .from(seg_start + iv_m*WARP_M,
                  iv_k*TILE_K) => sA;
        tma.copy.swiz<128>
          rhs.subspan(WARP_N, TILE_K)
            .at(eid # block_n, iv_k) => sB;
        ma = mma.load.swiz<128> sA;
        mb = mma.load.swiz<128> sB;
        mma.row.row mc, ma, mb;
        mma.scale mc,
          scale_a.view(WARP_M, 1)
            .from(seg_start+iv_m*WARP_M, iv_k),
          scale_b.at(eid # block_n, iv_k);
      }
      mma.store mc, output.view(TILE_M, WARP_N)
        .from(seg_start+iv_m*WARP_M,
              block_n*WARP_N);
    }
  }
}`
    },
    {
        label: "Persistent Hilbert GEMM",
        file: "matmul_hilbert.co",
        code: `// Persistent kernel with Hilbert curve
// tile scheduling for L2 cache locality
__co__ void matmul(
    global f16 [M, K] lhs,
    global f16 [N, K] rhs,
    global f16 [M, N] output,
    global s32 [T] schedule_m,
    global s32 [T] schedule_n) {

  int total_tiles = cdiv(M, WARP_M)
                  * cdiv(N, WARP_N);

  parallel block_id by NUM_SMS : block {
    shared f16 [WARP_M, TILE_K] lhs_s;
    shared f16 [WARP_N, TILE_K] rhs_s;
    shared f16 [WARP_M, WARP_N] out_s;

    foreach {tile_iter}
        in [cdiv(total_tiles, NUM_SMS)] {
      tile_id = tile_iter # block_id;
      if (tile_id < total_tiles) {
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
        tma.copy out_s
          => output.subspan(WARP_M, WARP_N)
               .at(bm, bn);
      }
    }
  }
}`
    }
];
function Hero() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("hero");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleTabChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hero.useCallback[handleTabChange]": (idx)=>{
            setActiveTab(idx);
        }
    }["Hero.useCallback[handleTabChange]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid opacity-40 dark:opacity-20"
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full bg-mint-400/10 dark:bg-mint-500/5 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-28 sm:pb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5
                            },
                            className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-[var(--card)] text-sm mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full bg-mint-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--muted-foreground)]",
                                    children: "Open Source · Production Ready"
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.1
                            },
                            className: "text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.08]",
                            children: t("tagline")
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.2
                            },
                            className: "mt-6 text-lg sm:text-xl text-[var(--muted-foreground)] max-w-2xl leading-relaxed",
                            children: t("subtitle")
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.5,
                                delay: 0.3
                            },
                            className: "mt-10 flex flex-col sm:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    href: "/docs",
                                    className: "px-8 py-3.5 text-sm font-semibold bg-mint-500 text-white rounded-xl hover:bg-mint-600 transition-all shadow-lg shadow-mint-500/25 hover:shadow-mint-500/40 hover:scale-[1.02] active:scale-[0.98]",
                                    children: t("cta")
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/codes1gn/croktile",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-8 py-3.5 text-sm font-semibold border rounded-xl hover:bg-[var(--muted)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                            lineNumber: 226,
                                            columnNumber: 15
                                        }, this),
                                        "View on GitHub"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 30
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.5
                            },
                            className: "mt-16 w-full max-w-4xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border bg-[var(--card)] overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center border-b bg-[var(--muted)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 px-4 py-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded-full bg-red-400/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded-full bg-yellow-400/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                        lineNumber: 244,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 rounded-full bg-green-400/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                lineNumber: 242,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-0 ml-2",
                                                children: codeExamples.map((ex, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleTabChange(i),
                                                        className: `px-4 py-2.5 text-xs font-medium transition-all border-b-2 ${activeTab === i ? "text-mint-500 border-mint-500 bg-[var(--card)]" : "text-[var(--muted-foreground)] border-transparent hover:text-[var(--foreground)] hover:bg-[var(--card)]/50"}`,
                                                        children: ex.file
                                                    }, ex.label, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative p-5 min-h-[340px] sm:min-h-[380px] font-mono overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                            mode: "wait",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                exit: {
                                                    opacity: 0
                                                },
                                                transition: {
                                                    duration: 0.15
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$HighlightedCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedCode"], {
                                                    code: codeExamples[activeTab].code
                                                }, void 0, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this)
                                            }, activeTab, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-2 px-5 py-3 border-t bg-[var(--muted)]/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-[var(--muted-foreground)]",
                                                children: codeExamples[activeTab].label
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                lineNumber: 279,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-auto text-xs text-[var(--muted-foreground)]",
                                                children: "Real production kernel from choreo repository"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                                lineNumber: 240,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/Hero.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(Hero, "7vSmetPj5AxWcTEl+KK80a3yw7w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const defaultVariants = {
    hidden: {
        opacity: 0,
        y: 32
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.25,
                0.4,
                0.25,
                1
            ]
        }
    }
};
const reducedMotionVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2
        }
    }
};
function ScrollReveal({ children, className, variants = defaultVariants, delay = 0 }) {
    _s();
    const prefersReduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            margin: "-80px"
        },
        variants: prefersReduced ? reducedMotionVariants : variants,
        transition: {
            delay: prefersReduced ? 0 : delay
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(ScrollReveal, "+unYVajia9EPCCnuCfd4PsBxgcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureCard",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
"use client";
;
;
function FeatureCard({ icon, title, subtitle, description, descBullets, children, reversed = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 sm:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-mint-500/10 text-mint-600 dark:text-mint-400 text-sm font-medium mb-6",
                                    children: [
                                        icon,
                                        subtitle
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold tracking-tight mb-4",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                descBullets && descBullets.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2",
                                    children: descBullets.map((bullet, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-2.5 text-base text-[var(--muted-foreground)] leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 mt-2.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 23
                                                }, this),
                                                bullet
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                                            lineNumber: 45,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                                    lineNumber: 43,
                                    columnNumber: 17
                                }, this) : description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-[var(--muted-foreground)] leading-relaxed",
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full max-w-xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: 0.15,
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureEasyToUse",
    ()=>FeatureEasyToUse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$HighlightedCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
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
        source: ""
    },
    {
        label: "Triton",
        lines: 64,
        file: "09-persistent-matmul.py",
        code: `@triton.jit
def _compute_pid(tile_id, num_pid_in_group,
                 num_pid_m, GROUP_SIZE_M, NUM_SMS):
  group_id = tile_id // num_pid_in_group
  first_pid_m = group_id * GROUP_SIZE_M
  group_size_m = min(num_pid_m - first_pid_m,
                     GROUP_SIZE_M)
  pid_m = first_pid_m + (tile_id % group_size_m)
  pid_n = (tile_id % num_pid_in_group) // group_size_m
  return pid_m, pid_n

@triton.jit
def matmul_kernel_persistent(
    a_ptr, b_ptr, c_ptr,
    M, N, K,
    stride_am, stride_ak,
    stride_bk, stride_bn,
    stride_cm, stride_cn,
    BLOCK_SIZE_M: tl.constexpr,
    BLOCK_SIZE_N: tl.constexpr,
    BLOCK_SIZE_K: tl.constexpr,
    GROUP_SIZE_M: tl.constexpr,
    NUM_SMS: tl.constexpr):
  start_pid = tl.program_id(axis=0)
  num_pid_m = tl.cdiv(M, BLOCK_SIZE_M)
  num_pid_n = tl.cdiv(N, BLOCK_SIZE_N)
  k_tiles = tl.cdiv(K, BLOCK_SIZE_K)
  num_tiles = num_pid_m * num_pid_n
  tile_id_c = start_pid - NUM_SMS
  num_pid_in_group = GROUP_SIZE_M * num_pid_n
  offs_k_for_mask = tl.arange(0, BLOCK_SIZE_K)

  for tile_id in tl.range(start_pid, num_tiles,
                          NUM_SMS, flatten=True):
    pid_m, pid_n = _compute_pid(
      tile_id, num_pid_in_group,
      num_pid_m, GROUP_SIZE_M, NUM_SMS)
    start_m = pid_m * BLOCK_SIZE_M
    start_n = pid_n * BLOCK_SIZE_N
    offs_am = start_m + tl.arange(0, BLOCK_SIZE_M)
    offs_bn = start_n + tl.arange(0, BLOCK_SIZE_N)
    offs_am = tl.where(offs_am < M, offs_am, 0)
    offs_bn = tl.where(offs_bn < N, offs_bn, 0)
    offs_am = tl.max_contiguous(
      tl.multiple_of(offs_am, BLOCK_SIZE_M),
      BLOCK_SIZE_M)
    offs_bn = tl.max_contiguous(
      tl.multiple_of(offs_bn, BLOCK_SIZE_N),
      BLOCK_SIZE_N)
    accumulator = tl.zeros(
      (BLOCK_SIZE_M, BLOCK_SIZE_N), dtype=tl.float32)
    for ki in range(k_tiles):
      offs_k = ki * BLOCK_SIZE_K
             + tl.arange(0, BLOCK_SIZE_K)
      a_ptrs = a_ptr + (offs_am[:, None] * stride_am
             + offs_k[None, :] * stride_ak)
      b_ptrs = b_ptr + (offs_k[:, None] * stride_bk
             + offs_bn[None, :] * stride_bn)
      a = tl.load(a_ptrs, mask=offs_k_for_mask[None,:]
                   < K - ki * BLOCK_SIZE_K, other=0.0)
      b = tl.load(b_ptrs, mask=offs_k_for_mask[:,None]
                   < K - ki * BLOCK_SIZE_K, other=0.0)
      accumulator = tl.dot(a, b, accumulator)
    tile_id_c += NUM_SMS
    pid_m, pid_n = _compute_pid(tile_id_c,
      num_pid_in_group, num_pid_m,
      GROUP_SIZE_M, NUM_SMS)
    offs_cm = pid_m*BLOCK_SIZE_M+tl.arange(0,BLOCK_SIZE_M)
    offs_cn = pid_n*BLOCK_SIZE_N+tl.arange(0,BLOCK_SIZE_N)
    c_ptrs = c_ptr + stride_cm * offs_cm[:, None]
           + stride_cn * offs_cn[None, :]
    c_mask = (offs_cm[:,None]<M) & (offs_cn[None,:]<N)
    c = accumulator.to(tl.float16)
    tl.store(c_ptrs, c, mask=c_mask)`,
        highlight: false,
        lang: "python",
        source: "triton-lang/triton/tutorials/09-persistent-matmul.py"
    },
    {
        label: "CUTLASS (CuTeDSL)",
        lines: 280,
        file: "dense_gemm.py",
        code: `class HopperWgmmaGemmKernel:
  def __init__(self, acc_dtype, tile_shape_mn,
               cluster_shape_mn):
    self.acc_dtype = acc_dtype
    self.cluster_shape_mn = cluster_shape_mn
    self.tile_shape_mnk = (*tile_shape_mn, 1)
    self.atom_layout_mnk = (
      (2,1,1) if tile_shape_mn[0] > 64
      and tile_shape_mn[1] > 128 else (1,1,1))
    self.mma_warp_groups = math.prod(
      self.atom_layout_mnk)
    self.threads_per_cta = (self.mma_warp_groups
      * 128)
    self.smem_capacity = utils \
      .get_smem_capacity_in_bytes("sm_90")
    self.ab_stage = None
    self.epi_stage = None
    self.shared_storage = None

  def _setup_attributes(self):
    self.tile_shape_mnk = (*self.tile_shape_mnk[:2],
      utils.get_k_tile_size(
        self.a_dtype, self.b_dtype))
    self.tiled_mma = sm90_utils \
      .make_trivial_tiled_mma(
        self.a_dtype, self.b_dtype,
        self.a_major, self.b_major,
        self.acc_dtype, self.atom_layout_mnk,
        tiler_mn=(64, self.tile_shape_mnk[1]))
    smem_a = cute.coalesce(sm90_utils
      .make_smem_layout(self.a_dtype,
        self.tile_shape_mnk, self.a_major, 'a'))
    smem_b = cute.coalesce(sm90_utils
      .make_smem_layout(self.b_dtype,
        self.tile_shape_mnk, self.b_major, 'b'))
    ab_smem_bytes = (cute.size(smem_a)
      * cute.sizeof(self.a_dtype)
      + cute.size(smem_b)
      * cute.sizeof(self.b_dtype))
    self.ab_stage = min(self.smem_capacity
      // ab_smem_bytes, 7)
    self.a_smem_layout_staged = cute.blocked_product(
      smem_a, (1, 1, self.ab_stage))
    self.b_smem_layout_staged = cute.blocked_product(
      smem_b, (1, 1, self.ab_stage))
    epi_smem = cute.make_layout(
      (*self.tile_shape_mnk[:2],),
      (*utils.compact_col_major(
        *self.tile_shape_mnk[:2]),))
    epi_bytes = cute.size(epi_smem) * cute.sizeof(
      self.c_dtype)
    self.epi_stage = min(self.smem_capacity
      // epi_bytes, 2)
    self.epi_smem_layout_staged = \
      cute.blocked_product(epi_smem,
        (1, 1, self.epi_stage))
    self.epi_tile = cute.make_shape(
      self.tile_shape_mnk[0],
      self.tile_shape_mnk[1])

  def __call__(self, mA, mB, mC, stream):
    self.a_dtype = mA.element_type
    self.b_dtype = mB.element_type
    self.c_dtype = mC.element_type
    self.a_major = utils.get_major(mA)
    self.b_major = utils.get_major(mB)
    self._setup_attributes()
    tma_a, tma_tA = cute.nvgpu.cpasync \
      .make_tiled_tma_atom(
        cute.nvgpu.cpasync
          .CopyBulkTensorTileG2SOp(),
        mA, self.a_smem_layout_staged,
        self.tile_shape_mnk,
        num_multicast=self.cluster_shape_mn[0])
    tma_b, tma_tB = cute.nvgpu.cpasync \
      .make_tiled_tma_atom(
        cute.nvgpu.cpasync
          .CopyBulkTensorTileG2SOp(),
        mB, self.b_smem_layout_staged,
        cute.make_shape(self.tile_shape_mnk[1],
          self.tile_shape_mnk[2]),
        num_multicast=self.cluster_shape_mn[1])
    M = cute.size(cute.shape(mA), 0)
    N = cute.size(cute.shape(mB), 0)
    grid_m = cute.ceil_div(M, self.tile_shape_mnk[0])
    grid_n = cute.ceil_div(N, self.tile_shape_mnk[1])
    blocks = (grid_m*grid_n, 1, cute.size(
      cute.shape(mA), 2))
    self.kernel[blocks, self.threads_per_cta,
      stream](tma_a, mA, tma_b, mB, mC,
        self.ab_stage, self.epi_stage)

  @cute.kernel
  def kernel(self, tma_atom_a, mA_mkl,
    tma_atom_b, mB_nkl, mC_mnl,
    ab_stage, epi_stage):
    bidx = cute.arch.block_idx()
    tidx = cute.arch.thread_idx()
    M = cute.size(cute.shape(mA_mkl), 0)
    N = cute.size(cute.shape(mB_nkl), 0)
    K = cute.size(cute.shape(mA_mkl), 1)
    grid_m = cute.ceil_div(M,
      self.tile_shape_mnk[0])
    grid_n = cute.ceil_div(N,
      self.tile_shape_mnk[1])
    k_tile_cnt = cute.ceil_div(K,
      self.tile_shape_mnk[2])
    tile_m = bidx.x % grid_m
    tile_n = bidx.x // grid_m
    batch = bidx.z

    sA = cute.make_tensor(cute.smem(
      self.shared_storage.sA),
      self.a_smem_layout_staged)
    sB = cute.make_tensor(cute.smem(
      self.shared_storage.sB),
      self.b_smem_layout_staged)
    pipeline = cute.nvgpu.make_pipeline(
      ab_stage, self.threads_per_cta)
    tma_bar = cute.nvgpu.make_tma_barrier(
      ab_stage)
    mA_mk = mA_mkl[:, :, batch]
    mB_nk = mB_nkl[:, :, batch]
    mC_mn = mC_mnl[:, :, batch]
    gA = cute.local_tile(mA_mk,
      self.tile_shape_mnk[:2], (tile_m, cute._))
    gB = cute.local_tile(mB_nk,
      cute.make_shape(self.tile_shape_mnk[1],
        self.tile_shape_mnk[2]),
      (tile_n, cute._))
    tiled_copy_a = cute.make_tiled_copy(tma_atom_a,
      cute.make_layout((1,)),
      cute.make_layout((1,)))
    tAgA = tiled_copy_a.partition_S(gA)
    tAsA = tiled_copy_a.partition_D(sA)
    tiled_copy_b = cute.make_tiled_copy(tma_atom_b,
      cute.make_layout((1,)),
      cute.make_layout((1,)))
    tBgB = tiled_copy_b.partition_S(gB)
    tBsB = tiled_copy_b.partition_D(sB)
    tiled_mma = self.tiled_mma
    thr_mma = tiled_mma.get_slice(tidx)
    tCsA = thr_mma.partition_A(sA)
    tCsB = thr_mma.partition_B(sB)
    tCrC = thr_mma.partition_C(
      cute.make_tensor(self.acc_dtype,
        tiled_mma.get_shape_mnk()))
    cute.fill(tCrC, 0)
    pipeline.producer_acquire(0)
    for ki in cutlass.range(k_tile_cnt):
      stage = ki % ab_stage
      cute.copy(tma_atom_a, tAgA[:,:,ki],
        tAsA[:,:,stage],
        tma_bar_ptr=tma_bar[stage],
        mcast_mask=cute.nvgpu.elect_mcast_mask(
          self.cluster_shape_mn[0]))
      cute.copy(tma_atom_b, tBgB[:,:,ki],
        tBsB[:,:,stage],
        tma_bar_ptr=tma_bar[stage],
        mcast_mask=cute.nvgpu.elect_mcast_mask(
          self.cluster_shape_mn[1]))
      pipeline.producer_commit(stage)
      next_stage = (ki + 1) % ab_stage
      pipeline.producer_acquire(next_stage)
      pipeline.consumer_wait(stage)
      cute.gemm(tiled_mma,
        tCsA[:,:,:,stage],
        tCsB[:,:,:,stage], tCrC)
      pipeline.consumer_release(stage)
    gC = cute.local_tile(mC_mn,
      self.epi_tile, (tile_m, tile_n))
    tCgC = thr_mma.partition_C(gC)
    cute.copy(tCrC, tCgC)`,
        highlight: false,
        lang: "python",
        source: "NVIDIA/cutlass examples/python/CuTeDSL/hopper/dense_gemm.py"
    },
    {
        label: "CUDA + CuTe",
        lines: 182,
        file: "persistent_gemm_sm90.cu",
        code: `using namespace cute;
using namespace cutlass;

template <class TileShape, class ClusterShape,
  int Stages, class TiledMma,
  class GmemTiledCopyA, class GmemTiledCopyB,
  class SmemLayoutA, class SmemLayoutB>
struct PersistentGemmKernel {
  using MainloopPipeline =
    typename cutlass::PipelineTmaAsync<Stages>;
  using PipelineState =
    typename MainloopPipeline::PipelineState;
  using SharedStorage = SharedStorageType<
    SmemLayoutA, SmemLayoutB, Stages>;

  static constexpr int NumThreads =
    size(TiledMma{});
  static constexpr int SharedSize =
    sizeof(SharedStorage);

  struct Params {
    typename GmemTiledCopyA::Params tma_a;
    typename GmemTiledCopyB::Params tma_b;
    cute::Shape<int,int,int> problem_shape;
    typename PersistentTileSchedulerSm90::Params
      scheduler;
  };

  __device__ void operator()(Params const& params) {
    int warp_group_idx =
      canonical_warp_group_idx();
    int lane_predicate =
      cute::elect_one_sync();
    auto [M, N, K] = params.problem_shape;
    int k_tiles = cute::ceil_div(K,
      get<2>(TileShape{}));
    SharedStorage& storage =
      *reinterpret_cast<SharedStorage*>(
        cute::declare_smem<char, SharedSize>());
    auto& smem_a = storage.smem_a;
    auto& smem_b = storage.smem_b;
    MainloopPipeline pipeline(
      storage.pipeline_storage,
      {warp_group_idx == 0, NumThreads});
    PipelineState smem_pipe_read;
    PipelineState smem_pipe_write =
      cute::make_producer_start_state<
        MainloopPipeline>();

    PersistentTileSchedulerSm90 scheduler(
      params.scheduler, blockIdx, gridDim);
    auto work = scheduler
      .initial_work_tile_info();

    Tensor mA = make_tensor(
      make_gmem_ptr(params.tma_a.gmem_ptr),
      make_shape(M, K),
      params.tma_a.dGmem);
    Tensor mB = make_tensor(
      make_gmem_ptr(params.tma_b.gmem_ptr),
      make_shape(N, K),
      params.tma_b.dGmem);

    TiledMma tiled_mma;
    auto thr_mma = tiled_mma.get_slice(
      threadIdx.x);
    Tensor sA = make_tensor(
      make_smem_ptr(smem_a.data()), SmemLayoutA{});
    Tensor sB = make_tensor(
      make_smem_ptr(smem_b.data()), SmemLayoutB{});

    GmemTiledCopyA gmem_tiled_copy_a;
    GmemTiledCopyB gmem_tiled_copy_b;
    auto tma_a = gmem_tiled_copy_a.get_slice(0);
    auto tma_b = gmem_tiled_copy_b.get_slice(0);
    Tensor tAsA = tma_a.partition_D(sA);
    Tensor tBsB = tma_b.partition_D(sB);

    if (warp_group_idx == 0) {
      while (work.is_valid_tile) {
        int tile_m = work.M_idx;
        int tile_n = work.N_idx;
        Tensor gA = local_tile(mA,
          TileShape{}, make_coord(tile_m, _));
        Tensor gB = local_tile(mB,
          TileShape{}, make_coord(tile_n, _));
        Tensor tAgA = tma_a.partition_S(gA);
        Tensor tBgB = tma_b.partition_S(gB);
        for (int k = 0; k < k_tiles; ++k) {
          pipeline.producer_acquire(
            smem_pipe_write);
          if (lane_predicate) {
            copy(gmem_tiled_copy_a,
              tAgA(_, _, _, k),
              tAsA(_, _, _, smem_pipe_write
                .index()));
            copy(gmem_tiled_copy_b,
              tBgB(_, _, _, k),
              tBsB(_, _, _, smem_pipe_write
                .index()));
          }
          pipeline.producer_commit(
            smem_pipe_write);
          ++smem_pipe_write;
        }
        scheduler.advance_to_next_work();
        work = scheduler.get_current_work();
      }
    } else {
      Tensor tCsA = thr_mma.partition_A(sA);
      Tensor tCsB = thr_mma.partition_B(sB);
      auto accum = partition_fragment_C(
        tiled_mma, take<0,2>(TileShape{}));
      while (work.is_valid_tile) {
        clear(accum);
        for (int k = 0; k < k_tiles; ++k) {
          pipeline.consumer_wait(smem_pipe_read);
          warpgroup_arrive();
          gemm(tiled_mma, accum,
            tCsA(_, _, _, smem_pipe_read.index()),
            tCsB(_, _, _, smem_pipe_read.index()),
            accum);
          warpgroup_commit_batch();
          warpgroup_wait<0>();
          pipeline.consumer_release(
            smem_pipe_read);
          ++smem_pipe_read;
        }
        Tensor mC = make_tensor(
          make_gmem_ptr(params.output),
          make_shape(M, N), params.dC);
        Tensor gC = local_tile(mC,
          take<0,2>(TileShape{}),
          make_coord(work.M_idx, work.N_idx));
        Tensor tCgC = thr_mma.partition_C(gC);
        copy(accum, tCgC);
        scheduler.advance_to_next_work();
        work = scheduler.get_current_work();
      }
    }
  }
};`,
        highlight: false,
        lang: "cpp",
        source: "NVIDIA/cutlass sm90_gemm_tma_warpspecialized_pingpong"
    }
];
function FeatureEasyToUse() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("features.easyToUse");
    const [activeCode, setActiveCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const points = [
        t("point1"),
        t("point2"),
        t("point3"),
        t("point4")
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                lineNumber: 481,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
            lineNumber: 480,
            columnNumber: 9
        }, this),
        title: t("title"),
        subtitle: t("subtitle"),
        descBullets: [
            t("desc1"),
            t("desc2"),
            t("desc3"),
            t("desc4")
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                    children: points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.05,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-mint-500 shrink-0 mt-0.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20 6L9 17l-5-5"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                            lineNumber: 494,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 493,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--muted-foreground)]",
                                        children: point
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 496,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                lineNumber: 492,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                            lineNumber: 491,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                    lineNumber: 489,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: comparisons.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCode(i),
                                className: `px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${activeCode === i ? c.highlight ? "bg-mint-500 text-white shadow-lg shadow-mint-500/25" : "bg-[var(--foreground)] text-[var(--background)]" : "border hover:bg-[var(--muted)]"}`,
                                children: [
                                    c.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1.5 opacity-60",
                                        children: [
                                            c.lines,
                                            "L"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 518,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.label, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                lineNumber: 506,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                    lineNumber: 503,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.25,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border bg-[var(--card)] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-4 py-2.5 border-b bg-[var(--muted)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-red-400/80"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                                lineNumber: 528,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-yellow-400/80"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                                lineNumber: 529,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-green-400/80"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                                lineNumber: 530,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 527,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-[var(--muted-foreground)] ml-2 font-mono",
                                        children: comparisons[activeCode].file
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this),
                                    comparisons[activeCode].highlight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto px-2 py-0.5 rounded text-[10px] font-bold bg-mint-500/15 text-mint-500",
                                        children: "CROKTILE"
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 536,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                lineNumber: 526,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 8
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -8
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    className: "p-4 overflow-x-auto max-h-[420px] overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$HighlightedCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedCode"], {
                                        code: comparisons[activeCode].code,
                                        lang: comparisons[activeCode].lang
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                        lineNumber: 550,
                                        columnNumber: 17
                                    }, this)
                                }, activeCode, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                    lineNumber: 542,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                lineNumber: 541,
                                columnNumber: 13
                            }, this),
                            comparisons[activeCode].source && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-1.5 border-t text-[10px] text-[var(--muted-foreground)] font-mono truncate",
                                children: [
                                    "Source: ",
                                    comparisons[activeCode].source
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                lineNumber: 557,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                        lineNumber: 525,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                    lineNumber: 524,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 px-1",
                            children: comparisons.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[var(--muted-foreground)] w-28 text-right font-medium shrink-0",
                                            children: c.label
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                            lineNumber: 569,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                width: 0
                                            },
                                            whileInView: {
                                                width: `${c.lines / 280 * 100}%`
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.8,
                                                delay: 0.3 + i * 0.08
                                            },
                                            className: `h-5 rounded flex items-center pl-2 ${c.highlight ? "bg-mint-500" : "bg-gray-400 dark:bg-gray-600"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold text-white",
                                                children: c.lines
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                                lineNumber: 583,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.label, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                            lineNumber: 566,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-center text-[var(--muted-foreground)] mt-2",
                            children: "Lines of code — persistent warp-specialized GEMM kernel"
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                            lineNumber: 590,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
                    lineNumber: 565,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
            lineNumber: 488,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureEasyToUse.tsx",
        lineNumber: 478,
        columnNumber: 5
    }, this);
}
_s(FeatureEasyToUse, "k6EG1FZyPfsssbGeTmECg3Jo6HQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = FeatureEasyToUse;
var _c;
__turbopack_context__.k.register(_c, "FeatureEasyToUse");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureSafety",
    ()=>FeatureSafety
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const compileChecks = [
    {
        module: "earlysema.cpp",
        count: 189,
        category: "Early Semantic Analysis",
        examples: [
            "type mismatch in SELECT",
            "invalid parallel nesting",
            "undeclared variable in __co__ scope"
        ]
    },
    {
        module: "semacheck.cpp",
        count: 65,
        category: "Semantic Validation",
        examples: [
            "inconsistent shapes for spanned-operation",
            "invalid DMA target memory space",
            "MMA: matrix shapes do not match"
        ]
    },
    {
        module: "typeinfer.cpp",
        count: 38,
        category: "Type Inference",
        examples: [
            "cannot infer element type",
            "conflicting types in reduction",
            "incompatible accumulator dtype"
        ]
    },
    {
        module: "shapeinfer.cpp",
        count: 33,
        category: "Shape Inference",
        examples: [
            "tiling factor exceeds data size",
            "index out of bounds for dimension",
            "span size mismatch in chunkat"
        ]
    },
    {
        module: "loop_vectorize.cpp",
        count: 16,
        category: "Loop Vectorization",
        examples: [
            "vectorize factor not divisible",
            "invalid loop bounds for SIMD"
        ]
    },
    {
        module: "assess.cpp",
        count: 4,
        category: "Static Assessment",
        examples: [
            "shape incompatibility proven at compile time"
        ]
    },
    {
        module: "codegen + others",
        count: 8,
        category: "Code Generation",
        examples: [
            "target architecture constraint violated",
            "DMA size exceeds 2^32 bytes"
        ]
    }
];
const runtimeChecks = [
    {
        type: "runtime_check()",
        count: 128,
        what: "Host-side shape/alignment checks emitted by codegen",
        examples: [
            "k % 64 == 0",
            "DMA transfer size within limit",
            "tensor dimension > 0"
        ]
    },
    {
        type: "choreo_assert()",
        count: 558,
        what: "Verification assertions in test/benchmark kernels",
        examples: [
            "values are not equal",
            "result shape matches expected",
            "memory bounds valid"
        ]
    },
    {
        type: "#error",
        count: 633,
        what: "Compile-time config validation in kernel headers",
        examples: [
            "WARP_M must be 64 for WGMMA",
            "TILE_K must equal 2 * PACKED_TILE_K",
            "SWIZ must be 32, 64, or 128"
        ]
    }
];
const totalCompileChecks = compileChecks.reduce((s, c)=>s + c.count, 0);
const totalRuntimeChecks = runtimeChecks.reduce((s, c)=>s + c.count, 0);
function FeatureSafety() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("features.safety");
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("compile");
    const points = [
        t("point1"),
        t("point2"),
        t("point3")
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                lineNumber: 38,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this),
        title: t("title"),
        subtitle: t("subtitle"),
        descBullets: [
            t("desc1"),
            t("desc2"),
            t("desc3"),
            t("desc4")
        ],
        reversed: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.05,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-mint-500 shrink-0 mt-0.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--muted-foreground)]",
                                        children: point
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("compile"),
                                className: `flex-1 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === "compile" ? "bg-red-500/10 text-red-500 border border-red-500/30" : "border hover:bg-[var(--muted)]"}`,
                                children: [
                                    "Compile-time · ",
                                    totalCompileChecks,
                                    " checks"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab("runtime"),
                                className: `flex-1 py-2.5 rounded-lg text-xs font-medium transition-all ${activeTab === "runtime" ? "bg-mint-500/10 text-mint-500 border border-mint-500/30" : "border hover:bg-[var(--muted)]"}`,
                                children: [
                                    "Runtime · ",
                                    totalRuntimeChecks,
                                    " assertions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: activeTab === "compile" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -8
                            },
                            className: "rounded-xl border overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-2.5 border-b bg-[var(--muted)] flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-[var(--muted-foreground)]",
                                            children: "Compiler diagnostic checks across modules"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-red-500 font-mono font-bold",
                                            children: totalCompileChecks
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                    lineNumber: 96,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y",
                                    children: compileChecks.map((check, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: i * 0.06
                                            },
                                            className: "px-4 py-2.5 hover:bg-[var(--muted)]/50 transition-colors cursor-default group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-4 h-4 rounded bg-red-500/15 flex items-center justify-center shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-2.5 h-2.5 text-red-500",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                x1: "18",
                                                                                y1: "6",
                                                                                x2: "6",
                                                                                y2: "18"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                                lineNumber: 116,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                                x1: "6",
                                                                                y1: "6",
                                                                                x2: "18",
                                                                                y2: "18"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                                lineNumber: 116,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                        lineNumber: 115,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-medium",
                                                                    children: check.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                    lineNumber: 119,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                            lineNumber: 113,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] font-mono text-[var(--muted-foreground)]",
                                                                    children: check.module
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-bold text-red-500 w-8 text-right",
                                                                    children: check.count
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                    lineNumber: 123,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                            lineNumber: 121,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 flex flex-wrap gap-1 opacity-40 group-hover:opacity-100 transition-opacity",
                                                    children: check.examples.map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 font-mono",
                                                            children: ex
                                                        }, ex, false, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, check.module, true, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 104,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-3 border-t bg-[var(--muted)]/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-end gap-1 h-12",
                                            children: compileChecks.map((check)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        height: 0
                                                    },
                                                    whileInView: {
                                                        height: `${check.count / 189 * 100}%`
                                                    },
                                                    viewport: {
                                                        once: true
                                                    },
                                                    transition: {
                                                        duration: 0.5
                                                    },
                                                    className: "flex-1 bg-red-500/60 rounded-t hover:bg-red-500 transition-colors",
                                                    title: `${check.category}: ${check.count}`
                                                }, check.module, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-1 mt-3",
                                            children: compileChecks.map((check)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-[10px] text-center text-[var(--muted-foreground)] truncate origin-top-left rotate-[-45deg] translate-y-1",
                                                    children: check.module.replace(".cpp", "")
                                                }, check.module, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "compile", true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 8
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -8
                            },
                            className: "rounded-xl border overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 py-2.5 border-b bg-[var(--muted)] flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-medium text-[var(--muted-foreground)]",
                                            children: "Runtime assertions across test & benchmark .co files"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 167,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-mint-500 font-mono font-bold",
                                            children: totalRuntimeChecks
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "divide-y",
                                    children: runtimeChecks.map((check, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -8
                                            },
                                            whileInView: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                delay: i * 0.08
                                            },
                                            className: "px-4 py-3 hover:bg-[var(--muted)]/50 transition-colors cursor-default group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-4 h-4 rounded bg-mint-500/15 flex items-center justify-center shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-2.5 h-2.5 text-mint-500",
                                                                        viewBox: "0 0 24 24",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: "3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M20 6L9 17l-5-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                            lineNumber: 186,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                        lineNumber: 185,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs font-mono font-medium",
                                                                    children: check.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                                    lineNumber: 189,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                            lineNumber: 183,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-mint-500",
                                                            children: check.count
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                            lineNumber: 191,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-[var(--muted-foreground)] mt-1 ml-6",
                                                    children: check.what
                                                }, void 0, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1.5 ml-6 flex flex-wrap gap-1 opacity-40 group-hover:opacity-100 transition-opacity",
                                                    children: check.examples.map((ex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[9px] px-1.5 py-0.5 rounded bg-mint-500/10 text-mint-400 font-mono",
                                                            children: ex
                                                        }, ex, false, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, check.type, true, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                            lineNumber: 174,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                                    lineNumber: 172,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, "runtime", true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                            lineNumber: 159,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureSafety.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(FeatureSafety, "cFj0piPGWe1R9hPePM0FWn6srLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = FeatureSafety;
var _c;
__turbopack_context__.k.register(_c, "FeatureSafety");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureDynamic",
    ()=>FeatureDynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$HighlightedCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/HighlightedCode.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const shapes = [
    {
        m: 128,
        k: 256,
        n: 512,
        wm: 64,
        wn: 128,
        tk: 64,
        label: "Small"
    },
    {
        m: 1024,
        k: 1024,
        n: 1024,
        wm: 64,
        wn: 128,
        tk: 64,
        label: "Medium"
    },
    {
        m: 4096,
        k: 4096,
        n: 4096,
        wm: 64,
        wn: 256,
        tk: 64,
        label: "Large"
    },
    {
        m: 8192,
        k: 2048,
        n: 16384,
        wm: 64,
        wn: 256,
        tk: 64,
        label: "Rectangular"
    }
];
const competitorProblems = [
    {
        framework: "CUDA",
        problem: "All dimensions must be template parameters or runtime arguments with manual size calculations",
        code: `// Must manually compute every buffer size
__shared__ float smA[BM][BK]; // compile-time
// Dynamic SMEM requires manual calc + launch arg
int smem = BM * BK * sizeof(float);
kernel<<<grid, block, smem>>>(...)`
    },
    {
        framework: "Triton",
        problem: "Block sizes must be tl.constexpr — no dynamic shared memory, no symbolic relationships",
        code: `# Block sizes are compile-time constants
BLOCK_M: tl.constexpr  # can't be symbolic
BLOCK_K: tl.constexpr
# No way to express PACKED_K = K/2
# Must recompile for each shape combination`
    },
    {
        framework: "Helion",
        problem: "Tile sizes chosen by autotuner — no explicit control over memory hierarchy or relationships",
        code: `# Tile sizes decided by autotuner
for tile_m in hl.tile(M):  # opaque sizing
  for tile_k in hl.tile(K):
    # No control over shared memory layout
    # No symbolic dimension relationships
    acc += a[tile_m, tile_k] @ b[...]`
    }
];
function FeatureDynamic() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("features.dynamic");
    const [activeShape, setActiveShape] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [activeProblem, setActiveProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const shape = shapes[activeShape];
    const points = [
        t("point1"),
        t("point2"),
        t("point3")
    ];
    const blocks_m = Math.ceil(shape.m / shape.wm);
    const blocks_n = Math.ceil(shape.n / shape.wn);
    const k_iters = Math.ceil(shape.k / shape.tk);
    const smem_kb = Math.round((shape.wm * shape.tk * 2 + shape.wn * shape.tk * 2) / 1024);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "3",
                    y: "3",
                    width: "18",
                    height: "18",
                    rx: "2"
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9h18M9 3v18"
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
            lineNumber: 64,
            columnNumber: 9
        }, this),
        title: t("title"),
        subtitle: t("subtitle"),
        descBullets: [
            t("desc1"),
            t("desc2"),
            t("desc3"),
            t("desc4")
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.05,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-mint-500 shrink-0 mt-0.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20 6L9 17l-5-5"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--muted-foreground)]",
                                        children: point
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 77,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border bg-[var(--card)] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2.5 border-b bg-[var(--muted)] flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-[var(--muted-foreground)]",
                                    children: "Pick a shape — derived dims update automatically"
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap border-b",
                                children: shapes.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveShape(i),
                                        className: `flex-1 min-w-[5rem] py-2.5 px-3 text-center text-xs font-medium transition-all border-r last:border-r-0 ${activeShape === i ? "bg-mint-500/10 text-mint-500" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"}`,
                                        children: s.label
                                    }, s.label, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 font-mono text-sm",
                                        children: [
                                            {
                                                name: "M",
                                                val: shape.m
                                            },
                                            {
                                                name: "K",
                                                val: shape.k
                                            },
                                            {
                                                name: "N",
                                                val: shape.n
                                            }
                                        ].map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    scale: 0.8,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: i * 0.05
                                                },
                                                className: "flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg bg-mint-500/10 border border-mint-500/20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-[var(--muted-foreground)]",
                                                        children: d.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-base font-bold text-mint-500",
                                                        children: d.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, `${d.name}-${activeShape}`, true, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-center",
                                        children: [
                                            {
                                                label: "PACKED_K",
                                                val: `${shape.k / 2}`,
                                                formula: "K/2"
                                            },
                                            {
                                                label: "META_COLS",
                                                val: `${shape.k / 8}`,
                                                formula: "K/8"
                                            },
                                            {
                                                label: "Grid",
                                                val: `${blocks_m}×${blocks_n}`,
                                                formula: "⌈M/WM⌉×⌈N/WN⌉"
                                            },
                                            {
                                                label: "SMEM",
                                                val: `${smem_kb}KB`,
                                                formula: "auto"
                                            }
                                        ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-lg border bg-[var(--muted)]/50 px-2 py-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] text-[var(--muted-foreground)]",
                                                        children: d.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold text-[var(--foreground)]",
                                                        children: d.val
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] text-mint-500 font-mono",
                                                        children: d.formula
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, d.label, true, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this))
                                    }, `derived-${activeShape}`, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-center text-[var(--muted-foreground)]",
                                        children: [
                                            "K iterations: ",
                                            k_iters,
                                            "· All derived from symbolic M, K, N"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.25,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border bg-[var(--card)] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2.5 border-b bg-[var(--muted)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-medium text-[var(--muted-foreground)]",
                                    children: "Why competitors can't do this"
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex border-b",
                                children: competitorProblems.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveProblem(i),
                                        className: `flex-1 py-2 text-xs font-medium transition-all border-r last:border-r-0 ${activeProblem === i ? "bg-red-500/10 text-red-500" : "hover:bg-[var(--muted)] text-[var(--muted-foreground)]"}`,
                                        children: c.framework
                                    }, c.framework, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    className: "p-4 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-500 dark:text-red-400 font-medium",
                                            children: competitorProblems[activeProblem].problem
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-lg border border-red-500/20 bg-red-500/5 p-3 font-mono text-xs overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$HighlightedCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedCode"], {
                                                code: competitorProblems[activeProblem].code,
                                                lang: competitorProblems[activeProblem].framework === "CUDA" ? "cpp" : "python"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, activeProblem, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureDynamic.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(FeatureDynamic, "ZzYz4slQ/g+ykUiKYGcF+AwlPSo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = FeatureDynamic;
var _c;
__turbopack_context__.k.register(_c, "FeatureDynamic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeatureAI",
    ()=>FeatureAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/FeatureCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const tuneResults = [
    {
        iter: "baseline",
        tflops: 671,
        eff: "22.2%",
        type: ".co",
        verified: true,
        opt: "1p1c, swizzle128/128, prepack, 2-stage"
    },
    {
        iter: "iter001",
        tflops: 759,
        eff: "25.1%",
        type: ".co",
        verified: true,
        opt: "TMA metadata staging"
    },
    {
        iter: "iter016",
        tflops: 772,
        eff: "25.5%",
        type: ".co",
        verified: true,
        opt: "Early empty signal + merged barrier"
    },
    {
        iter: "iter023",
        tflops: 811,
        eff: "26.8%",
        type: ".cu",
        verified: true,
        opt: "SW pipelined consumer + warpgroup_wait<1>"
    },
    {
        iter: "iter036",
        tflops: 897,
        eff: "29.6%",
        type: ".cu",
        verified: true,
        opt: "1-producer/2-consumer warp specialization"
    },
    {
        iter: "iter040",
        tflops: 1090,
        eff: "36.0%",
        type: ".cu",
        verified: true,
        opt: "3-stage pipeline (from 2-stage), 1p2c"
    },
    {
        iter: "iter068",
        tflops: 1127,
        eff: "37.2%",
        type: ".cu",
        verified: true,
        opt: "Early empty arrive + all prior (BEST)"
    }
];
const sessionTabs = [
    {
        label: "AI Prompt",
        content: `User:
continue experiment on branch
ai-tune/2026-03-24/gemm_sp_f16.
Read two reference experiment branches:
  branch 1: ai-tune/2026-03-21/gemm_sp_f16
  branch 2: ai-tune/2026-03-21/gemm_sp_e4m3
Branch 2 best can achieve over 1100 TFLOPS,
branch 1 best 600+ TFLOPS. Do not directly
copy — optimize stage over stage.
KICK OFF EXPERIMENTS NOW.`
    },
    {
        label: "AI Analysis",
        content: `AI reads reference branches and analyzes:

Key insights from e4m3 branch (1128 TFLOPS):
• TMA metadata staging: 671 → 760 (+13%)
• Merged barrier:       760 → 767
• Early empty signal:   767 → 772
• SW pipelined wait<1>: 772 → 820
• 1p2c warp spec:       820 → 895 (+9%)
• 3-stage pipeline:     895 → 1108 (+24%)

Current baseline: iter084 at 400.3 TFLOPS
NCU bottleneck: Memory 67.9%, L1TEX 52.9%
Next step: 1p2c warp specialization`
    },
    {
        label: "Iteration Loop",
        content: `iter105: 1p2c f16 accum → 403.4 TFLOPS
  ✓ Verified, but only +0.8% over baseline
  SMEM doubled (73KB → 147KB), hurts occupancy

iter107: uint2 metadata loads → 404.7 TFLOPS
  ✓ Within noise of baseline — DISCARD
  (false 131 TFLOPS reading = GPU contention)

iter109: Early empty signal → 419.2 TFLOPS
  ✓ Verified, +4.7% — KEEP

iter110: SW pipelined metadata → 388 TFLOPS
  ✗ Regression, WGMMA serialization — DISCARD

3-stage + 1p2c → 490 TFLOPS
  ✓ +22.4% over baseline — KEEP`
    },
    {
        label: "Context Fit",
        content: `Why Croktile fits AI tuning:

Kernel:    15 lines of .co  (vs 95 CUDA lines)
Context:   412 characters    (fits in one window)
Compiler:  4 safety checks   (auto-generated)
Output:    Structured errors  (AI can parse)
CLI:       --verbose --arch=sm_90a (documented)
Hidden:    0 error-prone configs exposed

AI iterates 68 times in one session,
reaching 1127 TFLOPS from 671 baseline.
Each iteration: edit .co → compile → run → NCU
Average cycle: ~3 minutes per iteration.`
    }
];
const peakTflops = 1127;
function FeatureAI() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("features.ai");
    const [activeSession, setActiveSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const points = [
        t("point1"),
        t("point2"),
        t("point3"),
        t("point4")
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$FeatureCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeatureCard"], {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z"
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 14a4 4 0 0 1 4 4v2H4v-2a4 4 0 0 1 4-4h8z"
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    strokeDasharray: "4 4"
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, this),
        title: t("title"),
        subtitle: t("subtitle"),
        descBullets: [
            t("desc1"),
            t("desc2"),
            t("desc3"),
            t("desc4")
        ],
        reversed: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                    children: points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.05,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 text-mint-500 shrink-0 mt-0.5",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2.5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M20 6L9 17l-5-5"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--muted-foreground)]",
                                        children: point
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.15,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border bg-[var(--card)] overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex border-b bg-[var(--muted)] overflow-x-auto",
                                children: sessionTabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveSession(i),
                                        className: `px-3.5 py-2.5 text-xs font-medium transition-all whitespace-nowrap border-b-2 shrink-0 ${activeSession === i ? "text-mint-500 border-mint-500 bg-[var(--card)]" : "text-[var(--muted-foreground)] border-transparent hover:text-[var(--foreground)]"}`,
                                        children: tab.label
                                    }, tab.label, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                mode: "wait",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.15
                                    },
                                    className: "p-4 font-mono text-xs leading-relaxed overflow-x-auto max-h-[260px] overflow-y-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "text-[var(--foreground)] whitespace-pre-wrap text-left",
                                        children: sessionTabs[activeSession].content
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                }, activeSession, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.25,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowResults(!showResults),
                            "aria-expanded": showResults,
                            className: "w-full py-2.5 px-4 rounded-lg text-sm font-medium border hover:bg-[var(--muted)] transition-all text-left flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "results.tsv — e4m3 sparse GEMM, 68 iterations"
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                    animate: {
                                        rotate: showResults ? 180 : 0
                                    },
                                    className: "w-4 h-4 text-[var(--muted-foreground)]",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 9l6 6 6-6"
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            children: showResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    height: 0,
                                    opacity: 0
                                },
                                animate: {
                                    height: "auto",
                                    opacity: 1
                                },
                                exit: {
                                    height: 0,
                                    opacity: 0
                                },
                                className: "overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border bg-[var(--card)] overflow-hidden mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full text-xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "border-b bg-[var(--muted)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left font-medium text-[var(--muted-foreground)]",
                                                                    children: "Iter"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-right font-medium text-[var(--muted-foreground)]",
                                                                    children: "TFLOPS"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-right font-medium text-[var(--muted-foreground)]",
                                                                    children: "Eff%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-center font-medium text-[var(--muted-foreground)]",
                                                                    children: "Type"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                    lineNumber: 194,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: "px-3 py-2 text-left font-medium text-[var(--muted-foreground)]",
                                                                    children: "Key Optimization"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                            lineNumber: 190,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y",
                                                        children: tuneResults.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].tr, {
                                                                initial: {
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1
                                                                },
                                                                transition: {
                                                                    delay: i * 0.06
                                                                },
                                                                className: `hover:bg-[var(--muted)]/50 ${row.iter === "iter068" ? "bg-mint-500/5" : ""}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 font-mono font-medium",
                                                                        children: row.iter === "iter068" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-mint-500",
                                                                            children: row.iter
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                            lineNumber: 211,
                                                                            columnNumber: 33
                                                                        }, this) : row.iter
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                        lineNumber: 209,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-right font-mono font-bold",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: row.tflops >= 1000 ? "text-mint-500" : "",
                                                                            children: row.tflops
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                            lineNumber: 215,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                        lineNumber: 214,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-right font-mono text-[var(--muted-foreground)]",
                                                                        children: row.eff
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                        lineNumber: 219,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `px-1.5 py-0.5 rounded text-[10px] font-mono ${row.type === ".co" ? "bg-mint-500/15 text-mint-500" : "bg-[var(--muted)] text-[var(--muted-foreground)]"}`,
                                                                            children: row.type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                            lineNumber: 221,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                        lineNumber: 220,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-3 py-2 text-[var(--muted-foreground)] max-w-[200px] truncate",
                                                                        title: row.opt,
                                                                        children: row.opt
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, row.iter, true, {
                                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                lineNumber: 188,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 py-2 border-t text-[10px] text-[var(--muted-foreground)] text-center",
                                            children: "H800 PCIe · 4096×8192×8192 · FP8 E4M3 Sparse GEMM · Peak 3026 TFLOPS"
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                lineNumber: 180,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    delay: 0.3,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: tuneResults.slice(0, 4).concat(tuneResults.slice(-1)).map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-mono text-[var(--muted-foreground)] w-14 text-right shrink-0",
                                            children: step.iter
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                width: 0
                                            },
                                            whileInView: {
                                                width: `${step.tflops / peakTflops * 100}%`
                                            },
                                            viewport: {
                                                once: true
                                            },
                                            transition: {
                                                duration: 0.6,
                                                delay: 0.1 + i * 0.08
                                            },
                                            className: `h-4 rounded flex items-center pl-1.5 min-w-[32px] ${step.iter === "iter068" ? "bg-mint-400" : "bg-mint-500/70"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] font-bold text-white",
                                                children: step.tflops
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.iter, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                                    lineNumber: 246,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[9px] text-center text-[var(--muted-foreground)] mt-1",
                            children: "671 → 1127 TFLOPS (+67.9%) in 68 AI-driven iterations"
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/FeatureAI.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(FeatureAI, "lHPHH469h9yyKTHXJpELUOnofCQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = FeatureAI;
var _c;
__turbopack_context__.k.register(_c, "FeatureAI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomCTA",
    ()=>BottomCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const metrics = [
    {
        value: "62%",
        label: "less code than CUDA+CuTe"
    },
    {
        value: "353",
        label: "compile-time checks"
    },
    {
        value: "1128",
        label: "peak TFLOPS (FP8)"
    }
];
function BottomCTA() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"])("hero");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-28 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-grid opacity-30 dark:opacity-15"
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-mint-400/15 dark:bg-mint-500/10 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo-pixel.png",
                                alt: "Croktile mascot",
                                className: "mx-auto h-28 w-auto mb-8 rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl sm:text-5xl font-extrabold tracking-tight",
                                children: [
                                    "Try ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gradient",
                                        children: "Croktile"
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this),
                                    " today."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-lg text-[var(--muted-foreground)] max-w-xl mx-auto",
                                children: t("subtitle")
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-6 mt-10 mb-10",
                            children: metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 16
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: 0.2 + i * 0.1
                                    },
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-mint-500",
                                            children: m.value
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-[var(--muted-foreground)] mt-1",
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                            lineNumber: 49,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, m.label, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    href: "/docs",
                                    className: "px-8 py-3.5 text-sm font-semibold bg-mint-500 text-white rounded-xl hover:bg-mint-600 transition-all shadow-lg shadow-mint-500/25 hover:shadow-mint-500/40 hover:scale-[1.02] active:scale-[0.98]",
                                    children: t("cta")
                                }, void 0, false, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://github.com/codes1gn/croktile",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-8 py-3.5 text-sm font-semibold border rounded-xl hover:bg-[var(--muted)] transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                            lineNumber: 73,
                                            columnNumber: 15
                                        }, this),
                                        "View on GitHub"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/BottomCTA.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(BottomCTA, "h6+q2O3NJKPY5uL0BIJGLIanww8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslations"]
    ];
});
_c = BottomCTA;
var _c;
__turbopack_context__.k.register(_c, "BottomCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeChangelog",
    ()=>HomeChangelog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function HomeChangelog({ entries }) {
    if (entries.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: "Changelog"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/changelog",
                                className: "text-sm text-mint-600 dark:text-mint-400 hover:underline",
                                children: "See what's new in Croktile →"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: entries.slice(0, 4).map((entry, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.08,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: `/changelog/${entry.slug}`,
                                className: "group flex items-center gap-4 p-4 rounded-xl border hover:border-mint-500/50 hover:bg-[var(--muted)] transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-[var(--muted-foreground)] shrink-0 w-32",
                                        children: new Date(entry.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors",
                                        children: entry.title
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, entry.slug, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeChangelog.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = HomeChangelog;
var _c;
__turbopack_context__.k.register(_c, "HomeChangelog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeBlog",
    ()=>HomeBlog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/i18n/routing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/src/components/landing/ScrollReveal.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function HomeBlog({ posts }) {
    if (posts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 border-t",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: "Recent highlights"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: "/blog",
                                className: "text-sm text-mint-600 dark:text-mint-400 hover:underline",
                                children: "View all blog posts →"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                    children: posts.slice(0, 3).map((post, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$components$2f$landing$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollReveal"], {
                            delay: i * 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                href: `/blog/${post.slug}`,
                                className: "group block p-6 rounded-xl border bg-[var(--card)] hover:border-mint-500/50 transition-all hover:shadow-lg hover:shadow-mint-500/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-xs text-[var(--muted-foreground)] mb-3",
                                        children: [
                                            post.tags?.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-full bg-mint-500/10 text-mint-600 dark:text-mint-400 capitalize",
                                                    children: tag
                                                }, tag, false, {
                                                    fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 21
                                                }, this)),
                                            post.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold group-hover:text-mint-600 dark:group-hover:text-mint-400 transition-colors mb-2",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    post.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--muted-foreground)] line-clamp-2",
                                        children: post.description
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        }, post.slug, false, {
                            fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/HomeBlog.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = HomeBlog;
var _c;
__turbopack_context__.k.register(_c, "HomeBlog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/GlowCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowCard",
    ()=>GlowCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GlowCard({ children, className = "" }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function handleMouseMove(e) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        onMouseMove: handleMouseMove,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: `relative rounded-xl border bg-[var(--card)] overflow-hidden transition-all
                  hover:border-mint-500/50 ${className}`,
        style: isHovered ? {
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74, 222, 131, 0.06), transparent 40%)`
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/GlowCard.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(GlowCard, "8VBw9q9ygdk3G+sQSaLpFM838nc=");
_c = GlowCard;
var _c;
__turbopack_context__.k.register(_c, "GlowCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspace/croktile-website/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CodeBlock({ code, language = "croktile", filename, highlights = [] }) {
    const lines = code.split("\n");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border bg-[var(--card)] overflow-hidden font-mono text-sm",
        children: [
            filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-2.5 border-b bg-[var(--muted)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded-full bg-red-400/80"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded-full bg-yellow-400/80"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-3 h-3 rounded-full bg-green-400/80"
                            }, void 0, false, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[var(--muted-foreground)] ml-2",
                        children: filename
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${highlights.includes(i + 1) ? "bg-mint-500/10 -mx-4 px-4 border-l-2 border-mint-500" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspace$2f$croktile$2d$website$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block w-8 text-right mr-4 text-[var(--muted-foreground)] select-none text-xs",
                                        children: i + 1
                                    }, void 0, false, {
                                        fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    line
                                ]
                            }, i, true, {
                                fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspace/croktile-website/src/components/landing/CodeBlock.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = CodeBlock;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=workspace_croktile-website_src_components_landing_0jvj4qz._.js.map