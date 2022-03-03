<template>
  <section class="my-5 px-8 similar-section">
    <prismic-rich-text :field="slice.primary.headline" class="h2 text-center" />
	<div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-5">
		<div class="caseStudy" v-for="(cs, i) in this.studies" :key="i">
			<div class="py-5">
				<prismic-embed v-if="!slice.items[cs - 1].exampleShowcase" class="aspect-video" :field="slice.items[cs - 1].studyMedia" />
				<prismic-image class="aspect-16-9" v-else :field="slice.items[cs - 1].studyImage" />
			</div>
			<div class="text-center">
				<prismic-link class="button px-4 py-2" :field="slice.items[cs - 1].ctaLink">{{ slice.items[cs - 1].ctaText }}</prismic-link>
			</div>
		</div>
	</div>
  </section>
</template>

<script>
export default {
  name: "SimilarSlice",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
		return {
			studies: 3 // testing use only until functionality of other related component is completed
		}
	},
}
</script>

<style lang="scss" scoped>
</style>
