import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/shatter/', // ✅ this must match your GitHub repo name
  plugins: [react()],
  build: {
    outDir: 'docs', // ✅ this must match where you’re deploying from
    emptyOutDir: true,
  },
});