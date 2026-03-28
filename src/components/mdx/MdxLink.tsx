"use client";

import { Link } from "@/i18n/routing";

export function MdxLink(props: any) {
  const { href, children, ...rest } = props;
  const isInternal = href && !href.startsWith("http") && !href.startsWith("mailto:");

  if (isInternal) {
    return (
      <Link
        href={href}
        className="text-mint-600 dark:text-mint-400 underline underline-offset-2 hover:text-mint-500 transition-colors"
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className="text-mint-600 dark:text-mint-400 underline underline-offset-2 hover:text-mint-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
