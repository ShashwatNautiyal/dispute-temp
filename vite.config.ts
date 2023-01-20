import { defineConfig } from "vite";
import path from "path";

import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],

  build: {
    target: 'esnext',
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
