"use client";

type Props = {
  code: string;
  language?: string;
  filename?: string;
  highlights?: number[];
};

export function CodeBlock({
  code,
  language = "croktile",
  filename,
  highlights = [],
}: Props) {
  const lines = code.split("\n");

  return (
    <div className="rounded-xl border bg-[var(--card)] overflow-hidden font-mono text-sm">
      {filename && (
        <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-[var(--muted)]">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          <span className="text-xs text-[var(--muted-foreground)] ml-2">
            {filename}
          </span>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre>
          <code>
            {lines.map((line, i) => (
              <div
                key={i}
                className={`${
                  highlights.includes(i + 1)
                    ? "bg-mint-500/10 -mx-4 px-4 border-l-2 border-mint-500"
                    : ""
                }`}
              >
                <span className="inline-block w-8 text-right mr-4 text-[var(--muted-foreground)] select-none text-xs">
                  {i + 1}
                </span>
                {line}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
