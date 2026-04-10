import { highlightCodeDualTheme } from "@/lib/shiki";
import { CopyButton } from "./CopyButton";

const LANG_LABELS: Record<string, string> = {
  choreo: "Choreo",
  croktile: "Choreo",
  croqtile: "Choreo",
  co: "Choreo",
  cpp: "C++",
  c: "C",
  python: "Python",
  py: "Python",
  bash: "Bash",
  shell: "Shell",
  typescript: "TypeScript",
  ts: "TypeScript",
  javascript: "JavaScript",
  js: "JavaScript",
  json: "JSON",
  yaml: "YAML",
  cmake: "CMake",
  makefile: "Makefile",
  markdown: "Markdown",
  md: "Markdown",
};

type Props = {
  code: string;
  lang: string;
};

export async function CodeBlock({ code, lang }: Props) {
  const html = await highlightCodeDualTheme(code, lang || "text");
  const label = LANG_LABELS[lang] || lang.toUpperCase() || "TEXT";

  return (
    <div className="code-block-wrapper group/code my-6 relative rounded-xl border border-[var(--border)] overflow-hidden">
      <div className="flex items-center justify-between px-4 py-1.5 bg-[var(--muted)] border-b border-[var(--border)]">
        <span className="text-xs font-mono text-[var(--muted-foreground)] select-none">
          {label}
        </span>
        <CopyButton text={code} />
      </div>
      <div
        className="shiki-wrapper overflow-x-auto text-sm [&>pre]:!bg-transparent [&>pre]:p-4 [&>pre]:m-0 bg-[var(--card)]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
