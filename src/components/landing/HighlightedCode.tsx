"use client";

import { useEffect, useState, memo } from "react";

type Props = {
  code: string;
  lang?: string;
  theme?: string;
};

async function fetchHighlighted(code: string, lang: string, theme: string): Promise<string> {
  const res = await fetch("/api/highlight", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, lang, theme }),
  });
  if (!res.ok) return code;
  const data = await res.json();
  return data.html;
}

export const HighlightedCode = memo(function HighlightedCode({
  code,
  lang = "choreo",
  theme = "github-dark",
}: Props) {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    fetchHighlighted(code, lang, theme).then(setHtml);
  }, [code, lang, theme]);

  if (html) {
    return (
      <div
        className="[&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!text-[13px] [&_code]:!leading-[1.7]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <pre className="text-[var(--foreground)] text-[13px] leading-[1.7]">
      <code>{code}</code>
    </pre>
  );
});
