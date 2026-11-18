import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    modulePreload: { polyfill: false },
    cssMinify: "lightningcss",
    chunkSizeWarningLimit: 600,
  },
});
