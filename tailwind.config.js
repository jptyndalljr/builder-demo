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
	darkMode: false,
	theme: {
		extend: {
			colors: {
				'22-tang': '#ff6b38',
				'22-sunrise': '#f89c25',
				'22-midnight': '#283847',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
