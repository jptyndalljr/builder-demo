<template>
	<section class="section container mx-auto">
		<prismic-rich-text :field="slice.primary.title" class="title" />
		<prismic-rich-text :field="slice.primary.description" />
		<div class="gallery">
			<a
				v-for="(item, i) in slice.items"
				:key="`slice-item-${i}`"
				:href="item.link"
				target="_blank"
				class="gallery-link"
			>
				<div class="flex flex-1 justify-between">
					<div class="">
						<prismic-rich-text :field="item.linkTitle" class="gallery-link-title" />
						<prismic-rich-text :field="item.linkDescription" class="text-white" />
					</div>
					<div class="flex justify-center content-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</div>
				</div>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Presentation',
	props: {
		slice: {
			type: Object,
			required: true,
			default() {
				return {};
			},
		},
	},
};
</script>

<style scoped>
.section {
	@apply container;
	position: relative;
	padding: 4em;
}
.title {
	margin-bottom: 1em;
}
.gallery {
	@apply flex flex-col;
}
.gallery-link {
	@apply p-3 mb-4 rounded-lg no-underline shadow-lg;
	background-color: #112035;
}
.gallery-link-title {
	font-family: 'Domine', serif;
	color: #d35b42;
	font-weight: 700;
	font-size: 1.3em;
	line-height: 1.5em;
	text-transform: underline;
}
</style>
