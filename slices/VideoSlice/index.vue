<template>
  <section class="video-section">
	  <prismic-embed :field="slice.primary.video" class="mx-auto px-8" />
	  <prismic-rich-text v-if="slice.primary.description" class="mx-auto px-8" :field="slice.primary.description" />
  </section>
</template>

<script>
export default {
  name: "VideoSlice",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style scoped lang="scss">

</style>
