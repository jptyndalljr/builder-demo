<template>
	<section class="container py-24">
		<prismic-rich-text :field="slice.primary.title" class="title" />
		<prismic-rich-text :field="slice.primary.description" class="leading-relaxed" />
		<div class="px-5 py-12 mx-auto -my-8 divide-y-2 divide-white">
			<div class="py-8 flex flex-wrap md:flex-nowrap" v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
				<div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
					<span class="font-semibold title-font text-22-orange uppercase">{{ item.type }}</span>
					<span class="mt-1 text-gray-100 text-sm">{{ item.subType }}</span>
				</div>
				<div class="md:flex-grow">
					<h2 class="text-2xl font-medium text-22-orange title-font mb-2">
						{{ item.headline }}
					</h2>
					<prismic-rich-text class="leading-relaxed" :field="item.description" />
					<prismic-embed :field="item.embedMedia" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'CaseStudies',
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
.section {
	position: relative;
	padding: 4em;
}
a {
	color: #111;
}
.title {
	margin-bottom: 2em;
}
</style>
