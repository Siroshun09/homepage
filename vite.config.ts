/// <reference types="node" />
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [solid(), tailwindcss()],
	build: {
		cssMinify: "lightningcss",
		chunkSizeWarningLimit: 600,
	},
});
