<template>
  <section class="social-media-icons p-5">
	<div v-for="(item, i) in slice.items" :key="i">
  		<prismic-link :field="item.socialLink"><prismic-image :field="item.icon" :alt="item.altText" /></prismic-link>
	</div>
  </section>
</template>

<script>
export default {
  name: "SocialMediaSlice",
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
.social-media-icons {
	display: flex;
	justify-content: space-between;
}
</style>
