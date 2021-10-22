import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/assets/scss/abstracts/_variables.scss";
          @import "./src/assets/scss/abstracts/_mixins.scss";
          @import "./src/assets/scss/layouts/_z-index.scss";
        `,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, 'docs'),
  },
});
