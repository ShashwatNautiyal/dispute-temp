import { defineConfig } from "vite";
import path from "path";

import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],

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
