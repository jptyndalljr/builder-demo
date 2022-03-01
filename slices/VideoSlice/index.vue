<template>
  <section class="video-section">
	  <LazyYoutube v-if="slice.primary.source === false" :src="vurl(slice.primary.source)" aspectRatio="16:9" maxWidth="100%" autoplay />
	  <LazyVimeo v-else :src="vurl(slice.primary.source)" aspectRatio="16:9" maxWidth="100%" autoplay />
	  <prismic-rich-text v-if="slice.primary.description" class="mx-auto px-8" :field="slice.primary.description" />
  </section>
</template>

<script>
import { LazyYoutube, LazyVimeo } from "vue-lazytube";
export default {
  name: "VideoSlice",
  components: {
	  LazyYoutube,
	  LazyVimeo,
  },
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods: {
	  vurl(type) {
		  if (type === true) {
			  return "https://player.vimeo.com/video/" + this.slice.primary.videoid;
		  } else {
			  return "https://www.youtube.com/watch?v=" + this.slice.primary.videoid;
		  }
	  }
  }
}
</script>

<style scoped lang="scss">

</style>
