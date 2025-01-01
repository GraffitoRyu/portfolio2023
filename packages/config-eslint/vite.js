// eslint.config.js
import pluginRouter from "@tanstack/eslint-plugin-router";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const viteConfig = [
  ...pluginRouter.configs["flat/recommended"],
  ...reactConfig,
];
