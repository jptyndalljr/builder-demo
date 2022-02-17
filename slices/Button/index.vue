<template>
	<div class="m-4">
		<prismic-link class="button px-4 py-2" :field="slice.primary.link">
			{{ slice.primary.text }}
		</prismic-link>
	</div>
</template>

<script>
export default {
	name: 'Button',
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

<style scoped lang="scss">
.button {
	background: $button-bg;
	border: 2px solid $button-outline;
	font-family: $ff-sans;
	font-weight: 700;
	text-align: center;
}
a {
	color: $button-text;
}
</style>
