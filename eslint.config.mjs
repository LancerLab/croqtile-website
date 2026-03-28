import nextConfig from "eslint-config-next";

export default [
  ...nextConfig,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },
  {
    ignores: [".next/", "out/", "node_modules/", "jest.config.ts", "__tests__/"],
  },
];
