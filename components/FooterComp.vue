<template>
	<section class="footerArea">
		<div class="footer-logo bg-gray-300 flex justify-center">
			<img :src="doc.logo.url" :alt="doc.logo.alt" class="p-5" />
		</div>
		<div class="tri-grid bg-gray-600">
			<div class="col1 py-8 pl-8">
				<div v-for="(d, index) in doc.column1" :key="index">
					<div class="h5">{{ d.header }}</div>
					<prismic-rich-text :field="d.col1Text" />
				</div>
			</div>
			<div class="col2 py-8">
				<div v-for="(d, index) in doc.column2" :key="index">
					<div class="h5">{{ d.header }}</div>
					<prismic-rich-text :field="d.text" />
					<div class="social-media">
						<img :src="d.facebook.url" :alt="d.facebook.alt" />
						<img :src="d.instagram.url" :alt="d.instagram.alt" />
						<img :src="d.twitter.url" :alt="d.twitter.alt" />
					</div>
				</div>
			</div>
			<div class="col3 py-8 pr-8">
				<div v-for="(d, index) in doc.column3" :key="index">
					<div class="h5">{{ d.header }}</div>
					<prismic-rich-text :field="d.text" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			doc: {}
		}
	},
	async fetch() {
		const res = await this.$prismic.api.getSingle('footer');
		if (res) {
			this.doc = res.data;
		} else {
			error({ statusCode: 404, message: 'Page not found' });
		}
	}
}
</script>

<style lang="scss">
.footer-logo img {
	width: 90px;
}

.tri-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	margin: 0 auto;
	gap: 1rem;
	color: #fff;
}

.social-media {
	display: flex;
	justify-content: space-around;
	img {
		width: 90px;
	}
}
</style>
