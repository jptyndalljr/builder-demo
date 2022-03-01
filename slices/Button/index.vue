<template>
	<div class="m-4">
		<prismic-link class="button px-4 py-2" :field="slice.primary.link" :target="slice.primary.target ? '_blank' : '_self'">
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
a {
	color: $button-text;
	&:hover {
		background: $button-hover;
	}
}
</style>
