import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { transform } from "@svgr/core";
import jsx from "@svgr/plugin-jsx";
import { defineConfig, transformWithOxc } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

const svgReactComponent = (): Plugin => ({
  name: "svg-react-component",
  enforce: "pre",
  async load(id) {
    const [filePath, query] = id.split("?", 2);

    if (!filePath.endsWith(".svg") || query?.includes("url")) return null;

    const result = await transformWithOxc(
      await transform(
        await readFile(filePath, "utf8"),
        {
          jsxRuntime: "automatic",
          plugins: [jsx],
        },
        { filePath },
      ),
      filePath,
      { jsx: { runtime: "automatic" }, lang: "jsx" },
    );

    return { code: result.code, map: result.map, moduleType: "js" };
  },
});

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "gsap/dist/ScrollTrigger": "gsap/ScrollTrigger",
    },
    tsconfigPaths: true,
  },
  plugins: [
    svgReactComponent(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
});
