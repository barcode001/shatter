// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   // in dev (“serve”) use root paths; in build, prefix with /shatter/
//     base: command === "serve" ? "/" : "/shatter/",
//   plugins: [react()],
//   server: {
//     historyApiFallback: true, // <- for React Router
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  return {
    // Dev server: use root (‘/’)
    // Production build: prefix asset URLs with '/shatter/'
    base: command === 'serve' ? '/' : '/shatter/',
    plugins: [react()],
    server: {
      // Ensures client-side routing works in dev
      historyApiFallback: true,
    },
  }
})