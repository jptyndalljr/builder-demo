<template>
	<section class="image-gallery content-section container mx-auto py-24">
		<div class="flex flex-col">
			<div class="h-1 bg-gray-100 rounded overflow-hidden">
				<div class="w-24 h-full bg-22-orange"></div>
			</div>
			<div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
				<prismic-rich-text
					class="sm:w-2/5 font-medium title-font text-2xl mb-2 sm:mb-0"
					:field="slice.primary.galleryTitle"
				/>
				<prismic-rich-text
					class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0"
					:field="slice.primary.galleryDescription"
				/>
			</div>
		</div>

		<div class="gallery">
			<div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="gallery-item">
				<prismic-image class="rounded-md" :field="item.image" />
				<prismic-rich-text class="font-normal" :field="item.imageDescription" />
				<p>
					<prismic-link :field="item.link" class="gallery-link">{{ item.linkLabel }}</prismic-link>
				</p>
			</div>
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
.gallery {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-justify-content: space-between;
	justify-content: space-between;
}

.gallery-item {
	-webkit-box-flex: 0 1 48%;
	-moz-box-flex: 0 1 48%;
	-webkit-flex: 0 1 48%;
	-ms-flex: 0 1 48%;
	flex: 0 1 48%;
}

.gallery-link {
	@apply bg-22-tang mt-6 inline-flex no-underline text-white border-0 py-2 px-6 focus:outline-none rounded text-lg;
	text-transform: uppercase;
}

@media (max-width: 767px) {
	.content-section {
		margin-bottom: 2rem;
	}

	.gallery-item {
		-webkit-box-flex: 100%;
		-moz-box-flex: 100%;
		-webkit-flex: 100%;
		-ms-flex: 100%;
		flex: 100%;
	}
}
</style>
