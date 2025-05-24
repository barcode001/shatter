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


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ command }) => ({
//   // base: command === 'build' ? '/' : '/shatter/', // ✅ only set /shatter/ for production
//    base: '/shatter/', // 👈 IMPORTANT
//   plugins: [react()],
//   build: {
//     outDir: 'docs',
//   },
// }));

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // base:'/shatter/',
  base: '/shatter/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))