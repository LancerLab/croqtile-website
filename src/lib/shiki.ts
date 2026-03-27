import { createHighlighter, type Highlighter } from "shiki";
import type { LanguageRegistration } from "shiki";
import choreoGrammar from "./choreo.tmLanguage.json";

let highlighterPromise: Promise<Highlighter> | null = null;

const choreoLang: LanguageRegistration = {
  ...(choreoGrammar as any),
  name: "choreo",
  scopeName: "source.choreo",
  embeddedLangsLazy: ["cpp"],
};

export function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [
        "cpp",
        "bash",
        "typescript",
        "javascript",
        "json",
        "yaml",
        "markdown",
        "python",
        choreoLang,
      ],
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

  let mappedLang = lang;
  if (lang === "croktile" || lang === "co" || lang === "choreo") {
    mappedLang = "choreo";
  }

  const validLangs = highlighter.getLoadedLanguages();
  const finalLang = validLangs.includes(mappedLang as any) ? mappedLang : "text";

  return highlighter.codeToHtml(code, {
    lang: finalLang,
    theme,
  });
}
