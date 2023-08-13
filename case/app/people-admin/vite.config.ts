import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      images: "/src/assets/images",
      service: "/src/service",
      context: "/src/context",
      routes: "/src/routes",
      helpers: "/src/helpers",
      models: "/src/models",
    },
  },
})
