import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/shatter/',            // your repo name

  plugins: [react()],
  server: {
    historyApiFallback: true, // <- for React Router
  }
})
