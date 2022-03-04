<template>
  <section class="my-5 px-8 similar-section">
    <prismic-rich-text :field="slice.primary.headline" class="h2 text-center" />
	<div class="grid grid-cols-1 md:grid-cols-3 md:gap-4 xl:grid-cols-4 xl:gap-5">
		<div class="border-2 p-2" v-for="(cs, i) in slice.items" :key="`case-study-${i}`">
			<div class="py-5">
				<prismic-embed v-if="!cs.exampleShowcase" class="aspect-square" :field="cs.studyMedia" />
				<prismic-image class="aspect-square" v-else :field="cs.studyImage" />
			</div>
			<div class="text-center">
				<prismic-link class="button px-4 py-2" :field="cs.ctaLink">{{ cs.ctaText }}</prismic-link>
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
  }
}
</script>

<style lang="scss" scoped>
</style>
