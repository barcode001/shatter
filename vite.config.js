import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig(({ command }) => ({
  base: '/shatter/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}));