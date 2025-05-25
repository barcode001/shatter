import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shatter/',  // ✅ Required for GitHub Pages
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      input: 'index.html' // ✅ This tells Vite where to inject
    }
  }
});