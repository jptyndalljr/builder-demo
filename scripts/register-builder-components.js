import { registerComponent } from '@builder.io/sdk-vue';

// Import the Builder blocks you want
// import '@builder.io/sdk-vue/nuxt2/src/blocks/image.vue';
// import '@builder.io/sdk-vue/nuxt2/src/blocks/text.vue';
// import '@builder.io/sdk-vue/nuxt2/src/blocks/columns.vue';
// import '@builder.io/sdk-vue/nuxt2/src/blocks/button.vue';
// import '@builder.io/sdk-vue/nuxt2/src/blocks/section.vue';

// Register your Builder components
import HelloWorldComponent from '../components/HelloWorld';
import ButtonComponent from '../components/Button';
import HeroBannerComponent from '../components/HeroBanner';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';

registerComponent(HelloWorldComponent, {
	name: 'Hello World',
	inputs: [
		{
			name: 'text',
			type: 'string',
			defaultValue: 'World',
		},
	],
});

registerComponent(ButtonComponent, {
	name: 'Button',
	inputs: [
		{
			name: 'text',
			type: 'string',
			defaultValue: 'Click Me',
		},
		{
			name: 'link',
			type: 'string',
		},
		{
			name: 'target',
			type: 'boolean',
			defaultValue: false,
			helperText: 'Open link in new tab?',
		},
	],
});

registerComponent(HeroBannerComponent, {
	name: 'Hero Banner',
	inputs: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'description',
			type: 'string',
		},
		{
			name: 'cta',
			type: 'object',
			defaultValue: {
				ctaLink: '/',
			},
			subFields: [
				{
					name: 'ctaCopy',
					type: 'string',
				},
				{
					name: 'ctaLink',
					type: 'string',
				},
				{
					name: 'target',
					type: 'boolean',
					defaultValue: false,
					helperText: 'Open link in new tab?',
				},
			],
		},
		{
			name: 'backgroundImage',
			type: 'file',
			allowedFileTypes: ['jpeg', 'jpg', 'png'],
		},
	],
});

registerComponent(HeaderComponent, {
	name: 'Header',
	inputs: [
		{
			name: 'logo',
			type: 'file',
			allowedFileTypes: ['jpeg', 'jpg', 'png'],
		},
	],
});

registerComponent(FooterComponent, {
	name: 'Footer',
	inputs: [
		{
			name: 'logo',
			type: 'file',
			allowedFileTypes: ['jpeg', 'jpg', 'png'],
		},
		{
			name: 'columns',
			type: 'object',
			subFields: [
				{
					name: 'column1',
					type: 'object',
					defaultValue: {
						content: 'Footer left text',
					},
					subFields: [
						{
							name: 'content',
							type: 'richText',
						},
					],
				},
				{
					name: 'column2',
					type: 'object',
					defaultValue: {
						content: 'Footer right text',
					},
					subFields: [
						{
							name: 'content',
							type: 'richText',
						},
					],
				},
			],
		},
	],
});
