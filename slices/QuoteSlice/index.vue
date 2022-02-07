<template>
  <section class="content-section quote container">
	  <blockquote class="block-quotation">{{ $prismic.asText(slice.primary.quoteText) }}</blockquote>
	  <div v-if="slice.variation === 'quoteReference'">
		  <cite>
			  <prismic-rich-text :field="slice.primary.Reference" />
		  </cite>
	  </div>
  </section>
</template>

<script>
export default {
  name: "QuoteSlice",
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
.quote blockquote {
	display: block;
	font-size: 36px;
	font-style: italic;
	font-weight: normal;
	letter-spacing: 1.14;
	line-height: 1.5em;
	quotes: "“" "”" "‘" "’";
  	text-align: center;
  	margin-bottom: 12px;
}

.quote blockquote:before {
	content: open-quote;
	font-size: 2.5em;
	font-weight: 900;
	line-height: 0.1em;
	margin-left: 10px;
	margin-right: 10px;
	vertical-align: -0.3em;
}

.quote blockquote:after {
	content: close-quote;
	font-size: 2.5em;
	font-weight: 900;
	line-height: 0.1em;
	margin-left: 10px;
	margin-right: 10px;
	vertical-align: -0.3em;
}

.quote div {
	width: 300px;
	float: right;
}

.quote div cite {
	display: flex;
	line-height: 18px;
}

.quote div cite:before {
	content: "~";
	margin: 0px 4px 0px 0px;
}
</style>

