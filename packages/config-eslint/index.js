import { eslintBaseConfig } from "./base.js";
import { eslintNextjsConfig } from "./next.js";
import { eslintReactConfig } from "./react.js";
import { eslintViteConfig } from "./vite.js";

const eslintConfig = {
  base: eslintBaseConfig,
  react: eslintReactConfig,
  next: eslintNextjsConfig,
  vite: eslintViteConfig,
};

export default eslintConfig;
