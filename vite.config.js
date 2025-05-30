import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '', // leave this empty for Netlify custom domain
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});