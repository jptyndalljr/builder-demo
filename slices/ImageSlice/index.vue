<template>
  <section class="my-8">
	  <div class="p-5 flex" :class="slice.variation">
		<figure v-if="slice.primary.caption">
			<img :style="{ maxHeight: slice.primary.maxheight }" :src="slice.primary.image.url" :alt="slice.primary.image.alt" class="aspect-16-9" />
			<figcaption class="text-center">{{ slice.primary.caption }}</figcaption>
		</figure>
		<img v-else :src="slice.primary.image.url" :alt="slice.primary.image.alt" class="aspect-16-9" />
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
  }
}
</script>

<style scoped lang="scss">
.default-slice {
	justify-content: center;
}

.imageLeftAligned {
	justify-content: start;
	padding-left: 20px;
}

.imageRightAligned {
	justify-content: end;
	padding-right: 20px;
}

img {
	width: auto;
	height: auto;
}
</style>
