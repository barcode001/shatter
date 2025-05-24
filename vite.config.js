
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/shatter/', // <-- match your GitHub repo name
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})