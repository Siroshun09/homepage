import type { NuxtConfig } from "@nuxt/types";

// https://nuxt.com/docs/api/nuxt-config
const nuxtConfig: NuxtConfig = {
	target: "static",

	head: {
		title: "homepage",
		htmlAttrs: {
			lang: "en",
			prefix: "og: https://ogp.me/ns#",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "A homepage of Siroshun",
			},
			{ name: "msapplication-TileColor", content: "#ffffff" },
			{ name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
			{ name: "theme-color", content: "#ffffff" },
			{ hid: "og:site_name", property: "og:site_name", content: "Siroshun" },
			{ hid: "og:type", property: "og:type", content: "website" },
			{
				hid: "og:url",
				property: "og:url",
				content: "https://siroshun09.github.io",
			},
			{ hid: "og:title", property: "og:title", content: "Siroshun" },
			{
				hid: "og:description",
				property: "og:description",
				content: "A homepage of Siroshun",
			},
			{
				hid: "og:image",
				property: "og:image",
				content: "https://i.imgur.com/xwV3w6t.jpg",
			},
			{
				hid: "og:image:type",
				property: "og:image:type",
				content: "image/jpeg",
			},
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:site", content: "@siroshun09" },
			{ name: "twitter:creator", content: "@siroshun09" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "apple-touch-icon",
				sizes: "57x57",
				href: "/apple-icon-57x57.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "60x60",
				href: "/apple-icon-60x60.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "72x72",
				href: "/apple-icon-72x72.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "76x76",
				href: "/apple-icon-76x76.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "114x114",
				href: "/apple-icon-114x114.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "120x120",
				href: "/apple-icon-120x120.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "144x144",
				href: "/apple-icon-144x144.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "152x152",
				href: "/apple-icon-152x152.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-icon-180x180.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/android-icon-192x192.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "96x96",
				href: "/favicon-96x96.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{ rel: "manifest", href: "/manifest.json" },
		],
	},

	css: ["@fortawesome/fontawesome-svg-core/styles.css"],

	plugins: ["@/plugins/fontawesome.ts"],

	components: false,

	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

	build: {
		transpile: ["@fortawesome/vue-fontawesome"],
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
				},
			},
		},
	},

	typescript: {
		strict: true,
	},

	googleFonts: {
		families: {
			Rubik: [400],
			Karla: [600],
		},
		display: "swap",
	},

	compatibilityDate: "2024-11-20",
};

export default nuxtConfig;
