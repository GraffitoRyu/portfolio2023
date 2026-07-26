// eslint.config.js
import pluginRouter from "@tanstack/eslint-plugin-router";
import { eslintReactConfig } from "./react.js";

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const eslintViteConfig = [
  ...pluginRouter.configs["flat/recommended"],
  ...eslintReactConfig,
];
