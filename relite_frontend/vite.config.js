import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemap({
      hostname: 'https://www.relitetechnologies.com',
      dynamicRoutes: [
        '/',          
        '/about',     
        '/products',  
        '/contact',
      ],
      changefreq: 'daily',
      priority: 1.0,
    }),
  ],
})
