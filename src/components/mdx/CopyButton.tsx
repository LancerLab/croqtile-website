"use client";

import { useState, useCallback } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="opacity-0 group-hover/code:opacity-100 transition-opacity text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] px-2 py-0.5 rounded"
      aria-label="Copy code"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
