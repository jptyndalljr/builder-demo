<template>
	<section class="tile-section mx-auto px-8 py-4">
		<div class="md:flex tile-container">
			<div
				v-for="(item, i) in slice.items"
				:key="`slice-item-${i}`"
				class="tile py-2 box-border border-8 border-black"
				:class="{ fill: slice.items.length === 2 }">
				<PrismicRichText :field="item.TileContent" class="px-2" />
			</div>
		</div>
	</section>
</template>

<script>
	import { getSliceComponentProps } from '@prismicio/vue/components';

	export default {
		name: 'TileSlice',
		// The array passed to `getSliceComponentProps` is purely optional and acts as a visual hint for you
		props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
	};
</script>

<style scoped lang="scss">
	.tile {
		flex: 0 0 33.33%;
	}

	.fill:not(:first-child) {
		flex: 0 0 66.66%;
	}

	@media (max-width: 768px) {
		.tile:first-child {
			border-bottom-width: 4px;
		}

		.tile:not(:first-child) {
			border-top-width: 4px;
		}

		.tile:not(:first-child):not(:last-child) {
			border-bottom-width: 4px;
		}
	}

	@media (min-width: 768px) {
		.tile:first-child {
			border-right-width: 4px;
		}

		.tile:not(:first-child) {
			border-left-width: 4px;
		}

		.tile:not(:first-child):not(:last-child) {
			border-right-width: 4px;
		}
	}
</style>
