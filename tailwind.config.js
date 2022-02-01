module.exports = {
	purge: {
		content: [
			`components/**/*.{vue,js}`,
			`layouts/**/*.vue`,
			`pages/**/*.vue`,
			`plugins/**/*.{js,ts}`,
			`nuxt.config.{js,ts}`,
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'22-orange': '#ee6056',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
