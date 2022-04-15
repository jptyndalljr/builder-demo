<template>
	<div class="m-4">
		<a
			class="button px-4 py-2"
			:href="link"
			:target="target ? '_blank' : '_self'">
			{{ text }}
		</a>
		<!-- :target="slice.primary.target ? '_blank' : '_self' -->
	</div>
</template>

<script>
	export default {
		name: 'Button',
		props: {
			text: {
				type: String,
				default: 'Click me',
			},
			link: {
				type: String,
			},
			target: {
				type: Boolean,
				default: false,
			},
		},
	};
</script>

<style scoped lang="scss">
	a {
		color: $button-text;
		&:hover {
			background: $button-hover;
		}
	}

	.default-slice {
		text-align: left;
	}

	.buttonCenterAligned {
		text-align: center;
	}

	.buttonRightAligned {
		text-align: right;
	}
</style>
