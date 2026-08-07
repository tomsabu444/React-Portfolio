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
        name: 'Tom Sabu | Portfolio',
        short_name: 'Tom Sabu',
        description: 'Tom Sabu - Full Stack Developer & Software Engineer Portfolio',
        theme_color: '#151414',
        background_color: '#151414',
        display: 'standalone',
        start_url: '/',
        scope: '/',
        id: '/',
        orientation: 'portrait',
        icons: [
          {
            src: 'favicon/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'favicon/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'favicon/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
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
  server: {
    allowedHosts: [
      '.ngrok-free.app'
    ]
  },
  optimizeDeps: {
    include: ['firebase/app', 'firebase/analytics']
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'vendor-react',
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            },
            {
              name: 'vendor-motion',
              test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
            },
            {
              name: 'vendor-icons',
              test: /[\\/]node_modules[\\/]@iconify-react[\\/]/,
            },
          ],
        },
      },
    },
  },
})
