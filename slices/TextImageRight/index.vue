<template>
  <section class="text-image" :class="slice.variation">
	<prismic-rich-text v-if="slice.variation === 'titleImage'" :field="slice.primary.title" class="title" />
	<prismic-rich-text v-if="slice.variation !== 'titleImage'" :field="slice.primary.textField" class="text" />
    <div :class="slice.variation === 'titleImage' ? 'center' : 'image'">
		<prismic-image :field="slice.primary.image" />
	</div>
  </section>
</template>

<script>
export default {
  name: "TextImageRight",
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
.text-image {
	overflow: auto;
	display: flex;
	margin: 10px auto;
}

.default-slice {
	flex-direction: row;
	height: 130px;
}

.textImageLeft {
	flex-direction: row-reverse;
	height: 130px;
}

.titleImage {
	flex-direction: column;
	text-align: center;
}

.image {
	float: right;
	width: 20%;
}

.center {
	height: 150px;
	align-self: center;
}

img {
	max-width: 100%;
	max-height: 100%;
	border-radius: 9%;
}

.text {
	padding: 2% 5%;
	width: 80%;
	color: #000;
}

.title {
	text-align: center;
	margin-bottom: 2em;
	color: #000;
}
</style>
