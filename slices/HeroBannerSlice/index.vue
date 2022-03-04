<template>
  <section class="hero-banner mb-4" :style="{ backgroundImage: 'url(' + slice.primary.background.url + ')' }">
	  <div class="banner-content container">
		<h1 class="banner-title">{{ $prismic.asText(slice.primary.title) }}</h1>
		<prismic-rich-text :field="slice.primary.description" class="mb-8 banner-description" />
		<prismic-link :field="slice.primary.link" class="banner-button">{{ slice.primary.linkLabel }}</prismic-link>
	</div>
  </section>
</template>

<script>
export default {
  name: "HeroBannerSlice",
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
.hero-banner {
	color: #fff;
	padding: 10em 0 8em;
	background-position: center center;
	background-size: cover;
	line-height: 1.75;
	text-align: center;
}

.banner-title, .banner-description {
	width: 95%;
	margin-left: auto;
	margin-right: auto;
}

.banner-button {
	background: $button-bg;
	border-radius: $button-border-radius;
	color: $button-text;
	padding: 15px 40px;
	border: 3px solid $button-outline;
	&:hover {
		background-color: $button-hover;
	}
}

@media (max-width: 767px) {
	.hero-banner {
		margin: 0 0 40px;
		padding: 10em 0 6em;
	}
}
</style>
