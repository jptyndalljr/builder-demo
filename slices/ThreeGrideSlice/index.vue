<template>
  <section class="mx-auto px-5 tri-grid" :style="`background-color: ${slice.primary.background}`">
	  <div v-for="(item, i) in slice.items" :key="i">
		  <prismic-rich-text :field="item.header" class="h5" />
	  </div>
	  <div v-for="(item, i) in slice.items" :key="i">
		<prismic-rich-text :field="item.text" class="column-text" />
	  </div>
  </section>
</template>

<script>
export default {
  name: "ThreeGrideSlice",
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
.tri-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
}

.column-text {
	color: #fff;
}
</style>
