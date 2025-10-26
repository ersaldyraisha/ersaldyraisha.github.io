import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'preload-contour-image',
      transformIndexHtml: {
        enforce: 'pre',
        transform() {
          return [
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                href: '/src/assets/img/figures/contour.jpg',
              },
              injectTo: 'head',
            },
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                href: '/src/assets/img/figures/wave-top.svg',
              },
              injectTo: 'head',
            },
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                href: '/src/assets/img/figures/wave-bottom.svg',
              },
              injectTo: 'head',
            },
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                href: '/src/assets/img/figures/wave-top-gradient.svg',
              },
              injectTo: 'head',
            },
            {
              tag: 'link',
              attrs: {
                rel: 'preload',
                as: 'image',
                href: '/src/assets/img/figures/wave-bottom-gradient.svg',
              },
              injectTo: 'head',
            },
          ];
        },
      },
    },
  ],
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
