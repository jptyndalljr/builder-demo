<template>
  <section class="banner-background" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + slice.primary.background.url + ')'}">
	<div class="banner-content container">
		<h1 class="banner-title">{{ $prismic.asText(slice.primary.title) }}</h1>
    	<prismic-rich-text :field="slice.primary.description" class="banner-description mb-3" />
		<prismic-link :field="slice.primary.link" class="banner-button mt-5">{{ slice.primary.linkLabel }}</prismic-link>
	</div>
  </section>
</template>

<script>
export default {
  name: "BannerSlice",
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
.banner-background {
	margin: -70px 0 80px;
	padding: 10em 0 80em;
	background-position: center center;
	background-size: cover;
	color: #fff;
	line-height: 1.75;
	text-align: center;
}

.banner-content {
	text-align: center;
}

.banner-title, .banner-description {
	width: 90%;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
}

.banner-title {
	font-size: 70px;
	font-weight: 900;
	line-height: 70px;
}

.banner-button {
	background: #fff;
	border-radius: 7px;
	color: #484d52;
	font-size: 14px;
	font-weight: 700;
	padding: 15px 40px;
}

.banner-button:hover {
	background: #c8c9cb;
}
</style>
