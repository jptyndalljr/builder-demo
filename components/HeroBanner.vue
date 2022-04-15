<template>
	<section
		class="hero-banner mb-4"
		:style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
		<div class="banner-content">
			<h1 class="banner-title">{{ title }}</h1>
			<p class="mb-8 banner-description">{{ description }}</p>
			<a
				class="banner-button"
				:href="cta.ctaLink"
				:target="cta.target ? '_blank' : '_self'">
				{{ cta.ctaCopy }}
			</a>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'HeroBannerSlice',
		props: {
			title: {
				type: String,
			},
			description: {
				type: String,
			},
			cta: {
				type: Object,
			},
			backgroundImage: {
				type: String,
			},
		},
	};
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

	.banner-title,
	.banner-description {
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
			color: #fff;
		}
	}

	@media (max-width: 767px) {
		.hero-banner {
			margin: 0 0 40px;
			padding: 10em 0 6em;
		}
	}
</style>
