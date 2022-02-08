<template>
  <section class="my-8" :style="`background-color: ${slice.primary.background}`">
	  <div class="py-5 center-image">
		  <img :src="slice.primary.image.url" :alt="slice.primary.altText" />
	  </div>
  </section>
</template>

<script>
export default {
  name: "ImageSlice",
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

<style scoped>
.center-image {
	display: flex;
	justify-content: center;
}

.center-image img {
	width: auto;
	height: auto;
	max-height: 200px;
}
</style>
