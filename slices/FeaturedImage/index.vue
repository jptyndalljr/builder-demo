<template>
	<section class="content-section container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<prismic-rich-text class="title-font sm:text-4xl text-3xl mb-4 font-medium" :field="slice.primary.title" />
			<prismic-rich-text class="mb-8 leading-relaxed" :field="slice.primary.headline" />
			<prismic-link
				class="inline-flex ctaLink text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
				:field="slice.primary.link"
				>{{ slice.primary.linkLabel }}</prismic-link
			>
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<prismic-image :field="slice.primary.featuredImage" class="rounded-md" />
		</div>
	</section>
</template>

<script>
export default {
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

<style scoped>
.ctaLink {
	background-color: #ee6056;
}
</style>
