<template>
  <section class="flex flex-wrap h-36 tags">
	<div v-for="(item, i) in slice.items" :key="`slice-item-${i}`">
		<div class="h3 pb-5">{{ item.tagType }}<span v-if="item.caseStudy"> - case study</span></div>
		<prismic-link :field="item.caseStudyLink" class="m-3" v-if="item.caseStudy">
			<span class="bg-slate-300 p-5 rounded-full hover:bg-slate-700 hover:text-white hover:cursor-pointer">#{{ item.tagName }}</span>
		</prismic-link>
		<span v-else class="bg-slate-300 p-5 m-3 rounded-full">#{{ item.tagName }}</span>
	</div>
  </section>
</template>

<script>
import { getSliceComponentProps } from "@prismicio/vue/components";

export default {
  name: "Tags",
  // The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
  props: getSliceComponentProps(["slice", "index", "slices", "context"]),
}
</script>

<style lang="scss" scoped>

</style>
