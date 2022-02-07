<template>
	<section>
		<slice-zone type="page" :uid="$route.params.uid" />
	</section>
</template>

<script>
import SliceZone from 'vue-slicezone';

export default {
	data() {
		return {
			error: null,
		};
	},
	async asyncData({ $prismic, params, error }) {
		const document = await $prismic.api.getByUID('page', params.uid);
		if (document) {
			return { document };
		} else {
			error({ statusCode: 404, message: 'Page not found' });
		}
	},
	components: {
		SliceZone,
	},
};
</script>
