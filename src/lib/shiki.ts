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
        "c",
        "bash",
        "typescript",
        "javascript",
        "json",
        "yaml",
        "markdown",
        "python",
        "cmake",
        "makefile",
        choreoLang,
      ],
    });
  }
  return highlighterPromise;
}

function mapLang(lang: string): string {
  if (lang === "croktile" || lang === "co" || lang === "choreo") {
    return "choreo";
  }
  return lang;
}

export async function highlightCode(
  code: string,
  lang: string = "cpp",
  theme: string = "github-dark"
): Promise<string> {
  const highlighter = await getHighlighter();
  const mapped = mapLang(lang);
  const validLangs = highlighter.getLoadedLanguages();
  const finalLang = validLangs.includes(mapped as any) ? mapped : "text";

  return highlighter.codeToHtml(code, {
    lang: finalLang,
    theme,
  });
}

export async function highlightCodeDualTheme(
  code: string,
  lang: string = "cpp"
): Promise<string> {
  const highlighter = await getHighlighter();
  const mapped = mapLang(lang);
  const validLangs = highlighter.getLoadedLanguages();
  const finalLang = validLangs.includes(mapped as any) ? mapped : "text";

  return highlighter.codeToHtml(code, {
    lang: finalLang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });
}
