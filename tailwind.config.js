module.exports = {
	content: [
		`components/**/*.{vue,js,ts}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`plugins/**/*.{js,ts}`,
		`nuxt.config.{js,ts}`,
		'slices/**/*.vue'
	],
	theme: {
		extend: {
			colors: {
				'22-tang': '#ff6b38',
				'22-sunrise': '#f89c25',
				'22-midnight': '#283847',
			},
		},
	},
	plugins: [],
};
