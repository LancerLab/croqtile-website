import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: ["cpp", "bash", "typescript", "javascript", "json", "yaml", "markdown", "python"],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang: string = "cpp",
  theme: string = "github-dark"
): Promise<string> {
  const highlighter = await getHighlighter();

  const mappedLang = lang === "croktile" || lang === "co" ? "cpp" : lang;

  const validLangs = highlighter.getLoadedLanguages();
  const finalLang = validLangs.includes(mappedLang as any) ? mappedLang : "text";

  return highlighter.codeToHtml(code, {
    lang: finalLang,
    theme,
  });
}
