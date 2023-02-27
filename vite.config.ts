import { defineConfig } from "vite";
import path from "path";

import solid from "vite-plugin-solid";
import pages from "vite-plugin-pages";
import { VitePWA as pwa } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    pwa({
      registerType: "prompt",
      injectRegister: "auto",
      strategies: "injectManifest",
      
      srcDir: 'src/workers',
      filename: 'service-worker.ts',

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,jpg}"]
      },

      // includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
      manifest: {
        name: 'Dispute',
        short_name: 'Dispute',
        description: 'Dispute', // TODO
        theme_color: '#ffffff',
        icons: [
          // TODO
        ]
      }
    }),

    solid(), pages()
  ],

  build: {
    target: 'esnext',
  },

  server: {
    port: 3000
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
