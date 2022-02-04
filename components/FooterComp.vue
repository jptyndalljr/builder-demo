<template>
	<div>FOOTER GOES HERE</div>
</template>

<script>
export default {
	data() {
		return {
			document: {}
		}
	},
	async fetch() {
		this.document = await this.$prismic.api.getSingle('footer');
	}
}
</script>
