<template>
  <section class="p-3 w-full contact-section">
	  <div class="grid contact-us">
		  <h1 class="heading">Contact Us</h1>
		  <div class="left text-center">
			  <div class="h2 mb-5 title">{{ slice.primary.header1 }}</div>
			  <prismic-link class="button px-4 py-2" :field="slice.primary.link1">{{ slice.primary.btnText1 }}</prismic-link>
		  </div>
		  <div class="hidden md:block divider">&nbsp;</div>
		  <div class="right text-center">
			  <div class="h2 mb-5 title">{{ slice.primary.header2 }}</div>
			  <prismic-link :field="slice.primary.link2" class="button px-4 py-2">{{ slice.primary.btnText2 }}</prismic-link>
		  </div>
	  </div>
  </section>
</template>

<script>
export default {
  name: "ContactSlice",
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
.heading {
	grid-area: header;
	text-transform: uppercase;
	font-weight: bold;
}

.left {
	grid-area: lt;
}

.divider {
	grid-area: line;
	border-right: 3px solid black;
	height: 250px;
}

.right {
	grid-area: rt;
}

.contact-us {
	grid-template-columns: 1fr;
	grid-template-rows: 80px;
	grid-template-areas:
	   "header"
	   "lt"
	   "rt";
	justify-items: center;
	align-items: center;
	grid-gap: 1rem;
}

.title {
	font-family: $ff-sans;
	font-weight: bold;
	text-transform: capitalize;
}

/** Tablet layout **/
@media (min-width: 768px) {
	.contact-us {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 150px;
		grid-template-areas:
		"header header"
		"lt rt";
	}

	.heading {
		font-size: 2rem;
	}
}

/** Desktop layout **/
@media (min-width: 960px) {
	.contact-us {
		grid-template-columns: 1fr 50px 1fr;
		grid-template-rows: 150px;
		grid-template-areas:
		"header header header"
		"lt line rt";
	}

	.heading {
		font-size: 3rem;
	}
}
</style>
