import smConfig from './sm.json';
// import { getStoriesPaths } from 'slice-machine-ui/helpers/storybook';

if (!smConfig.apiEndpoint) {
	console.warn("Looks like Slice Machine hasn't been bootstraped already.");
}

export default {
	target: 'static',
	head: {
		title: '22Squared',
		meta: [
			{ charset: 'utf-8', },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1', },
			{ hid: 'description', name: 'description', content: '', },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Domine:wght@400;700&family=Roboto:wght@300;500;700&display=swap', },
		],
	},
	css: ['@/assets/css/global.css'],
	plugins: [],
	components: true,
	buildModules: ['@nuxtjs/tailwindcss'],
	modules: [
		[
			'@nuxtjs/prismic',
			{
				endpoint: smConfig.apiEndpoint || '',
				apiOptions: {
					routes: [
						{
							type: 'page',
							path: '/:uid',
						},
					],
				},
			},
		],
		['nuxt-sm'],
	],
	generate: {
		// fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
		fallback: true,
	},

	build: {
		transpile: ['vue-slicezone', 'nuxt-sm'],
	},
	// storybook: {
		// This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
		// stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
	// },
	// This is a bug with `getStoriesPaths` and Nuxt that is awaiting to be fixed
	// ignore: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
};
