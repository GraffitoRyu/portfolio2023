import { defineConfig } from 'vite'
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

const publicDir = resolve(__dirname, 'public');
const outDir = resolve(__dirname, '../deploy_vite');
const pages = resolve(__dirname, 'pages');

// https://vitejs.dev/config/
export default defineConfig({
  root: pages,
  base: './',
  publicDir: publicDir,
  appType: 'mpa',
  server: {
    host: '192.168.219.108',
    port: '3333',
  },
  preview: { port: '2871', },
  plugins: [
    svgr(),
    react(),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    minify: 'esbuild',
    manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(pages, 'index.html'),
        projects: path.resolve(pages, 'projects/index.html'),
      },
      external: [
        // '/public/vendor/**',
        '/src/**',
      ],
    },
  },
})
