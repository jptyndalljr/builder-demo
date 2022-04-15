import axios from 'axios';

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// env: {
	// 	baseUrl: process.env.BASE_URL || 'http://localhost:3000',
	// },

	// migrating to new runtime config: https://nuxtjs.org/tutorials/moving-from-nuxtjs-dotenv-to-runtime-config/
	publicRuntimeConfig: {
		baseURL: process.env.BASE_URL || 'http://localhost:3000',
		pagesURL: 'https://cdn.builder.io/api/v2/content/page?apiKey=' + process.env.API_SECRET,
	},
	privateRuntimeConfig: {
		apiSecret: process.env.API_SECRET,
	},

	generate: {
		routes: async () => {
			let { data } = await axios.get(process.env.PAGES_URL, {
				headers: { 'Content-Type': 'application/json' },
			});
			return data.results.map((page) => {
				return {
					route: page.query[0].value,
					payload: page,
				};
			});
		},
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: '22squared',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/assets/scss/main.scss'],
	styleResources: {
		scss: ['@/assets/scss/_variables.scss'],
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome',
		'@nuxtjs/google-fonts',
		// '@builder.io/sdk-vue/nuxt',
		'@nuxt/postcss8',
		'@nuxt/components',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', '@builder.io/sdk-vue/nuxt'],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
				tailwindcss: './tailwind.config.js',
				autoprefixer: {},
			},
		},
	},

	fontawesome: {
		icons: {
			solid: true,
			brands: true,
		},
	},

	googleFonts: {
		families: {
			'Playfair+Display': true,
			'Work+Sans': true,
		},
		display: 'swap',
	},
};
