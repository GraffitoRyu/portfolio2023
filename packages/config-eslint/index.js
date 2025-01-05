import { eslintBaseConfig } from "./base";
import { eslintNextjsConfig } from "./next";
import { eslintReactConfig } from "./react";
import { eslintViteConfig } from "./vite";

const eslintConfig = {
  base: eslintBaseConfig,
  react: eslintReactConfig,
  next: eslintNextjsConfig,
  vite: eslintViteConfig,
};

export default eslintConfig;
