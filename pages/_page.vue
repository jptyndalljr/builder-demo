<template>
	<div>
		<div v-if="canShowContent">
			<builder-render-content model="page" :content="content" />
		</div>
	</div>
</template>

<script>
	// import { builder, RenderContent } from '@builder.io/vue';
	import { getContent, isEditing } from '@builder.io/sdk-vue';
	import '../scripts/register-builder-components';

	// TODO: enter your public API key
	const BUILDER_PUBLIC_API_KEY = '593f714c13a94bc4b37f7ab4a3062a50'; // ggignore

	// builder.init('593f714c13a94bc4b37f7ab4a3062a50');

	export default {
		data: () => ({
			canShowContent: false,
			content: null,
		}),
		async fetch() {
			const content = await getContent({
				model: 'page',
				apiKey: BUILDER_PUBLIC_API_KEY,
				userAttributes: {
					urlPath: this.$route.path,
				},
			});
			if (!content) {
				if (this.$nuxt.context?.ssrContext?.res) {
					this.$nuxt.context.ssrContext.res.statusCode = 404;
				}
			}
			this.content = content;
			this.canShowContent = content || isEditing();
		},
	};
</script>
