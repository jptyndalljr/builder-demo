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
		aspectRatio: {
			auto: 'auto',
			square: '1 / 1',
			video: '16 / 9',
			1: '1',
			2: '2',
			3: '3',
			4: '4',
			5: '5',
			6: '6',
			7: '7',
			8: '8',
			9: '9',
			10: '10',
			11: '11',
			12: '12',
			13: '13',
			14: '14',
			15: '15',
			16: '16',
		},
	},
	plugins: [
		require('@tailwindcss/aspect-ratio'),
	],
	variants: {
		aspectRatio: ['responsive', 'hover']
	}
};
