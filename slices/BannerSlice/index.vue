<template>
	<section
		:class="`banner-background ${slice.variation}`"
		:style="{
			backgroundImage:
				'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + slice.primary.background.url + ')',
		}"
	>
		<div class="banner-content container">
			<h1 class="banner-title">
				{{ $prismic.asText(slice.primary.title) }}
			</h1>
			<prismic-rich-text
				v-if="!!slice.primary.description"
				:field="slice.primary.description"
				class="banner-description"
			/>
			<prismic-link v-if="!!slice.primary.linkLabel" :field="slice.primary.link" class="banner-button">{{
				slice.primary.linkLabel
			}}</prismic-link>
		</div>
	</section>
</template>

<script>
export default {
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
.fullHeight {
	height: 100vh;
	min-height: 20em;
}

.banner-background {
	margin: 0 0 4em 0;
	padding: 10em 0 10em;
	display: flex;
	justify-content: center;
	align-items: center;
	background-position: center center;
	background-size: cover;
	color: #ffffff;
	line-height: 1.75;
	text-align: center;
}

.banner-content {
	text-align: center;
}

.banner-title,
.banner-description {
	width: 90%;
	max-width: 490px;
	margin-left: auto;
	margin-right: auto;
}

.banner-title {
	color: #ffffff;
	font-size: 70px;
	line-height: 70px;
}

.banner-button {
	background: #ee6056;
	border-radius: 7px;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	padding: 15px 40px;
}
.banner-button:hover {
	background: #c8c9cb;
}

@media (max-width: 767px) {
	.banner-background {
		margin: 0 0 40px;
		padding: 10em 0 6em;
	}

	.banner-title {
		font-size: 50px;
		line-height: 50px;
	}
}
</style>
