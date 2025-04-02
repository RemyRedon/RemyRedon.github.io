// vite.config.js (changez l'extension de .ts à .js)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'RemyRedon.github.io',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
});
