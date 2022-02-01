<template>
	<section class="team-gallery content-section container">
		<prismic-rich-text :field="slice.primary.title" class="title" />
		<div class="gallery">
			<div v-for="(item, i) in slice.items" :key="`slice-item-${i}`" class="gallery-item">
				<prismic-image :field="item.image" class="rounded" />
				<p class="name">{{ item.name }}</p>
				<span class="position">{{ item.position }}</span>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TeamGallery',
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
.image {
	border: 2px solid #112035;
}
.title {
	margin-bottom: 3em;
}
.name {
	font-family: 'Domine', serif;
	color: #d35b42;
	font-weight: 700;
	font-size: 1.3em;
	line-height: 1.5em;
	margin-bottom: 0.25em;
}
.position {
	font-size: 1em;
}
.gallery {
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-justify-content: space-between;
	justify-content: space-between;
}

.gallery-item {
	-webkit-box-flex: 0 1 32%;
	-moz-box-flex: 0 1 32%;
	-webkit-flex: 0 1 32%;
	-ms-flex: 0 1 32%;
	flex: 0 1 32%;
	@apply pb-5;
}

@media (max-width: 767px) {
	.content-section {
		margin-bottom: 2rem;
	}

	.gallery-item {
		-webkit-box-flex: 100%;
		-moz-box-flex: 100%;
		-webkit-flex: 100%;
		-ms-flex: 100%;
		flex: 100%;
	}
}
</style>
