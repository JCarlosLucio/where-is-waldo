import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'findUs',
        short_name: 'findUs',
        description: 'A Where is Waldo type App.',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'apple touch icon',
          },
          {
            src: '/safari-pinned-tab.svg',
            sizes: '225x225',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
        theme_color: '#0e0c31',
        background_color: '#0e0c31',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
      },
    }),
  ],
  preview: {
    port: 3000,
  },
});
