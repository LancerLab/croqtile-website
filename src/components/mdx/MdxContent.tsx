import { MDXRemote } from "next-mdx-remote/rsc";
import { Children, isValidElement } from "react";
import { CodeBlock } from "./CodeBlock";
import { MdxLink } from "./MdxLink";

function extractCodeFromChildren(children: any): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractCodeFromChildren).join("");
  if (isValidElement(children)) {
    return extractCodeFromChildren((children as any).props?.children ?? "");
  }
  return String(children ?? "");
}

function extractCodeChild(preChildren: any) {
  const kids = Children.toArray(preChildren);
  for (const child of kids) {
    if (isValidElement(child) && (child as any).type === "code") {
      return child;
    }
    if (isValidElement(child) && (child as any).props?.className?.includes?.("language-")) {
      return child;
    }
  }
  if (kids.length === 1 && isValidElement(kids[0])) {
    return kids[0];
  }
  return null;
}

const mdxComponents = {
  h1: (props: any) => (
    <h1
      className="text-3xl font-bold mt-10 mb-4 tracking-tight text-[var(--foreground)]"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="group text-2xl font-semibold mt-10 mb-4 tracking-tight border-b border-[var(--border)] pb-2 text-[var(--foreground)]"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="group text-xl font-semibold mt-8 mb-3 text-[var(--foreground)]"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="text-lg font-semibold mt-6 mb-2 text-[var(--foreground)]"
      {...props}
    />
  ),
  p: (props: any) => (
    <p className="my-4 leading-7 text-[var(--foreground)]" {...props} />
  ),
  ul: (props: any) => (
    <ul className="my-4 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="my-4 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: any) => <li className="leading-7" {...props} />,
  a: MdxLink,
  strong: (props: any) => (
    <strong className="font-semibold text-[var(--foreground)]" {...props} />
  ),
  em: (props: any) => (
    <em className="text-[var(--foreground)] italic" {...props} />
  ),
  code: (props: any) => {
    if (typeof props.children === "string" && !props.className) {
      return (
        <code
          className="px-1.5 py-0.5 rounded-md bg-amber-100/70 dark:bg-amber-900/25 text-amber-900 dark:text-amber-200 text-[0.875em] font-mono border border-amber-200/60 dark:border-amber-700/40"
          {...props}
        />
      );
    }
    return <code {...props} />;
  },
  pre: (props: any) => {
    const codeChild = extractCodeChild(props.children);
    if (codeChild) {
      const childProps = (codeChild as any).props || {};
      const className = childProps.className || "";
      const langMatch = className.match(/language-([\w+-]+)/);
      const lang = langMatch ? langMatch[1] : "";
      const code = extractCodeFromChildren(childProps.children).replace(/\n$/, "");

      if (code) {
        return <CodeBlock code={code} lang={lang} />;
      }
    }
    return (
      <pre
        className="my-6 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 overflow-x-auto text-sm font-mono"
        {...props}
      />
    );
  },
  blockquote: (props: any) => (
    <blockquote
      className="my-6 border-l-4 border-mint-500 pl-5 py-1 bg-mint-50/30 dark:bg-mint-950/20 rounded-r-lg text-[var(--muted-foreground)] [&>p]:my-2"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-[var(--border)]">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  thead: (props: any) => (
    <thead className="bg-[var(--muted)]" {...props} />
  ),
  th: (props: any) => (
    <th
      className="px-4 py-2.5 text-left font-semibold text-[var(--foreground)] border-b border-[var(--border)]"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-2.5 border-b border-[var(--border)] [tr:nth-child(even)>&]:bg-[var(--muted)]/30"
      {...props}
    />
  ),
  img: (props: any) => (
    <img className="my-6 rounded-xl border border-[var(--border)] max-w-full" {...props} />
  ),
  hr: () => (
    <hr className="my-10 border-t border-[var(--border)]" />
  ),
};

type Props = {
  source: string;
};

export function MdxContent({ source }: Props) {
  return (
    <div className="prose-custom max-w-none">
      <MDXRemote
        source={source}
        components={mdxComponents}
        options={{
          parseFrontmatter: true,
          mdxOptions: { format: "md" },
        }}
      />
    </div>
  );
}
