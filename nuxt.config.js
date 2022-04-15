export default {
	target: 'static',
	env: {
		baseUrl: process.env.BASE_URL || 'http://localhost:3000',
	},
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
	css: ['@/assets/scss/main.scss'],
	styleResources: {
		scss: ['@/assets/scss/_variables.scss'],
	},
	plugins: [],
	components: true,
	buildModules: [
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome',
		'@nuxtjs/google-fonts',
		'@builder.io/sdk-vue/nuxt',
		'@nuxt/postcss8',
	],
	modules: ['@nuxtjs/style-resources'],
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
