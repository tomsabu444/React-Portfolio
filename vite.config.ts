import path from "path"
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] }),
    // PWA - Progressive Web App.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon/favicon.ico', 'favicon/favicon.svg', 'favicon/favicon-96x96.png', 'favicon/apple-touch-icon.png', 'og-image.png'],
      manifest: {
        name: 'TOM SABU PORTFOLIO',
        short_name: 'TomSabu',
        description: 'Tom Sabu - Full Stack Developer & Software Engineer Portfolio',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: 'favicon/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'favicon/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
