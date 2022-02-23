<template>
	<section class="text-section mx-auto px-8 py-4">
		<h1 class="py-2">{{ slice.primary.headline }}</h1>
		<h2 class="py-2">{{ slice.primary.subhead }}</h2>
		<prismic-rich-text class="py-2" :field="slice.primary.copy" />
	</section>
</template>

<script>
	export default {
		name: 'TextSlice',
		props: {
			slice: {
				type: Object,
				required: true,
				default() {
					return {};
				},
			},
		},
	};
</script>

<style scoped lang="scss"></style>
