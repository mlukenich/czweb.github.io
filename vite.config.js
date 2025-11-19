import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        careers: resolve(__dirname, 'pages/careers.html'),
        benefits: resolve(__dirname, 'pages/benefits.html'),
      },
    },
  },
  server: {
    open: true,
  }
});
