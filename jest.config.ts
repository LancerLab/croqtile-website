import type { Config } from "jest";

const esmPackages = [
  "next-intl",
  "use-intl",
  "next-themes",
  "framer-motion",
  "@formatjs",
  "intl-messageformat",
  "next-mdx-remote",
  "@mdx-js",
  "estree-util-.*",
  "unist-util-.*",
  "devlop",
  "hast-util-.*",
  "comma-separated-tokens",
  "property-information",
  "space-separated-tokens",
  "vfile.*",
  "mdast-util-.*",
  "trim-lines",
  "micromark.*",
  "ccount",
  "escape-string-regexp",
  "markdown-table",
  "longest-streak",
  "zwitch",
  "decode-named-character-reference",
  "character-entities",
  "remark-.*",
  "unified",
  "bail",
  "is-plain-obj",
  "trough",
  "rehype-.*",
  "hast-.*",
  "web-namespaces",
  "html-void-elements",
  "stringify-entities",
  "character-entities-html4",
  "character-entities-legacy",
  "markdown-extensions",
].join("|");

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
        useESM: false,
      },
    ],
  },
  transformIgnorePatterns: [
    `/node_modules/(?!(${esmPackages})/)`,
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/layout.tsx",
  ],
};

export default config;
